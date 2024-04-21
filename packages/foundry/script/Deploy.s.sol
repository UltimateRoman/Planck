//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/PreMarket.sol";
import "../contracts/OrderToken.sol";
import "./DeployHelpers.s.sol";

contract DeployScript is ScaffoldETHDeploy {
    error InvalidPrivateKey(string);

    function run() external {
        uint256 deployerPrivateKey = setupLocalhostEnv();
        if (deployerPrivateKey == 0) {
            revert InvalidPrivateKey(
                "You don't have a deployer account. Make sure you have set DEPLOYER_PRIVATE_KEY in .env or use `yarn generate` to generate a new random account"
            );
        }
        vm.startBroadcast(deployerPrivateKey);
        OrderToken orderToken = new OrderToken(
            "Planck Order Token",
            "POT",
            18,
            vm.addr(deployerPrivateKey)
        );
        console.logString(
            string.concat(
                "OrderToken deployed at: ",
                vm.toString(address(orderToken))
            )
        );
        PreMarket preMarket = new PreMarket(IOrderToken(address(orderToken)));
        console.logString(
            string.concat(
                "PreMarket deployed at: ",
                vm.toString(address(preMarket))
            )
        );
        vm.stopBroadcast();

        /**
         * This function generates the file containing the contracts Abi definitions.
         * These definitions are used to derive the types needed in the custom scaffold-eth hooks, for example.
         * This function should be called last.
         */
        exportDeployments();
    }

    function test() public {}
}
