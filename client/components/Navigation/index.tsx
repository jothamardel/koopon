import { useWallet } from '../../services/providers/MintbaseWalletContext'
import { useRouter } from 'next/router';
import { useState } from 'react';


const Navigation = ({}) => {
    const router = useRouter()
    const { wallet, isConnected, details } = useWallet();

    console.log(wallet?.activeAccount?.accountId)
    console.log(details)
    return (
        <div style={{ position: 'absolute', top: '1rem', right: '5rem', color: 'white'}}>
            <span className='mx-4'>
                {isConnected ? `Hi ${wallet?.activeAccount?.accountId.split('.')[0]}`: ""} 
            </span> 
            {
                isConnected ?
                <button
                // ref={trigger}
                className='p-1.5 shrink-0 rounded text-color-grey mx-2 border border-slate-200 hover:border-slate-300 shadow-sm'
                aria-haspopup="true"
                onClick={() => router.push('/dashboard')}
                // aria-expanded={dropdownOpen}
                
                >
                    Go To Dashboard
                </button>
                :

                ""
            }
            
       
        </div>
    )
}

export default Navigation;