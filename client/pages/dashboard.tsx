import { useEffect, useState } from "react";
import { useWallet } from "../services/providers/MintbaseWalletContext"
import Welcome from '../components/profile/Welcome';
import { MbButton } from 'mintbase-ui';
import Modal  from '../components/Modal/index'
import CouponCard from "../components/CouponCard/profileCard";
import AddCoupon from "../components/CouponCard/addCoupon";
import swal from "sweetalert2";

import axios from 'axios';


const Dashboard = () => {
    const { wallet } = useWallet();
    const [stores, setStores] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [myCoupons, setMyCoupons] = useState([]);
    const [section, setSection] = useState('');

    const [data, setData] = useState({});



    function updateData(event) {
        const { name, value } = event.target;

        const newData = {...data}
        newData[name] = value;

        setData(newData)
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

            console.log(res.data)
            // swal('Succssful', res.data.message, 'success');
            getMyCoupons()
            setShowModal(false);
            
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
        const store = await wallet?.api?.fetchStoreById("koopon.maintest2.testnet");
        console.log("Store details: ", store)
        console.log(res);
        setStores(res?.data?.store)

    }

    useEffect(() => {
        fetchStore();
        if (!wallet?.activeAccount?.accountId) return;
        getMyCoupons();
    }, [wallet?.activeAccount?.accountId])



    console.log(data)
    return (
        <>
            {/* <ul>
                {
                    stores?.map(item => <li key={item.id}>{item?.id}</li>)
                }
            </ul>
             <button onClick={createStore}>Create store</button> */}
            {/* <Modal /> */}
            <Welcome />
            <div className="p-4 flex" style={{}}>
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
                
                <AddCoupon setShowModal={setShowModal}/>

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
                                        <label className="block text-sm font-medium mb-1" htmlFor="Tokens">File<span className="text-rose-500">*</span></label>
                                        <input name="quantity" onChange={updateData} id="token" className="form-input w-full px-2 py-1 border" type="file" required />
                                    </div>
                                   
                                    <div className="flex flex-wrap justify-end space-x-2">
                                        
                                        <button style={{ background: 'red', color: 'white'}} onClick={() => {setShowModal(false); setData({})}} className='p-1.5 shrink-0 rounded bg-red text-color-white mx-2 border border-slate-200 hover:border-slate-300 shadow-sm'>Close</button>
                                        <button onClick={onSubmit} className='p-1.5 shrink-0 rounded text-color-grey mx-2 border border-slate-200 hover:border-slate-300 shadow-sm'>Mint coupon</button>
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