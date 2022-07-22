import { MbButton } from 'mintbase-ui';
import React, { useEffect, useRef } from 'react';

import Image from '../../images/transactions-image-04.svg';



// {
//     store_name: "Store 36",
//     is_used: false,
//     quantity: 10,
//     discount: "20%",
//     start_date: new Date(),
//     expiry_date: new Date('2022-08-10'),
//     issued_token: 2
//     price: 2
// },



function CouponCard({
  store_name,
  is_minted,
  quantity,
  discount,
  start_date,
  expiry_date,
  issued_token,
  price,
  setShowModal
}) {
  
  return (
    <>
      {/* Details */}
      <div className="drop-shadow-lg mt-12 mx-4" style={{ minWidth: '12rem', paddingTop: '6.7rem', cursor: 'pointer'}} onClick={() => setShowModal(true)}>
        
        <div className="bg-white rounded-t-xl px-5 pb-2.5 text-center pt-5">
          +
        </div>
        
        <div className="flex justify-between items-center" aria-hidden="true">
          <svg className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20c5.523 0 10-4.477 10-10S5.523 0 0 0h20v20H0Z" />
          </svg>
          <div className="grow w-full h-5 bg-white flex flex-col justify-center">
            <div className="h-px w-full border-t border-dashed border-slate-200" />
          </div>
          <svg className="w-5 h-5 fill-white rotate-180" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20c5.523 0 10-4.477 10-10S5.523 0 0 0h20v20H0Z" />
          </svg>
        </div>
        
        <div className="bg-white rounded-b-xl p-5 pt-2.5 text-sm space-y-3 text-center">
          Add coupon
        </div>
      </div>
      {/* Receipts */}
      
    </>
  );
}

export default CouponCard;