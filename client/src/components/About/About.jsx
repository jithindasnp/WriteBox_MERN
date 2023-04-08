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
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Example input placeholder"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                    Last Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Another input placeholder"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                    Country of origin
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Another input placeholder"
                />
            </div>
            <div className="mb-1">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                    Language Spoken
                </label>
                <select className="form-select" aria-label="Default select example">
                    <option selected="">English</option>
                    <option value={1}>Malayalam</option>
                    <option value={2}>Hindi</option>
                    <option value={3}>Kannada</option>
                </select>
            </div>
            <div className='mb-3'>
                <Link style={{ textDecoration: "none" }}>add another language</Link>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                    Mentorship for
                </label>
                <select className="form-select" aria-label="Default select example">
                    <option selected="">PhD Mentorship</option>
                    <option value={1}>R &amp; D Mentorship</option>
                    <option value={2}>Skill development mentorship</option>
                    <option value={3}>Language learning</option>
                    <option value={3}>Enterpreanureship mentorship</option>
                    <option value={3}>Coding Learning Mentorship</option>
                    <option value={3}>Project Learning Mentorship</option>
                    <option value={3}>Career development Mentorship</option>
                    <option value={3}>Subject Mentorship</option>
                    <option value={3}>Courses Mentorship</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                    I Provide Mentorship for
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Full stck Development"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                    Describe your mentorship experience
                </label>
                <select className="form-select" aria-label="Default select example">
                    <option selected="">English</option>
                    <option value={1}>Malayalam</option>
                    <option value={2}>Hindi</option>
                    <option value={3}>Kannada</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                    Describe your current sitauation
                </label>
                <select className="form-select" aria-label="Default select example">
                    <option selected="">i have another mentorship experience</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                    Phone Number(optional)
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Example input placeholder"
                />
            </div>
            <button type="button" className="btn btn-primary">
                Submit
            </button>
        </div>

    )
}
