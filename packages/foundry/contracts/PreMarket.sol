//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.24;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

struct Order {
    bytes32 tokenId;
    uint256 amount;
    uint256 collateral;
    uint256 status;
    address seller;
    address buyer;
}

interface IOrderToken {
    function mint(address to, uint256 tokens) external;
    function transferFrom(address from, address to, uint256 tokenId) external;
    function ownerOf(uint256 tokenId) external view returns (address);
}

contract PreMarket is AccessControl {
    bytes32 public constant MANAGER_ROLE = keccak256("MANAGER_ROLE");

    uint8 constant ORDER_OPEN = 1;
    uint8 constant ORDER_FILLED = 2;
    uint8 constant ORDER_SETTLED = 3;
    uint8 constant ORDER_CANCELLED = 4;

    IOrderToken public orderToken;
    Order[] public orders;
    mapping(bytes32 => address) public tokens;

    event OrderCreated(bytes32 indexed tokenId, uint256 amount, uint256 collateral, address seller);
    event OrderFilled(uint256 indexed index, address buyer);
    event OrderSettled(uint256 indexed index);
    event OrderCancelled(uint256 indexed index);
    event TokenRedeemed(bytes32 indexed tokenId, address buyer);

    constructor(IOrderToken _orderToken) {
        orderToken = _orderToken;
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MANAGER_ROLE, msg.sender);
    }

    function createOrder(
        bytes32 _tokenId,
        uint256 _amount,
        uint256 _collateral,
        address _seller
    ) external payable {
        require(msg.value >= _collateral, "Invalid collateral supplied");
        orders.push(Order(_tokenId, _amount, _collateral, ORDER_OPEN, _seller, address(0)));
        emit OrderCreated(_tokenId, _amount, _collateral, _seller);
    }

    function fillOrder(uint256 _index, address _buyer) external {
        Order storage order = orders[_index];
        require(order.status == ORDER_OPEN, "Order already filled");
        order.buyer = _buyer;
        order.status = ORDER_FILLED;
        orderToken.mint(_buyer, order.amount);
        emit OrderFilled(_index, _buyer);
    }

    function settleOrder(uint256 _index) external {
        Order storage order = orders[_index];
        require(order.status == ORDER_FILLED, "Order not filled");
        address token = tokens[order.tokenId];
        require(token != address(0), "Token not found");

        IERC20(token).transferFrom(order.seller, address(this), order.amount);
        payable(order.seller).transfer(order.collateral);
        order.status = ORDER_SETTLED;
        emit OrderSettled(_index);
    }

    function cancelOrder(uint256 _index) external {
        Order storage order = orders[_index];
        require(order.status == ORDER_OPEN, "Order not open");
        require(msg.sender == order.seller, "Not the seller");

        payable(order.seller).transfer(order.collateral);        
        order.status = ORDER_CANCELLED;
        emit OrderCancelled(_index);
    }

    function redeemTokens(uint256 _orderId) external {
        Order storage order = orders[_orderId];
        require(order.status == ORDER_SETTLED, "Order not settled");
        address _token = tokens[order.tokenId];
        uint256 _amount = order.amount;
        address orderTokenOwner = orderToken.ownerOf(_orderId);
        IERC20(_token).transfer(orderTokenOwner, _amount);
        emit TokenRedeemed(order.tokenId, msg.sender);
    }

    function setToken(bytes32 _tokenId, address _token) external onlyRole(MANAGER_ROLE) {
        require(tokens[_tokenId] == address(0), "Token already set");
        tokens[_tokenId] = _token;
    }

    function setOrderToken(IOrderToken _orderToken) external onlyRole(MANAGER_ROLE) {
        orderToken = _orderToken;
    }

    function getOrders() external view returns (Order[] memory) {
        return orders;
    }
}