//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {IERC165} from "@openzeppelin/contracts/interfaces/IERC165.sol";
import {ERC404} from "erc404/ERC404.sol";
import {IERC404} from "erc404/interfaces/IERC404.sol";

contract OrderToken is AccessControl, ERC404 {
  bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

  string public baseURI;

  constructor(
    string memory name_,
    string memory symbol_,
    uint8 decimals_,
    address initialOwner_
  ) ERC404(name_, symbol_, decimals_) {
    _setERC721TransferExempt(initialOwner_, true);
    _grantRole(DEFAULT_ADMIN_ROLE, initialOwner_);
    _grantRole(MINTER_ROLE, initialOwner_);
  }

  function setERC721TransferExempt(address account_, bool value_) external onlyRole(DEFAULT_ADMIN_ROLE) {
    _setERC721TransferExempt(account_, value_);
  }

  function mint(address to_, uint256 tokens_) external onlyRole(MINTER_ROLE) {
    _retrieveOrMintERC721(to_);
    _mintERC20(to_, tokens_);
  }

  function tokenURI(uint256 id_) public view override returns (string memory) {
    return string.concat(baseURI, Strings.toString(id_));
  }

  function setBaseURI(string calldata baseURI_) external onlyRole(DEFAULT_ADMIN_ROLE) {
    baseURI = baseURI_;
  }

  function supportsInterface(
    bytes4 interfaceId
  ) public view override(AccessControl, ERC404) returns (bool) {
    return
      interfaceId == type(IERC404).interfaceId ||
      interfaceId == type(IERC165).interfaceId;
  }
}
