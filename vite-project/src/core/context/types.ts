import { MatchPrimitiveType } from 'web3'
export type ContextType = {
  wallet: string
  setWallet: (wallet: string) => void
  pool: PoolData[]
  setPool: (pool: PoolData[]) => void
  userData: UserBalance | null
  setUserData: (userData: UserBalance) => void
}
export type PoolData = {
  aSymbol: string
  allTokens: MatchPrimitiveType<'uint256', unknown>
  bSymbol: string
  countTokenA: MatchPrimitiveType<'uint256', unknown>
  countTokenB: MatchPrimitiveType<'uint256', unknown>
  poolAddres: string
  poolOwner: string
  tokenAWithPrice: MatchPrimitiveType<'uint256', unknown>
  tokenBWithPrice: MatchPrimitiveType<'uint256', unknown>
}
export type UserBalance = {
  gerdaBalance: MatchPrimitiveType<'uint256', unknown>
  krendelBalance: MatchPrimitiveType<'uint256', unknown>
  lpBalance: MatchPrimitiveType<'uint256', unknown>
  rtkBalance: MatchPrimitiveType<'uint256', unknown>
}
