import Head from 'next/head'
import Hero from '../components/Hero'
import Container from '../components/Layout/Container'
import Card from '../components/Card'
import Link from 'next/link'


const MarketPlace = () => {
    return (
        <>
            <Head>
                <title>Koopon</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero 
                title='Koopon'
                description='Create, Transfer, Trade & Redeem Coupons'
            />
        </>
    )
}


export default MarketPlace;