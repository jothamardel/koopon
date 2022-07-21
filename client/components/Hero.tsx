import Navbar from '../components/Navbar'

import { useWallet } from '../services/providers/MintbaseWalletContext'
import { MbButton, MbAction, EState, MbText } from 'mintbase-ui'

import Link from 'next/link'
import Image from 'next/image'
import WalletConnectButton from './WalletConnectButton'

const Hero = ({ title = "Build on your own Smart Contract", description = "Cheap & scalable infrastructure for your NFT project"}) => {
  const { wallet, isConnected, details } = useWallet()
  return (
    <>
      <div className="w-full py-24 px-6 bg-cover bg-no-repeat bg-center relative z-10 dark:bg-mb-background">
        <div className="container flex flex-col gap-8 max-w-4xl mx-auto text-center justify-center">
          <MbText className="heading-130 text-white">
            {title}
          </MbText>
          <MbText className="text-white">
            {description}
          </MbText>

          <div className="items-center justify-center">
            <WalletConnectButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
