import { useEffect, useState } from "react";
import { useWallet } from "../services/providers/MintbaseWalletContext"


const Dashboard = () => {
    const { wallet } = useWallet();
    const [stores, setStores] = useState([])



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
        const res = await wallet?.api?.fetchAccount("mbiplang.testnet");
        const store = await wallet?.api?.fetchStoreById("bee.maintest2.testnet");
        console.log("Store details: ", store)
        console.log(res);
        setStores(res?.data?.store)

    }

    useEffect(() => {
        fetchStore()
    }, [])


    return (
        <>
            <ul>
                {
                    stores?.map(item => <li key={item.id}>{item?.id}</li>)
                }
            </ul>
             <button onClick={createStore}>Create store</button>
        </>
    )
}



export default Dashboard