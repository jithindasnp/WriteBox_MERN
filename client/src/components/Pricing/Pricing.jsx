import React from 'react'
import './Pricing.css'
import { Link } from 'react-router-dom'

export default function Pricing() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col">
                    <h2>Set your hour base rate</h2>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-sm-12 col">
                    <p className='opacity-75'>We suggest setting a base price of $5 per hour to attract more students to your profile.</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-sm-4 col d-flex align-items-center">
                    <i class="fa-solid fa-circle-exclamation fa-rotate-180 me-2 fs-5"></i>
                    <p className='opacity-75 m-0 p-0'>Change your base rate in settings after approval</p>
                </div>
                <div className="col-sm-2 col"></div>
                <div className="col-sm-6 col ">
                    <div className="subscriptionBox mt-5">
                        <h5>Subscription Plans</h5>
                        <p className='mb-0 opacity-50' style={{ fontSize: "12px" }}>Students can choose monthly or yearly plans based on mentorship frequency,
                            with automatic recurring payments
                        </p><b>Learn more</b>
                    </div>
                </div>
            </div>
            <div className="row mt-5 pb-4 rowBorderBottom" >
                <div className="col-sm-6 col">
                    <h2>Hourly rate</h2>
                    <p className='opacity-75'>total amount client will see</p>
                </div>
                <div className="col-sm-6 col d-flex">
                    <div className="inpBoxWithIcons">
                        <i class="fa-solid fa-dollar-sign inpBoxWithIconsDollar"></i>
                        <input type="number" placeholder='0.00' className='inpBoxWithIconsForm ' />
                    </div>
                    <span className=' ms-3' style={{ marginTop: "7px" }}> <b>/hr</b> </span>
                </div>
            </div>
            <div className="row mt-5 pb-4 rowBorderBottom" >
                <div className="col-sm-6 col">
                    <div className='d-flex'> <h2>Service fee</h2><Link className='mt-2 ms-3'>learn more</Link></div>
                    <p className='opacity-75'>This allows us to operate the platform and offer services such as payment protection and customer support</p>
                </div>
                <div className="col-sm-6 col d-flex">
                    <div className="inpBoxWithIcons">
                        <i class="fa-solid fa-dollar-sign inpBoxWithIconsDollar"></i>
                        <input type="number" placeholder='0.00' className='inpBoxWithIconsForm ' />
                    </div>
                    <span className=' ms-3' style={{ marginTop: "7px" }}> <b>/hr</b> </span>
                </div>
            </div>
            <div className="row mt-5 pb-4 " >
                <div className="col-sm-6 col">
                    <h2>Set Your Discount Range</h2>
                    <p >I would like to offer a discount for my lessons</p>
                </div>
                <div className="col-sm-6 col d-flex mt-4 ps-4" >
                    <div className="inpBoxWithIcons ">
                        <span className='inpBoxWithIconsDiscount '>For discount</span>
                        <div className='d-flex'>
                            <input type="number" placeholder='0-40' className='inpBoxWithIconsForm' />
                            <span className=' ms-3' style={{ marginTop: "7px" }}> <b>%</b> </span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row mb-5">
                <div className="col-sm-6 col"></div>
                <div className="col-sm-5 col ">
                    <div className='d-flex align-items-center'><i class="fa-solid fa-circle-exclamation fa-rotate-180 me-2 fs-5"></i>
                        <p className='opacity-75 m-0 p-0'>Discounts only apply to new subscriptions,
                            change them in settings after approval</p></div >
                    <div className="subscriptionBox mt-5">
                        <p className='pb-2' style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.38)" }}>Explore your Discounts Benefits</p>
                        <div className='d-flex align-items-center'>
                            <i class="fa-solid fa-star me-3 fs-5"></i>
                            <p className='mb-0 opacity-50' >  Highlighted profile: The competitive advantage with new students</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <i class="fa-solid fa-graduation-cap me-3 fs-5"></i>
                            <p className='mb-0 opacity-50' >   Longer commitments:  Students who commit to longer-term lessons</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <i class="fa-solid fa-circle-dollar-to-slot me-3 fs-5"></i>
                            <p className='mb-0 opacity-50' >  Highlighted profile: The competitive advantage with new students</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5 pb-4 " >
                <div className="col-sm-6 col">
                    <h2>You’ll get</h2>
                    <p className='opacity-75'>Estimated payment after deducting service fees</p>
                </div>
                <div className="col-sm-6 col d-flex">
                    <div className="inpBoxWithIcons">
                        <i class="fa-solid fa-dollar-sign inpBoxWithIconsDollar"></i>
                        <input type="number" placeholder='0.00' className='inpBoxWithIconsForm ' />
                    </div>
                    <span className=' ms-3' style={{ marginTop: "7px" }}> <b>/hr</b> </span>
                </div>
            </div>
            <div className="row pricingButtons my-5 ">
                <div className="col-sm-12 col d-flex justify-content-center">
                    <button type="button" class="backBtn rounded-1">Back</button>
                    <button type="button" class="completeBtn ms-3 rounded-1">Compete Registration</button>
                </div>
            </div>
        </div>
    )
}
