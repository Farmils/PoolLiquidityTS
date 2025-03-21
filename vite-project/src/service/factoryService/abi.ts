const abi =
    [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_gerda",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_krendel",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rtk",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_tom",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_ben",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_lpToken",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_tokenA",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_tokenB",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_countTokenA",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_countTokenB",
                    "type": "uint256"
                }
            ],
            "name": "createPool",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBalances",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "gerdaBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "krendelBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rtkBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lpBalance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPools",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "poolOwner",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "poolAddres",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "aSymbol",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "bSymbol",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "countTokenA",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "countTokenB",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenAWithPrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenBWithPrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "allTokens",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Factory.PoolInfo[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ] as const
export {abi}