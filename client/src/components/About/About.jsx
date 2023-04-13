import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className="container aboutContainer mt-3 mb-5">
            <div className="row">
                <div className="col">
                    <h1>About</h1>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                    First Name
                </label>
                <input
                    type="text"
                    className="form-control w-75"
                    id="formGroupExampleInput"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                    Last Name
                </label>
                <input
                    type="text"
                    className="form-control w-75"
                    id="formGroupExampleInput2"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                    Country of origin
                </label>
                <input
                    type="text"
                    className="form-control w-75"
                    id="formGroupExampleInput2"
                />
            </div>
            <div className="mb-1">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                    Language Spoken
                </label>
                <select className="form-select w-75" aria-label="Default select example">
                    <option selected="">select</option>
                    <option value={1}>Arabic</option>
                    <option value={2}>Assamese</option>
                    <option value={3}>Bengali</option>
                    <option value={4}>Chinese</option>
                    <option value={5}>English</option>
                    <option value={6}>French</option>
                    <option value={7}>German</option>
                    <option value={8}>Gujarathi</option>
                    <option value={9}>Hindi</option>
                    <option value={10}>Italian</option>
                    <option value={11}>Japanese</option>
                    <option value={12}>Kannada</option>
                    <option value={13}>Korean</option>
                    <option value={14}>Malayalam</option>
                    <option value={15}>Marathi</option>
                    <option value={16}>Orriya</option>
                    <option value={17}>Polish</option>
                    <option value={18}>Portuguese</option>
                    <option value={19}>Punjabi</option>
                    <option value={20}>Russian</option>
                    <option value={21}>Spanish</option>
                    <option value={22}>Tamil</option>
                    <option value={23}>Telugu</option>
                    <option value={24}>Turkish</option>
                    <option value={25}>Urdu</option>
                </select>
            </div>
            <div className='mb-3'>
                <Link style={{ textDecoration: "none" }}>add another language</Link>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                    Mentorship for
                </label>

                <select className="form-select w-75" aria-label="Default select example">
                    <option selected="">select </option>
                    <option value={1}>Phd </option>
                    <option value={2}>R &amp; D </option>
                    <option value={3}>Skill development </option>
                    <option value={4}>Language learning</option>
                    <option value={5}>Enterpreanureship </option>
                    <option value={6}>Coding Learning </option>
                    <option value={7}>Project Learning </option>
                    <option value={8}>Career development </option>
                    <option value={9}>Subject </option>
                    <option value={10}>Courses </option>
                </select>
            </div>
            <div className="row mb-3">
                <div className="col-sm-9 col-9">
                    <div className="mb-1 w-100">
                        <label htmlFor="formGroupExampleInput" className="form-label">
                            I Provide Mentorship for
                        </label>
                        <input
                            type="text"
                            className="form-control w-100"
                            id="formGroupExampleInput"
                            placeholder="Full stck Development"
                        />
                    </div>
                    <span className='clrViolet '><i class="fa-solid fa-circle-plus clrViolet"></i>Add another mentorship</span>
                </div>
                <div className="col-sm-3 mt-sm-2 d-flex ">
                <label htmlFor="" className=" mt-4 me-3">
                   <p className='mt-2 opacity-75'> Level</p>
                </label>
                    <select className="form-select w-50 mt-sm-4 h-50" aria-label="Default select example">
                        <option selected="Level">select</option>
                        <option value={1}>A2</option>
                        <option value={2}>A2</option>
                        <option value={3}>B1</option>
                        <option value={4}>B2</option>
                    </select>
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                    Describe your mentorship experience
                </label>
                <select className="form-select w-75" aria-label="Default select example">
                    <option selected="">select</option>
                    <option value={1}>I have good mentorship experience</option>
                    <option value={2}>First time I am offering mentorship</option>
                    <option value={3}>I have formal mentorship experience </option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                    Describe your current sitauation
                </label>
                <select className="form-select w-75" aria-label="Default select example">
                    <option selected="">select</option>
                    <option value={1}>I have another mentorship job </option>
                    <option value={2}>I am a fresher looking to join as a mentor</option>
                    <option value={2}>I am working in other industries and looking for a part-time mentor job</option>
                </select>
            </div>
            <div className="mb-1">
                <label htmlFor="formGroupExampleInput" className="form-label">
                    Phone Number(optional)
                </label>
                <input
                    type="text"
                    className="form-control w-75 aboutNumberInput ps-5 fw-bold"
                    id="formGroupExampleInput"
                    placeholder='+91'
                />
            </div>
            <div className="row mb-1">
                <div className="col-sm-12 col">
                    <p className='mt-0 pt-0 opacity-50'>Get SMS-notification about new messages from mentees</p>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-12 col">
                    <span className='text-dark'>Age</span>
                    <div className="form-check ">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckChecked"
                            defaultChecked=""
                            style={{backgroundColor:"#663399"}}
                        />
                        <label className="form-check-label opacity-75" htmlFor="flexCheckChecked">
                        I confirm I am above 18
                        </label>
                    </div>

                </div>
            </div>
            <button type="button" className="btn  nextBtn">
                Next
            </button>
        </div>

    )
}
