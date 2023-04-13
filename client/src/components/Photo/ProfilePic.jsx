import React from 'react'
import './ProfilePic.css'

export default function ProfilePic() {
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
                            <p className='fs-3 opacity-75 '>Create a positive first impression</p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-sm-12 col">
                            <p className=' opacity-50 '>Get most students with Friendly and Professional look</p>
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
                    <div className="row my-5 ">
                        <div className="col-sm-12 col">
                            <form id="form-file-upload">
                                <input type="file" id="input-file-upload" multiple={true} />
                                <label id="label-file-upload" htmlFor="input-file-upload">
                                    <div>
                                        <p className='opacity-75'>Drag and drop your file here or</p>
                                    </div>
                                </label>
                            </form>
                        </div>
                    </div>
                    <div className="row profilePicButtons mb-5">
                        <div className="col-12">
                            <button type="button" class="profilePicbBackBtn rounded-1">Back</button>
                            <button type="button" class="profilePicbNextBtn ms-3 rounded-1">Next</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5 col">
                    <div className="row" style={{ marginTop: "70px" }}>
                        <div className="col-sm-12 col">
                            <span className='fs-5'>Photo requirements <br /> (please note:These requirements
                                are mandatory for the approval of your application)
                            </span>
                        </div>
                    </div>
                    <div className="row mt-5 justify-content-start">
                        <div className="col-sm-3 col ">
                            <img src="https://www.shutterstock.com/image-photo/word-demo-appearing-behind-torn-260nw-1782295403.jpg" height={95} width={85} alt="..." />
                        </div>
                        <div className="col-sm-3 col ">
                            <img src="https://www.shutterstock.com/image-photo/word-demo-appearing-behind-torn-260nw-1782295403.jpg" height={95} width={85} alt="..." />
                        </div>
                        <div className="col-sm-3 col ">
                            <img src="https://www.shutterstock.com/image-photo/word-demo-appearing-behind-torn-260nw-1782295403.jpg" height={95} width={85} alt="..." />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-12 col">
                            <i class="fa-regular fa-circle-check me-2 clrViolet"></i><span>For your profile photo, make sure to smile and look directly into the camera.</span>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-12 col">
                            <i class="fa-regular fa-circle-check me-2 clrViolet"></i><span>Frame your head and shoulders,
                                and avoid using selfies or applying filters,
                                frames, or borders.</span>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-12 col">
                            <i class="fa-regular fa-circle-check me-2 clrViolet"></i><span>Your photo should be centered and upright,
                                and you can use our tool to rotate it if necessary.</span>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-12 col">
                            <i class="fa-regular fa-circle-check me-2 clrViolet"></i><span>Use a stable surface to prevent shaky footage,
                                and ensure that your face and eyes are fully visible
                                (unless for religious reasons).</span>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-12 col">
                            <i class="fa-regular fa-circle-check me-2 clrViolet"></i><span>Do not wear hats, sunglasses, or any
                                other accessories in the photo</span>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-12 col">
                            <i class="fa-regular fa-circle-check me-2 clrViolet"></i><span>You should be the only person in the picture.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
