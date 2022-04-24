import React, { useContext } from 'react'
import { Nav, ConnectorId } from 'uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetPriceData from 'hooks/useGetPriceData'
import { injected, walletconnect } from 'connectors'
import links from './links'
import { MenuEntry } from '@pancakeswap-libs/uikit'

const Menu = () => {
  const { account, activate, deactivate } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const btcPriceUsd = useGetPriceData()

  return (
    <Nav
      links={links}
      account={account as string}
      login={(connectorId: ConnectorId) => {
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }
        return activate(injected)
      }}
      logout={deactivate}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      btcPriceUsd={btcPriceUsd}
    />
  )
}


export default Menu
const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0xc7553307eD737dcE132aE7915E6496864617B261',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickSwap',
        href: 'https://info.quickswap.exchange/token/0xc7553307eD737dcE132aE7915E6496864617B261',
      },
      {
        label: 'Vfat Tools',
        href: 'https://vfat.tools/polygon/polyowl/',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/polygon/defi/polyowl-finance',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/PolyOwlFinance',
      },
      {
        label: 'Docs',
        href: 'https://polyowlfinance.gitbook.io/polyowl/',
      },
    ],
  },
]

export default config

