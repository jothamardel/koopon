import React, { useState } from 'react'

const Modal = () => {
    const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)
    return (
            <>

                {/* Product */}
                <div>
                  <h2 className="text-2xl text-slate-800 font-bold mb-6">Create Coupon</h2>
                  <div className="flex flex-wrap items-center -m-1.5">

                    {/* Send Feedback */}
                    <div className="m-1.5">
                      {/* Start */}
                      
                    
                      {/* <ModalBasic id="feedback-modal" modalOpen={feedbackModalOpen} setModalOpen={setFeedbackModalOpen} title="Send Feedback"> */}
                        {/* Modal content */}
                        <div className="px-5 py-4">
                          
                          <div className="space-y-3">
                            <div>
                              <label className="block text-sm font-medium mb-1" htmlFor="name">Coupon Name <span className="text-rose-500">*</span></label>
                              <input id="name" className="form-input w-full px-2 py-1" type="text" required />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1" htmlFor="email">Email <span className="text-rose-500">*</span></label>
                              <input id="email" className="form-input w-full px-2 py-1" type="email" required />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1" htmlFor="feedback">Message <span className="text-rose-500">*</span></label>
                              <textarea id="feedback" className="form-textarea w-full px-2 py-1"  required></textarea>
                            </div>
                          </div>
                        </div>
                        {/* Modal footer */}
                        <div className="px-5 py-4 border-t border-slate-200">
                          <div className="flex flex-wrap justify-end space-x-2">
                            
                            <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Create</button>
                          </div>
                        </div>
                      {/* </ModalBasic> */}
                      {/* End */}
                    </div>
                </div>
                </div> 
            </>
    )
}

export default Modal ;