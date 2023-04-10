import React from 'react'
import './Description.css'

export default function Description() {
    return (
        <div className="container certificationContainer ">
            <form action="">
                <div className="row my-4">
                    <div className="col-6"><span className='fs-2 fw-normal'>Profile description</span></div>
                    <div className="col-6"></div>
                </div>
                <div className="row my-4">
                    <div className="col-10">
                        <p>Update or create a new profile headline and description. please make sure all information is relevant to the
                            subject you've teaching. be mindful of grammar and spelling mistakes, and don’t use all CAPS. All three
                            sections are required and will show up separately in your profile. Your application will not be approved if you
                            do not follow these requirements
                        </p>
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row mt-4 mb-1">
                    <div className="col-8"><span className='fs-2 fw-normal'>Description for English-speaking students</span></div>
                    <div className="col-4"></div>
                </div>
                <div className="row my-3">
                    <div className="col-lg-3 col-md-12">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJs7MF1lF7A_ZJnuOlwkvz5WXy7SGJiHdtMVNhf-Kn&s" alt="" />
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="row">
                            <div className="col-12"><span className='fs-2 ms-2' >Amanda M</span></div>
                            <div className="col-12"><input className='form-control' type="text" placeholder='Write your headline in English' /></div>
                            <div className="col-12"><p className='opacity-50 ms-2' >Good example: “certified tutor with 5 years of experience”</p></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12"></div>
                </div>
                <div className="row ">
                    <div className="col-12"><p className='fw-bold'>Introduce yourself and share briefly about your intrests</p></div>
                    <div className="col-12">
                        <input type="text" className="form-control descriptionTextBox" />
                        <p className='textBoxCustomPlaceholder w-50'>Hello, my name is... and I’m from...</p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-12"><p className='fw-bold'>Describe your mentorship experience, certification and methodology</p></div>
                    <div className="col-12"> <input type="text" className="form-control descriptionTextBox" /></div>
                    <p className='textBoxCustomPlaceholder w-50'>I have 5 years of teaching experience. I’m TEFL certified, and my classes are...</p>
                </div>
                <div className="row">
                    <div className="col-12"><p className='fw-bold'>Motivate students to book a trial lession with you</p></div>
                    <div className="col-12"> <input type="text" className="form-control descriptionTextBox" /></div>
                    <p className='textBoxCustomPlaceholder w-50'>Book a trial lesson with me so we can discuss your goals and how I can help
                        your reach them...</p>
                    <p className='p-0 m-0 textBoxMinWords'>400 Characters minimum. 0 characters currently</p>
                </div>
                <div className="row descriptionButtons ">
                    <div className="col-12">
                        <button type="button" class="backBtn rounded-1">Back</button>
                        <button type="button" class="nextBtn ms-3 rounded-1">Next</button>
                    </div>
                </div>

            </form >
        </div >
    )
}
