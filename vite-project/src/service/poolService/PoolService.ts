import Web3 from 'web3'
import { abi } from './abi.ts'

class PoolService {
  contractAddress: string
  web3: Web3 = new Web3(window.ethereum)
  contract

  constructor(contractAddress: string) {
    this.contractAddress = contractAddress
    this.contract = new this.web3.eth.Contract(abi, contractAddress)
  }
  async swapToken(countToken: number, A: boolean, sender: string) {
    try {
      return await this.contract.methods.swapToken(countToken, A).send({ from: sender })
    } catch (e) {
      console.error(e)
    }
  }
  async supportLiquidity(countToken: number, A: boolean, sender: string) {
    try {
      return await this.contract.methods.supportLiquidity(countToken, A).send({ from: sender })
    } catch (e) {
      console.error(e)
    }
  }
}
export default PoolService
