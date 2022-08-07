import Head from 'next/head'
import Hero from '../components/Hero'
import Container from '../components/Layout/Container'
import Card from '../components/Card'
import Link from 'next/link'
import CouponCard from '../components/CouponCard'
import Navigation from '../components/Navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'



// const data = [
//     {
//         store_name: "Store 35",
//         is_used: false,
//         quantity: 10,
//         discount: "50%",
//         start_date: `2022-07-21`,
//         expiry_date: '2022-10-10',
//         issued_token: 2,
//         price: 2
//     },
//     {
//         store_name: "Store 36",
//         is_used: false,
//         quantity: 7,
//         discount: "20%",
//         start_date: `2022-07-21`,
//         expiry_date: '2022-08-10',
//         issued_token: 0,
//         price: 4
//     },
//     {
//         store_name: "Store 37",
//         is_used: false,
//         quantity: 5,
//         discount: "25%",
//         start_date: `2022-07-21`,
//         expiry_date: '2022-11-10',
//         issued_token: 1,
//         price: 1.4
//     },
// ]


const MarketPlace = () => {
    const [data, setData] = useState([])


    async function getAllCoupons() {
        try {
            const res = await axios.get(`https://still-garden-99623.herokuapp.com/koopon`, {
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            
           
            // console.log(res?.data?.data)
            setData(res?.data?.data)


        } catch (error) {
            console.log(error)
        }
    }


    function filterCoupons(arr: []) {
        const newArr = [...arr]
        const filtered = newArr.filter((item: any) => item?.is_minted)
        return filtered;
    }


    useEffect(() => {
        getAllCoupons()
    }, [])


    console.log(data)

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


            <div className='p-4 flex flex-wrap'>
                {
                    filterCoupons(data)?.map((item: any) =>  <CouponCard key={item?._id} {...item}/>)
                }
               
            </div>
        </>
    )
}


export default MarketPlace;