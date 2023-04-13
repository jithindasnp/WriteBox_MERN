import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Education.css'

function Education() {
    // let dateDropdown = document.getElementById('date-dropdown'); 

    // let currentYear = new Date().getFullYear();    
    // let earliestYear = 1970;     
    // while (currentYear >= earliestYear) {      
    //   let dateOption = document.createElement('option');          
    //   dateOption.text = currentYear;      
    //   dateOption.value = currentYear;        
    //   dateDropdown.add(dateOption);      
    //   currentYear -= 1;    
    // }
    const [input, setInput] = useState('No file choosen')
    return (
        <div>
            <div className="container aboutContainer mt-3 mb-5">
                <div className="row">
                    <div className="col-10">
                        <h1>Education</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        <p>Tell students more about the higher education that you have completed or are working</p>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="col-10">
                        <label htmlFor="formGroupExampleInput" className="form-label">
                            University
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="Example input placeholder"
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="col-10">
                        <label htmlFor="formGroupExampleInput2" className="form-label">
                            Degree
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput2"
                            placeholder="Another input placeholder"
                        />
                    </div>
                </div>
                <div className="mb-1">
                    <div className="col-10">
                        <label htmlFor="formGroupExampleInput2" className="form-label">
                            Degree Type
                        </label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected="">UG</option>
                            <option value={1}>PG</option>
                            <option value={2}>PhD</option>
                            <option value={3}>Dr</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="col-10">
                        <label htmlFor="formGroupExampleInput2" className="form-label">
                            Specialization
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput2"
                            placeholder="Another input placeholder"
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <div className="col-4">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="formGroupExampleInput2" className="form-label">
                                    Years of Study
                                </label>
                                <select className="form-select" aria-label="Default select example" id='date-dropdown'>

                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="formGroupExampleInput2" className="form-label">

                                </label>
                                <p>------</p>
                            </div>
                            <div className="col">
                                <label htmlFor="formGroupExampleInput2" className="form-label">
                                    Years of Study
                                </label>
                                <select className="form-select" aria-label="Default select example" id='date-dropdown'>

                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-3" >
                    <div className="col-7  p-2" style={{ backgroundColor: '#F4F4F4' }}>
                        <div className="row">
                            <div className="col-7 d-flex" >
                                <i class="fa-sharp fa-regular fa-file-lines" style={{ color: "#663399" }}></i>
                                <p className='px-1'>Get a “Diploma Verified” badge</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p>Upload your diploma to boost your credibility! Our team will review it adn add the badge to your
                                    profile. Once reviewed, your files will be deleted</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5">
                            <div class="file-input">
                                    <input type="file" id="myFile" class="inputfile" onChange={(e)=>{setInput(e.target.value)}} />
                                    <label for="myFile" className='file-choose'>Choose File</label>
                                    <span id="file-name">{input}</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <p>JPG or PNG format, maximum size of 20MB</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3" >
                    <div className="col-10" >
                        <div className="row">
                            <div className="col d-flex" style={{ color: "#663399" }}>
                                <i class="fa-regular fa-square-plus"></i>
                                <p className='px-1'>Add another certificate</p></div>
                        </div>
                    </div>
                </div>

                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        I don’t have any teaching certificate yet
                    </label>
                </div>

                <div className="mb-3" >
                    <div className="row">
                        <div className="col-3">
                            <button type="button" class="btn btn-outline" style={{ color: "#663399" }}>Back</button>
                            <button type="button" class="btn back-button btn-outline px-1" style={{ backgroundColor: "#663399", color: 'white', width: '50px' }}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
