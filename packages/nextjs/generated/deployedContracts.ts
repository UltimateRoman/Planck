const contracts = {
  10200: [
    {
      name: "Gnosis Chiado",
      chainId: "10200",
      contracts: {
        OrderToken: {
          address: "0x53fb47c8A5c09395B4804F30CF20C8a30db1C4e8",
          abi: [
            {
              type: "constructor",
              inputs: [
                {
                  name: "name_",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "symbol_",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "decimals_",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "initialOwner_",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "DEFAULT_ADMIN_ROLE",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "DOMAIN_SEPARATOR",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "ID_ENCODING_PREFIX",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "MINTER_ROLE",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "allowance",
              inputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "approve",
              inputs: [
                {
                  name: "spender_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "valueOrId_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "balanceOf",
              inputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "baseURI",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "decimals",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint8",
                  internalType: "uint8",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc20Approve",
              inputs: [
                {
                  name: "spender_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "erc20BalanceOf",
              inputs: [
                {
                  name: "owner_",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc20TotalSupply",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc20TransferFrom",
              inputs: [
                {
                  name: "from_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "erc721Approve",
              inputs: [
                {
                  name: "spender_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "erc721BalanceOf",
              inputs: [
                {
                  name: "owner_",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc721TotalSupply",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc721TransferExempt",
              inputs: [
                {
                  name: "target_",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc721TransferFrom",
              inputs: [
                {
                  name: "from_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "getApproved",
              inputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getERC721QueueLength",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getERC721TokensInQueue",
              inputs: [
                {
                  name: "start_",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "count_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256[]",
                  internalType: "uint256[]",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getRoleAdmin",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "grantRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "hasRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "isApprovedForAll",
              inputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "mint",
              inputs: [
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "tokens_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "minted",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "name",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "nonces",
              inputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "owned",
              inputs: [
                {
                  name: "owner_",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256[]",
                  internalType: "uint256[]",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "ownerOf",
              inputs: [
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "erc721Owner",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "permit",
              inputs: [
                {
                  name: "owner_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "spender_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value_",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "deadline_",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "v_",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "r_",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "s_",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "renounceRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "callerConfirmation",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "revokeRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "safeTransferFrom",
              inputs: [
                {
                  name: "from_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "safeTransferFrom",
              inputs: [
                {
                  name: "from_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "data_",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setApprovalForAll",
              inputs: [
                {
                  name: "operator_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "approved_",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setBaseURI",
              inputs: [
                {
                  name: "baseURI_",
                  type: "string",
                  internalType: "string",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setERC721TransferExempt",
              inputs: [
                {
                  name: "account_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value_",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setSelfERC721TransferExempt",
              inputs: [
                {
                  name: "state_",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "supportsInterface",
              inputs: [
                {
                  name: "interfaceId",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "symbol",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "tokenURI",
              inputs: [
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "totalSupply",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "transfer",
              inputs: [
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "transferFrom",
              inputs: [
                {
                  name: "from_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "valueOrId_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "units",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "event",
              name: "Approval",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "spender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "value",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "Approval",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "spender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "id",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "ApprovalForAll",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "operator",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "approved",
                  type: "bool",
                  indexed: false,
                  internalType: "bool",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleAdminChanged",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "previousAdminRole",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "newAdminRole",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleGranted",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "sender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleRevoked",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "sender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "Transfer",
              inputs: [
                {
                  name: "from",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "Transfer",
              inputs: [
                {
                  name: "from",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "id",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "error",
              name: "AccessControlBadConfirmation",
              inputs: [],
            },
            {
              type: "error",
              name: "AccessControlUnauthorizedAccount",
              inputs: [
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "neededRole",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              type: "error",
              name: "AlreadyExists",
              inputs: [],
            },
            {
              type: "error",
              name: "DecimalsTooLow",
              inputs: [],
            },
            {
              type: "error",
              name: "InsufficientAllowance",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidApproval",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidExemption",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidOperator",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidRecipient",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidSender",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidSigner",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidSpender",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidTokenId",
              inputs: [],
            },
            {
              type: "error",
              name: "MintLimitReached",
              inputs: [],
            },
            {
              type: "error",
              name: "NotFound",
              inputs: [],
            },
            {
              type: "error",
              name: "OwnedIndexOverflow",
              inputs: [],
            },
            {
              type: "error",
              name: "PermitDeadlineExpired",
              inputs: [],
            },
            {
              type: "error",
              name: "QueueEmpty",
              inputs: [],
            },
            {
              type: "error",
              name: "QueueFull",
              inputs: [],
            },
            {
              type: "error",
              name: "QueueOutOfBounds",
              inputs: [],
            },
            {
              type: "error",
              name: "RecipientIsERC721TransferExempt",
              inputs: [],
            },
            {
              type: "error",
              name: "Unauthorized",
              inputs: [],
            },
            {
              type: "error",
              name: "UnsafeRecipient",
              inputs: [],
            },
          ],
        },
        PreMarket: {
          address: "0x8A8A5e45368dbc6C263eC095F5726D68571E2DE6",
          abi: [
            {
              type: "constructor",
              inputs: [
                {
                  name: "_orderToken",
                  type: "address",
                  internalType: "contract IOrderToken",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "DEFAULT_ADMIN_ROLE",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "MANAGER_ROLE",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "cancelOrder",
              inputs: [
                {
                  name: "_index",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "createOrder",
              inputs: [
                {
                  name: "_tokenId",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "_amount",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "_collateral",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "_seller",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "payable",
            },
            {
              type: "function",
              name: "fillOrder",
              inputs: [
                {
                  name: "_index",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "_buyer",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "getOrders",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "tuple[]",
                  internalType: "struct Order[]",
                  components: [
                    {
                      name: "tokenId",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "amount",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "collateral",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "status",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "seller",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "buyer",
                      type: "address",
                      internalType: "address",
                    },
                  ],
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getRoleAdmin",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "grantRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "hasRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "orderToken",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "contract IOrderToken",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "orders",
              inputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "tokenId",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "collateral",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "status",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "seller",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "buyer",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "redeemTokens",
              inputs: [
                {
                  name: "_orderId",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "renounceRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "callerConfirmation",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "revokeRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setOrderToken",
              inputs: [
                {
                  name: "_orderToken",
                  type: "address",
                  internalType: "contract IOrderToken",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setToken",
              inputs: [
                {
                  name: "_tokenId",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "_token",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "settleOrder",
              inputs: [
                {
                  name: "_index",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "supportsInterface",
              inputs: [
                {
                  name: "interfaceId",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "tokens",
              inputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "event",
              name: "OrderCancelled",
              inputs: [
                {
                  name: "index",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "OrderCreated",
              inputs: [
                {
                  name: "tokenId",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "amount",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
                {
                  name: "collateral",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
                {
                  name: "seller",
                  type: "address",
                  indexed: false,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "OrderFilled",
              inputs: [
                {
                  name: "index",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
                {
                  name: "buyer",
                  type: "address",
                  indexed: false,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "OrderSettled",
              inputs: [
                {
                  name: "index",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleAdminChanged",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "previousAdminRole",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "newAdminRole",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleGranted",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "sender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleRevoked",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "sender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "TokenRedeemed",
              inputs: [
                {
                  name: "tokenId",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "buyer",
                  type: "address",
                  indexed: false,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "error",
              name: "AccessControlBadConfirmation",
              inputs: [],
            },
            {
              type: "error",
              name: "AccessControlUnauthorizedAccount",
              inputs: [
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "neededRole",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
          ],
        },
      },
    },
  ],
  2710: [
    {
      name: "morphSepolia",
      chainId: "2710",
      contracts: {
        OrderToken: {
          address: "0x53fb47c8A5c09395B4804F30CF20C8a30db1C4e8",
          abi: [
            {
              type: "constructor",
              inputs: [
                {
                  name: "name_",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "symbol_",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "decimals_",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "initialOwner_",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "DEFAULT_ADMIN_ROLE",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "DOMAIN_SEPARATOR",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "ID_ENCODING_PREFIX",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "MINTER_ROLE",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "allowance",
              inputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "approve",
              inputs: [
                {
                  name: "spender_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "valueOrId_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "balanceOf",
              inputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "baseURI",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "decimals",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint8",
                  internalType: "uint8",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc20Approve",
              inputs: [
                {
                  name: "spender_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "erc20BalanceOf",
              inputs: [
                {
                  name: "owner_",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc20TotalSupply",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc20TransferFrom",
              inputs: [
                {
                  name: "from_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "erc721Approve",
              inputs: [
                {
                  name: "spender_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "erc721BalanceOf",
              inputs: [
                {
                  name: "owner_",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc721TotalSupply",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc721TransferExempt",
              inputs: [
                {
                  name: "target_",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc721TransferFrom",
              inputs: [
                {
                  name: "from_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "getApproved",
              inputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getERC721QueueLength",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getERC721TokensInQueue",
              inputs: [
                {
                  name: "start_",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "count_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256[]",
                  internalType: "uint256[]",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getRoleAdmin",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "grantRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "hasRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "isApprovedForAll",
              inputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "mint",
              inputs: [
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "tokens_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "minted",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "name",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "nonces",
              inputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "owned",
              inputs: [
                {
                  name: "owner_",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256[]",
                  internalType: "uint256[]",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "ownerOf",
              inputs: [
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "erc721Owner",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "permit",
              inputs: [
                {
                  name: "owner_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "spender_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value_",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "deadline_",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "v_",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "r_",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "s_",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "renounceRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "callerConfirmation",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "revokeRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "safeTransferFrom",
              inputs: [
                {
                  name: "from_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "safeTransferFrom",
              inputs: [
                {
                  name: "from_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "data_",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setApprovalForAll",
              inputs: [
                {
                  name: "operator_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "approved_",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setBaseURI",
              inputs: [
                {
                  name: "baseURI_",
                  type: "string",
                  internalType: "string",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setERC721TransferExempt",
              inputs: [
                {
                  name: "account_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value_",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setSelfERC721TransferExempt",
              inputs: [
                {
                  name: "state_",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "supportsInterface",
              inputs: [
                {
                  name: "interfaceId",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "symbol",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "tokenURI",
              inputs: [
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "totalSupply",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "transfer",
              inputs: [
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "transferFrom",
              inputs: [
                {
                  name: "from_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "valueOrId_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "units",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "event",
              name: "Approval",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "spender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "value",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "Approval",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "spender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "id",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "ApprovalForAll",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "operator",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "approved",
                  type: "bool",
                  indexed: false,
                  internalType: "bool",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleAdminChanged",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "previousAdminRole",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "newAdminRole",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleGranted",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "sender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleRevoked",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "sender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "Transfer",
              inputs: [
                {
                  name: "from",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "Transfer",
              inputs: [
                {
                  name: "from",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "id",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "error",
              name: "AccessControlBadConfirmation",
              inputs: [],
            },
            {
              type: "error",
              name: "AccessControlUnauthorizedAccount",
              inputs: [
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "neededRole",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              type: "error",
              name: "AlreadyExists",
              inputs: [],
            },
            {
              type: "error",
              name: "DecimalsTooLow",
              inputs: [],
            },
            {
              type: "error",
              name: "InsufficientAllowance",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidApproval",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidExemption",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidOperator",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidRecipient",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidSender",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidSigner",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidSpender",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidTokenId",
              inputs: [],
            },
            {
              type: "error",
              name: "MintLimitReached",
              inputs: [],
            },
            {
              type: "error",
              name: "NotFound",
              inputs: [],
            },
            {
              type: "error",
              name: "OwnedIndexOverflow",
              inputs: [],
            },
            {
              type: "error",
              name: "PermitDeadlineExpired",
              inputs: [],
            },
            {
              type: "error",
              name: "QueueEmpty",
              inputs: [],
            },
            {
              type: "error",
              name: "QueueFull",
              inputs: [],
            },
            {
              type: "error",
              name: "QueueOutOfBounds",
              inputs: [],
            },
            {
              type: "error",
              name: "RecipientIsERC721TransferExempt",
              inputs: [],
            },
            {
              type: "error",
              name: "Unauthorized",
              inputs: [],
            },
            {
              type: "error",
              name: "UnsafeRecipient",
              inputs: [],
            },
          ],
        },
        PreMarket: {
          address: "0x8A8A5e45368dbc6C263eC095F5726D68571E2DE6",
          abi: [
            {
              type: "constructor",
              inputs: [
                {
                  name: "_orderToken",
                  type: "address",
                  internalType: "contract IOrderToken",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "DEFAULT_ADMIN_ROLE",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "MANAGER_ROLE",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "cancelOrder",
              inputs: [
                {
                  name: "_index",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "createOrder",
              inputs: [
                {
                  name: "_tokenId",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "_amount",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "_collateral",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "_seller",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "payable",
            },
            {
              type: "function",
              name: "fillOrder",
              inputs: [
                {
                  name: "_index",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "_buyer",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "getOrders",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "tuple[]",
                  internalType: "struct Order[]",
                  components: [
                    {
                      name: "tokenId",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "amount",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "collateral",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "status",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "seller",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "buyer",
                      type: "address",
                      internalType: "address",
                    },
                  ],
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getRoleAdmin",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "grantRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "hasRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "orderToken",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "contract IOrderToken",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "orders",
              inputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "tokenId",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "collateral",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "status",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "seller",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "buyer",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "redeemTokens",
              inputs: [
                {
                  name: "_orderId",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "renounceRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "callerConfirmation",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "revokeRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setOrderToken",
              inputs: [
                {
                  name: "_orderToken",
                  type: "address",
                  internalType: "contract IOrderToken",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setToken",
              inputs: [
                {
                  name: "_tokenId",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "_token",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "settleOrder",
              inputs: [
                {
                  name: "_index",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "supportsInterface",
              inputs: [
                {
                  name: "interfaceId",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "tokens",
              inputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "event",
              name: "OrderCancelled",
              inputs: [
                {
                  name: "index",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "OrderCreated",
              inputs: [
                {
                  name: "tokenId",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "amount",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
                {
                  name: "collateral",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
                {
                  name: "seller",
                  type: "address",
                  indexed: false,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "OrderFilled",
              inputs: [
                {
                  name: "index",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
                {
                  name: "buyer",
                  type: "address",
                  indexed: false,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "OrderSettled",
              inputs: [
                {
                  name: "index",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleAdminChanged",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "previousAdminRole",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "newAdminRole",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleGranted",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "sender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleRevoked",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "sender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "TokenRedeemed",
              inputs: [
                {
                  name: "tokenId",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "buyer",
                  type: "address",
                  indexed: false,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "error",
              name: "AccessControlBadConfirmation",
              inputs: [],
            },
            {
              type: "error",
              name: "AccessControlUnauthorizedAccount",
              inputs: [
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "neededRole",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
          ],
        },
      },
    },
  ],
  421614: [
    {
      name: "arbitrumSepolia",
      chainId: "421614",
      contracts: {
        OrderToken: {
          address: "0x53fb47c8A5c09395B4804F30CF20C8a30db1C4e8",
          abi: [
            {
              type: "constructor",
              inputs: [
                {
                  name: "name_",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "symbol_",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "decimals_",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "initialOwner_",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "DEFAULT_ADMIN_ROLE",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "DOMAIN_SEPARATOR",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "ID_ENCODING_PREFIX",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "MINTER_ROLE",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "allowance",
              inputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "approve",
              inputs: [
                {
                  name: "spender_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "valueOrId_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "balanceOf",
              inputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "baseURI",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "decimals",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint8",
                  internalType: "uint8",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc20Approve",
              inputs: [
                {
                  name: "spender_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "erc20BalanceOf",
              inputs: [
                {
                  name: "owner_",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc20TotalSupply",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc20TransferFrom",
              inputs: [
                {
                  name: "from_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "erc721Approve",
              inputs: [
                {
                  name: "spender_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "erc721BalanceOf",
              inputs: [
                {
                  name: "owner_",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc721TotalSupply",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc721TransferExempt",
              inputs: [
                {
                  name: "target_",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "erc721TransferFrom",
              inputs: [
                {
                  name: "from_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "getApproved",
              inputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getERC721QueueLength",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getERC721TokensInQueue",
              inputs: [
                {
                  name: "start_",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "count_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256[]",
                  internalType: "uint256[]",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getRoleAdmin",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "grantRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "hasRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "isApprovedForAll",
              inputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "mint",
              inputs: [
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "tokens_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "minted",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "name",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "nonces",
              inputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "owned",
              inputs: [
                {
                  name: "owner_",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256[]",
                  internalType: "uint256[]",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "ownerOf",
              inputs: [
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "erc721Owner",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "permit",
              inputs: [
                {
                  name: "owner_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "spender_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value_",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "deadline_",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "v_",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "r_",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "s_",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "renounceRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "callerConfirmation",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "revokeRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "safeTransferFrom",
              inputs: [
                {
                  name: "from_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "safeTransferFrom",
              inputs: [
                {
                  name: "from_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "data_",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setApprovalForAll",
              inputs: [
                {
                  name: "operator_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "approved_",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setBaseURI",
              inputs: [
                {
                  name: "baseURI_",
                  type: "string",
                  internalType: "string",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setERC721TransferExempt",
              inputs: [
                {
                  name: "account_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value_",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setSelfERC721TransferExempt",
              inputs: [
                {
                  name: "state_",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "supportsInterface",
              inputs: [
                {
                  name: "interfaceId",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "symbol",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "tokenURI",
              inputs: [
                {
                  name: "id_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "totalSupply",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "transfer",
              inputs: [
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "transferFrom",
              inputs: [
                {
                  name: "from_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to_",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "valueOrId_",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "units",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "event",
              name: "Approval",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "spender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "value",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "Approval",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "spender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "id",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "ApprovalForAll",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "operator",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "approved",
                  type: "bool",
                  indexed: false,
                  internalType: "bool",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleAdminChanged",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "previousAdminRole",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "newAdminRole",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleGranted",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "sender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleRevoked",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "sender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "Transfer",
              inputs: [
                {
                  name: "from",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "Transfer",
              inputs: [
                {
                  name: "from",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "id",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "error",
              name: "AccessControlBadConfirmation",
              inputs: [],
            },
            {
              type: "error",
              name: "AccessControlUnauthorizedAccount",
              inputs: [
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "neededRole",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              type: "error",
              name: "AlreadyExists",
              inputs: [],
            },
            {
              type: "error",
              name: "DecimalsTooLow",
              inputs: [],
            },
            {
              type: "error",
              name: "InsufficientAllowance",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidApproval",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidExemption",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidOperator",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidRecipient",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidSender",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidSigner",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidSpender",
              inputs: [],
            },
            {
              type: "error",
              name: "InvalidTokenId",
              inputs: [],
            },
            {
              type: "error",
              name: "MintLimitReached",
              inputs: [],
            },
            {
              type: "error",
              name: "NotFound",
              inputs: [],
            },
            {
              type: "error",
              name: "OwnedIndexOverflow",
              inputs: [],
            },
            {
              type: "error",
              name: "PermitDeadlineExpired",
              inputs: [],
            },
            {
              type: "error",
              name: "QueueEmpty",
              inputs: [],
            },
            {
              type: "error",
              name: "QueueFull",
              inputs: [],
            },
            {
              type: "error",
              name: "QueueOutOfBounds",
              inputs: [],
            },
            {
              type: "error",
              name: "RecipientIsERC721TransferExempt",
              inputs: [],
            },
            {
              type: "error",
              name: "Unauthorized",
              inputs: [],
            },
            {
              type: "error",
              name: "UnsafeRecipient",
              inputs: [],
            },
          ],
        },
        PreMarket: {
          address: "0x8A8A5e45368dbc6C263eC095F5726D68571E2DE6",
          abi: [
            {
              type: "constructor",
              inputs: [
                {
                  name: "_orderToken",
                  type: "address",
                  internalType: "contract IOrderToken",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "DEFAULT_ADMIN_ROLE",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "MANAGER_ROLE",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "cancelOrder",
              inputs: [
                {
                  name: "_index",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "createOrder",
              inputs: [
                {
                  name: "_tokenId",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "_amount",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "_collateral",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "_seller",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "payable",
            },
            {
              type: "function",
              name: "fillOrder",
              inputs: [
                {
                  name: "_index",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "_buyer",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "getOrders",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "tuple[]",
                  internalType: "struct Order[]",
                  components: [
                    {
                      name: "tokenId",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "amount",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "collateral",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "status",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "seller",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "buyer",
                      type: "address",
                      internalType: "address",
                    },
                  ],
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getRoleAdmin",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "grantRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "hasRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "orderToken",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "contract IOrderToken",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "orders",
              inputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "tokenId",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "collateral",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "status",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "seller",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "buyer",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "redeemTokens",
              inputs: [
                {
                  name: "_orderId",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "renounceRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "callerConfirmation",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "revokeRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setOrderToken",
              inputs: [
                {
                  name: "_orderToken",
                  type: "address",
                  internalType: "contract IOrderToken",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setToken",
              inputs: [
                {
                  name: "_tokenId",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "_token",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "settleOrder",
              inputs: [
                {
                  name: "_index",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "supportsInterface",
              inputs: [
                {
                  name: "interfaceId",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "tokens",
              inputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "event",
              name: "OrderCancelled",
              inputs: [
                {
                  name: "index",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "OrderCreated",
              inputs: [
                {
                  name: "tokenId",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "amount",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
                {
                  name: "collateral",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
                {
                  name: "seller",
                  type: "address",
                  indexed: false,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "OrderFilled",
              inputs: [
                {
                  name: "index",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
                {
                  name: "buyer",
                  type: "address",
                  indexed: false,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "OrderSettled",
              inputs: [
                {
                  name: "index",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleAdminChanged",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "previousAdminRole",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "newAdminRole",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleGranted",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "sender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleRevoked",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "sender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "TokenRedeemed",
              inputs: [
                {
                  name: "tokenId",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "buyer",
                  type: "address",
                  indexed: false,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "error",
              name: "AccessControlBadConfirmation",
              inputs: [],
            },
            {
              type: "error",
              name: "AccessControlUnauthorizedAccount",
              inputs: [
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "neededRole",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
