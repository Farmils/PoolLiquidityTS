const abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenA',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_tokenB',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_countTokenA',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_countTokenB',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_lpToken',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'getPool',
    outputs: [
      {
        internalType: 'address',
        name: 'poolOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'poolAddres',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'aSymbol',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'bSymbol',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'countTokenA',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'countTokenB',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenAWithPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenBWithPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'allTokens',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'countToken',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'A',
        type: 'bool',
      },
    ],
    name: 'supportLiquidity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'countToken',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'A',
        type: 'bool',
      },
    ],
    name: 'swapToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
export { abi }
