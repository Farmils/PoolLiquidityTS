import Web3 from 'web3'
import { abi } from './abi.ts'
class FactoryService {
  contractAddress: string = '0x67A334A895ff874530933Bc136176e13821Aba7F'
  web3: Web3 = new Web3(window.ethereum)
  contract = new this.web3.eth.Contract(abi, this.contractAddress)
  async createPool(tokenA: string, tokenB: string, countA: number, countB: number, sender: string) {
    try {
      return await this.contract.methods.createPool(tokenA, tokenB, countA, countB).send({ from: sender })
    } catch (e) {
      console.error(e)
    }
  }
  async getBalances(sender: string) {
    try {
      return await this.contract.methods.getBalances().call({ from: sender })
    } catch (e) {
      console.error(e)
    }
  }

  async getPools() {
    try {
      return await this.contract.methods.getPools().call()
    } catch (e) {
      console.error(e)
    }
  }
}
export default new FactoryService()
