import { useEffect, useState } from "react";
import { useWallet } from "../services/providers/MintbaseWalletContext"
import Welcome from '../components/profile/Welcome';
import { MbButton } from 'mintbase-ui';
import Modal  from '../components/Modal/index'
import CouponCard from "../components/CouponCard/profileCard";
import AddCoupon from "../components/CouponCard/addCoupon";
import swal from "sweetalert2";

import axios from 'axios';
import { MetadataField } from "mintbase";
import { useRouter } from "next/router";


const Dashboard = () => {
    const { wallet, isConnected, details } = useWallet();
    const [stores, setStores] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [myCoupons, setMyCoupons] = useState([]);
    const [section, setSection] = useState('');

    const [data, setData] = useState({});

    const router =  useRouter();



    function updateData(event) {
        const { name, value } = event.target;
        const newData = {...data}

        if (name === 'file') {
            newData[name] = event.target.files[0];
            setData(newData)
            return;
        }
        newData[name] = value;
        setData(newData)
    }



    async function mintKoopone() {
        
        if(!isConnected) return;
        if(!wallet) return;

        if(!data['file']) return alert("Please select an image to upload");
    
        const { data: didUpload, error } = await wallet?.minter?.uploadField(MetadataField.Media, data['file'])
    
        if (!didUpload || error) {
            console.log(error);
        }
    
        wallet?.minter?.setMetadata({
            title: data['title'],
            description: data['description'],
            coupon_id: data['_id']
        })

        localStorage.setItem('data', JSON.stringify(data));
    
        await wallet.mint(1, 'koopon.mintspace2.testnet', undefined, undefined, 'coupons');
        // try {
        //     // console.log(wallet?.minter?.currentMint);
        // } catch (error) {
        //     console.log(error);
        // }
        
    }
    
    
    async function sendToMint() {
        

        
        
        
        // const getData = JSON.parse(localStorage.getItem('data'))
        // setData(getData)
        const store = await wallet?.api?.fetchStoreById('koopon.mintspace2.testnet');
        // console.log(store?.data.store[0].things[store?.data.store[0].things.length - 1])


        // console.log(store?.data.store[0])
        
        
        const thing = store?.data.store[0].things[store?.data.store[0].things.length - 1];
        
        // console.log(thing) 
        
        
        
        
        const account = await wallet?.api?.fetchAccount('mbiplang.testnet');
        console.log("Account: ", account)
        const filteredTokens = account?.data?.token?.filter((item: any) => item.id.includes('koopon')).map((item: any) => item.id.split(':')[0]).sort((a:any, b:any) => a - b)
        const rightToken = account?.data?.token?.filter((item: any) => item.id.includes(filteredTokens[filteredTokens.length - 1]))
        const metaData = await wallet?.api?.fetchThingMetadata(rightToken[0]?.thing?.id)
        const tokenData = await wallet?.api?.fetchTokenById(rightToken[0]?.id)
        // console.log("Account: ", account)
        
        // console.log("Meta Data: ", metaData)
        // console.log("Token Data: ", tokenData)
        // console.log("Lastest token: ", rightToken) 
        const update = {...metaData?.data, ...tokenData?.data}
        // console.log("Data: ", data)
        
        if (!data._id) return;
        
        
        console.log("loading...", data)
        try {
            const res = await axios.put(`https://still-garden-99623.herokuapp.com/koopon/${data?._id}`, {data: update, is_minted: true}, {
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            
            localStorage.removeItem('data')
            setData({})
            setShowModal(false)
            setSection('');
            

            // console.log(res)

        } catch (error) {
            console.log(error)
        }
     
    }




    async function getMyCoupons() {

        const newData = {...data}
        newData.account_id = wallet?.activeAccount?.accountId ;

        try {
            const res = await axios.get(`https://still-garden-99623.herokuapp.com/koopon/${wallet?.activeAccount?.accountId}`, {
                headers: {
                    "Content-Type": 'application/json'
                }
            });

            

            setMyCoupons(res.data?.data)

        } catch (error) {
            console.log(error)
        }
        // console.log(newData)
    }


    async function onSubmit(e) {

        const newData = {...data}
        newData.account_id = wallet?.activeAccount?.accountId ;

        try {
            const res = await axios.post('https://still-garden-99623.herokuapp.com/koopon', newData, {
                headers: {
                    "Content-Type": 'application/json'
                }
            });

            // console.log(res.data)
            // swal('Succssful', res.data.message, 'success');
            getMyCoupons()
            setShowModal(false);

            // const things = await wallet?.api?.fetchThingById('QGq2etYnse1ZU1WGnbwmfQOXsl0R5GTT8YoHu5L9uCQ:koopon.mintspace2.testnet');
            // const things = await wallet?.api?.fetchThingById('QQa43cUOOEL-2ciOclOPMVePNB9WO6zJ6lFpgM5m2XU:koopon.mintspace2.testnet');
            const things = await wallet?.api?.fetchStoreById('koopon.mintspace2.testnet');
            console.log(things)
            
        } catch (error) {
            // swal('Oops!', error?.res.data.message, 'success');
            console.log(error)
        }
        // console.log(newData)
    }



    async function createStore() {

        try {
            
            const res = await wallet?.deployStore("shop101", "sh101"); 
    
            console.log(res);
            fetchStore()
            
        } catch (error) {
            console.log(error.message)
        }
    }

    async function fetchStore() {
        const res = await wallet?.api?.fetchAccount("koopon.testnet");
        const store = await wallet?.api?.fetchStoreById("koopon.mintspace2.testnet");
        const user = store?.data?.store[0]?.minters?.filter((item: any) => item.account.includes(details.accountId))

        // wallet?.grantMinter(details.accountId, "koopon.mintspace2.testnet");
        // if (!user?.length) {
        // }
        setStores(res?.data?.store);
    }

    useEffect(() => {
        fetchStore();
        if (!wallet?.activeAccount?.accountId) return;
        getMyCoupons();
    }, [wallet?.activeAccount?.accountId])



    useEffect(() => {
        // console.log(data)
        if (data?._id) return;
        const getData = JSON.parse(localStorage.getItem('data'))
        if (!getData) {
            setData({});
            setSection('');
            setShowModal(false);
            return;
        }
        setData(getData);
        setSection('confirm');
        setShowModal(true);
        
    }, [wallet?.activeAccount?.accountId, data?._id])



    console.log(data)
    return (
        <>
        
            <Welcome />
            <div className="p-4 flex flex-wrap" style={{}}>
                {
                    myCoupons?.map(item => (
                        <CouponCard 
                            key={item._id} 
                            {...item}
                            setSection={setSection}
                            setShowModal={setShowModal}
                            setData={setData}
                        />
                    ))
                }
                
                <AddCoupon setShowModal={setShowModal} setSection={setSection} />

                {
                    (showModal && (section === 'create_coupon' || section === 'edit_coupon')) &&
                        <div style={{position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, background: 'rgba(0, 0, 0, 0.9)', padding: '5rem 5rem'}}>

                            <div className="px-5 py-4 bg-white" >
                                    
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="name">Coupon Name <span className="text-rose-500">*</span></label>
                                        <input defaultValue={data?.store_name} onChange={updateData} id="name" name="store_name" className="form-input w-full px-2 py-1 border" type="text" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="feedback">Description<span className="text-rose-500">*</span></label>
                                        <textarea defaultValue={data?.description} name="description" onChange={updateData} id="feedback" className="form-textarea w-full px-2 py-1 border"  required></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="Tokens">Amount Of Token<span className="text-rose-500">*</span></label>
                                        <input defaultValue={data?.quantity} name="quantity" onChange={updateData} id="token" className="form-input w-full px-2 py-1 border" type="Number" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="price">Price<span className="text-rose-500">*</span></label>
                                        <input defaultValue={data?.price} name="price" onChange={updateData} id="name" className="form-input w-full px-2 py-1 border" type="Number" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="discount">Discount(%) <span className="text-rose-500">*</span></label>
                                        <input defaultValue={data?.discount} name="discount" onChange={updateData} id="name" className="form-input w-full px-2 py-1 border" type="Number" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="start date"> Start Date <span className="text-rose-500">*</span></label>
                                        <input defaultValue={data?.start_date} name="start_date" onChange={updateData} id="name" className="form-input w-full px-2 py-1 border" type="date" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="end date"> End Date <span className="text-rose-500">*</span></label>
                                        <input defaultValue={data?.expiry_date} name="expiry_date" onChange={updateData} id="name" className="form-input w-full px-2 py-1 border" type="date" required />
                                    </div>
                                   
                                    <div className="flex flex-wrap justify-end space-x-2">
                                        
                                        <button style={{ background: 'red', color: 'white'}} onClick={() => {setShowModal(false); setData({})}} className='p-1.5 shrink-0 rounded bg-red text-color-white mx-2 border border-slate-200 hover:border-slate-300 shadow-sm'>Close</button>
                                        <button onClick={onSubmit} className='p-1.5 shrink-0 rounded text-color-grey mx-2 border border-slate-200 hover:border-slate-300 shadow-sm'>Create</button>
                                    </div>
                                    </div>
                                </div>
                            
                            </div>
                }
                {
                    (showModal && section === 'mint_coupon') &&
                        <div style={{position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, background: 'rgba(0, 0, 0, 0.9)', padding: '5rem 5rem'}}>

                            <div className="px-5 py-4 bg-white" >
                                    
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="title">Title <span className="text-rose-500">*</span></label>
                                        <input defaultValue={data?.store_name} onChange={updateData} id="title" name="title" className="form-input w-full px-2 py-1 border" type="text" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="feedback">Description<span className="text-rose-500">*</span></label>
                                        <textarea defaultValue={data?.description}  name="description" onChange={updateData} id="feedback" className="form-textarea w-full px-2 py-1 border"  required></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="file">File<span className="text-rose-500">*</span></label>
                                        <input name="file" onChange={updateData} id="file" className="form-input w-full px-2 py-1 border" type="file" required />
                                    </div>
                                   
                                    <div className="flex flex-wrap justify-end space-x-2">
                                        
                                        <button style={{ background: 'red', color: 'white'}} onClick={() => {setShowModal(false); setData({})}} className='p-1.5 shrink-0 rounded bg-red text-color-white mx-2 border border-slate-200 hover:border-slate-300 shadow-sm'>Close</button>
                                        <button onClick={mintKoopone} className='p-1.5 shrink-0 rounded text-color-grey mx-2 border border-slate-200 hover:border-slate-300 shadow-sm'>Mint coupon</button>
                                    </div>
                                    </div>
                                </div>
                            
                            </div>
                }
                {
                    (showModal && section === 'confirm') &&
                        <div className="flex justify-center" style={{position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, background: 'rgba(0, 0, 0, 0.9)', padding: '5rem 5rem'}}>

                            <div className="px-5 py-4 bg-white" style={{ width: '50%'}}>
                                    
                                <div className="space-y-3" style={{ paddingTop: '9rem'}}>
                                    
                                   <h1 className="text-center">{data?.title} minted successfully!</h1>
                                   
                                    <div className="space-x-2 text-center">
                                        
                                        <button style={{ background: 'green', color: 'white'}} onClick={() => {sendToMint()}} className='p-1.5 shrink-0 rounded bg-red text-color-white mx-2 border border-slate-200 hover:border-slate-300 shadow-sm'>Finish</button>
                                        
                                    </div>
                                    </div>
                                </div>
                            
                            </div>
                }
                </div>
        </>
    )
}



export default Dashboard