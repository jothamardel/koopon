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
  price
}) {
  
  return (
    <>
      {/* Details */}
      <div className="drop-shadow-lg mt-12 mx-4" style={{ minWidth: '15rem'}}>
        {/* Top */}
        <div className="bg-white rounded-t-xl px-5 pb-2.5 text-center">
          <div className="mb-3 text-center">
            {/* <img className="inline-flex w-12 h-12 rounded-full -mt-6" src={Image} width="48" height="48" alt="Transaction 04" /> */}
          </div>
          <div className="text-2xl font-semibold text-emerald-500 mb-1">{price}N</div>
          <div className="text-sm font-medium text-slate-800 mb-3">{store_name}</div>
          {/* <div className="text-xs inline-flex font-medium bg-slate-100 text-slate-500 rounded-full text-center px-2.5 py-1">{!is_minted}</div> */}
          <button className='p-1.5 shrink-0 rounded text-color-grey mx-2 border border-slate-200 hover:border-slate-300 shadow-sm'>Buy</button>
          <button className='p-1.5 shrink-0 rounded text-color-grey mx-2 border border-slate-200 hover:border-slate-300 shadow-sm'>Trade</button>
        </div>
        {/* Divider */}
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
        {/* Bottom */}
        <div className="bg-white rounded-b-xl p-5 pt-2.5 text-sm space-y-3">
          <div className="flex justify-between space-x-1">
            <span className="italic">Discount:</span>
            <span className="font-medium text-slate-700 text-right">{discount}</span>
          </div>
          <div className="flex justify-between space-x-1">
            <span className="italic">Start Date:</span>
            <span className="font-medium text-slate-700 text-right">{start_date}</span>
          </div>
          <div className="flex justify-between space-x-1">
            <span className="italic">End Date:</span>
            <span className="font-medium text-slate-700 text-right">{expiry_date}</span>
          </div>
          <div className="flex justify-between space-x-1">
            <span className="italic">Quantity:</span>
            <span className="font-medium text-slate-700 text-right">{quantity}</span>
          </div>
          <div className="flex justify-between space-x-1">
            <span className="italic">Issued tokens:</span>
            <span className="font-medium text-slate-700 text-right">{issued_token}</span>
          </div>
        </div>
      </div>
      {/* Receipts */}
      
    </>
  );
}

export default CouponCard;