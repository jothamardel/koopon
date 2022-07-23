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


const Dashboard = () => {
    const { wallet, isConnected,  } = useWallet();
    const [stores, setStores] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [myCoupons, setMyCoupons] = useState([]);
    const [section, setSection] = useState('');

    const [data, setData] = useState({});



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


    async function sendToMint() {

        if(!isConnected) return;
        if(!wallet) return;

        const { data: didUpload, error } = await wallet?.minter?.uploadField(MetadataField.Media, data['file'])

        if (!didUpload || error) {
            console.log(error);
        }

        wallet?.minter?.setMetadata({
            title: data['title'],
            description: data['description'],
            coupon_id: data['_id']
        })

        try {
            const response = await wallet.mint(1, 'koopon.mintspace2.testnet', undefined, undefined, 'coupons');
            console.log("Response: ", response);
            // console.log(wallet?.minter?.currentMint);
        } catch (error) {
            console.log(error);
        }
    }




    async function getMyCoupons(e) {

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
        const store = await wallet?.api?.fetchStoreById("koopon.mintspace2.testnet'");
        // console.log("Store details: ", store)
        // console.log(res);
        setStores(res?.data?.store)

    }

    useEffect(() => {
        fetchStore();
        if (!wallet?.activeAccount?.accountId) return;
        getMyCoupons();
    }, [wallet?.activeAccount?.accountId])



    // console.log(data)
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
                                        <button onClick={sendToMint} className='p-1.5 shrink-0 rounded text-color-grey mx-2 border border-slate-200 hover:border-slate-300 shadow-sm'>Mint coupon</button>
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