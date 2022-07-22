import { useEffect, useState } from "react";
import { useWallet } from "../services/providers/MintbaseWalletContext"
import Welcome from '../components/profile/Welcome';
import { MbButton } from 'mintbase-ui';
import Modal  from '../components/Modal/index'
import CouponCard from "../components/CouponCard/profileCard";
import AddCoupon from "../components/CouponCard/addCoupon";


const Dashboard = () => {
    const { wallet } = useWallet();
    const [stores, setStores] = useState([])
    const [showModal, setShowModal] = useState(false);

    const [data, setData] = useState({});



    function updateData(event) {
        const { name, value } = event.target;

        const newData = {...data}
        newData[name] = value;

        setData(newData)
    }

    function onSubmit() {
        const newData = {...data}
        newData.account_id = wallet?.activeAccount?.accountId ;
        console.log(newData)
    }



    async function createStore() {

        try {
            
            const res = await wallet?.deployStore("shop101", "sh101"); 
    
            console.log(res);
            fetchStore()
            
        } catch (error) {
            console.log(error)
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
        fetchStore()
    }, [])


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
                <CouponCard {
                    ...{
                        store_name: "Store 37",
                        is_used: false,
                        quantity: 5,
                        discount: "25%",
                        start_date: `2022-07-21`,
                        expiry_date: '2022-11-10',
                        issued_token: 1,
                        price: 1.4
                    }
                }/>
                
                <AddCoupon setShowModal={setShowModal}/>

                {
                    showModal &&
                        <div style={{position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, background: 'rgba(0, 0, 0, 0.9)', padding: '5rem 5rem'}}>

                            <div className="px-5 py-4 bg-white" >
                                    
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="name">Coupon Name <span className="text-rose-500">*</span></label>
                                        <input onChange={updateData} id="name" name="store_name" className="form-input w-full px-2 py-1 border" type="text" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="feedback">Description<span className="text-rose-500">*</span></label>
                                        <textarea name="description" id="feedback" className="form-textarea w-full px-2 py-1 border"  required></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="Tokens">Amount Of Token<span className="text-rose-500">*</span></label>
                                        <input name="quantity" onChange={updateData} id="token" className="form-input w-full px-2 py-1 border" type="Number" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="price">Price<span className="text-rose-500">*</span></label>
                                        <input name="price" onChange={updateData} id="name" className="form-input w-full px-2 py-1 border" type="Number" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="discount">Discount(%) <span className="text-rose-500">*</span></label>
                                        <input name="discount" onChange={updateData} id="name" className="form-input w-full px-2 py-1 border" type="Number" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="start date"> Start Date <span className="text-rose-500">*</span></label>
                                        <input name="start_date" onChange={updateData} id="name" className="form-input w-full px-2 py-1 border" type="date" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="end date"> End Date <span className="text-rose-500">*</span></label>
                                        <input name="end_date" onChange={updateData} id="name" className="form-input w-full px-2 py-1 border" type="date" required />
                                    </div>
                                   
                                    <div className="flex flex-wrap justify-end space-x-2">
                                        
                                        <button onClick={onSubmit} className='p-1.5 shrink-0 rounded text-color-grey mx-2 border border-slate-200 hover:border-slate-300 shadow-sm'>Create</button>
                                        <button onClick={() => setShowModal(false)} className='p-1.5 shrink-0 rounded bg-red text-color-white mx-2 border border-slate-200 hover:border-slate-300 shadow-sm'>Close</button>
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