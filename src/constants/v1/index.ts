import { Interface } from '@ethersproject/abi'
import { ChainId } from 'sdkv2'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xC07d4604400139108BbdB3076636365A385879eF', //TODO
  [ChainId.BSCTESTNET]: '0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607'
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
