import React from 'react'
import './Test.css'
import vide from '../../images/vide.png.avif'

export default function VideoIntro() {
    return (
        <div className="container VideoIntroContainer mt-3 mb-5">
            <div className="row mt-5 mb-3">
                <div className="col">
                    <h1>Video Introduction</h1>
                </div>
            </div>
            <div className="mb-5">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                               <h3>Record your Video</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p style={{opacity:'0.6'}}>Now Introduce Yourself to the students ! You can Watch  and re-record
                                    your into before you submit it.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src={vide}className='image-vid'  />
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col ">
                                <button className='record-btn d-flex justify-content-center align-items-center'><i class="fa-solid fa-video"></i><p className='ms-3 mt-3'>Start Recording</p></button>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <h3>Or paste a link to your video</h3>
                                <p className='link-text'>Learn how to upload videos to <p style={{color:'violet'}}>youtube</p> or <p style={{color:'violet'}}>Vanimo</p></p>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='https://www.youtube.com/watch?v=592mNGkpYig'/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className='add-thumbnail-text'>Add Thumbnail (optional)</p>
                                <p style={{opacity:'0.6'}}>Settings  a custom thumbnail for your video makes students more
                                    likely to book trial sessions with you. Don’t worry if you don’t have
                                    one. We’ll use the preview above </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button className='thumbnail-btn d-flex justify-content-center align-items-center'><i class="fa-solid fa-cloud-arrow-up"></i><p className='ms-3 mt-3'>Add Thumbnail</p></button>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <p className='sub-heading'>Thumbnail requirements</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className='sub-heading'>Do's</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para"><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1'>JPEG or PNG formats only</p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para"><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1'>Size of 20Mb max.</p></div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className='sub-heading'>Dont's</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para"><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1'>Do not include your surname or contact info</p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para"><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1'>Do not mention your pricing or discounts</p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para"><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1'>Do not upload irrelevant pictures (stock images, landscopes,
                                    animals etc).</p></div>
                        </div>
                    </div>

                    
                    
                    
                    
                    
                    
                    
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <p className='sub-heading'>
                                    Video requirements
                                    (please note: your
                                    application will not be
                                    approved if you do not
                                    meet these requirements)
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className='sub-heading'>Do's</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para "><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1 '>Keep your video between 30 seconds
                                    and 2 minutes long</p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para "><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1 '>Record in horizontal mode and at
                                    eye level</p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para "><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1 '>Use good lightning and a neutral
                                    background</p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para"><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1 '>Use a stable surface so that your
                                    video does not appear shaky</p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para"><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1 '>Use a stable surface so that your
                                    video does not appear shaky</p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para"><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1 '>Your face and eyes are fully visible
                                    (except for religious reasons) and
                                    you are not wearing a hat,
                                    sunglasses and other accessory</p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para"><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1 '>Highlight your teaching experience
                                    and only any relevant teaching
                                    certification</p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para"><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1 '>Greet your students warmly and invite
                                    them a book a lesson</p></div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className='sub-heading'>Dont's</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para"><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1 '>Include your surname or any
                                    contact details</p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para"><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1 '>Include logos or links</p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para"><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1 '>Use slideshows or presentations</p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para "><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1 '>Have any other people visible in
                                    your video</p></div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className='sub-heading'>Examples</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex "><i class="fa-solid fa-video"></i>
                                <p className='px-1'>Have any other people visible in
                                    your video</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
