import React from 'react'
import './Photo.css'

export default function Photo() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-7 col">
                    <div className="row">
                        <div className="col-sm-12 col">
                            <h2 >Profile Photo</h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-12 col">
                            <p className='fs-3 opacity-75 '>Make a great  first impression</p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-sm-12 col">
                            <p className='fs-5 opacity-50 '>Tutors who look friendly and professional get the most students</p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-sm-4 col">
                            <button className='btn UploadPhotoBtn'>Upload photo</button>
                        </div>
                        <div className="col-sm-4 col">
                            <span style={{ opacity: "90%" }}>JPG or PNG format Maximum 5 MB</span>
                        </div>
                        <div className="col-sm-4 col"></div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-12 col">
                            <form id="form-file-upload">
                                <input type="file" id="input-file-upload" multiple={true} />
                                <label id="label-file-upload" htmlFor="input-file-upload">
                                    <div>
                                        <p>Drag and drop your file here or</p>
                                        <button className="upload-button">Upload a file</button>
                                    </div>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5 col"></div>
            </div>
        </div>
    )
}
