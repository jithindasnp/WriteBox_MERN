import React from 'react'
import './SkillTest.css'
import vide from '../../images/vide.png.avif'

export default function SkillTest() {
    return (
        <div className="container skillTestContainer mt-3 mb-5">
            <div className="row mt-5 mb-3">
                <div className="col">
                    <h1>Skill Test</h1>
                </div>
            </div>

            <div className="mt-3">
                <div className="row">
                    <div className="col-6">
                        <div className="row mb-3">
                            <div className="col">
                                <h3>Category Name</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10">
                                <input
                                    type="text"
                                    className="form-control bg-white"
                                    id="formGroupExampleInput2"
                                    value="PhD Mentorship"
                                    disabled 
                                    
                                />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-11">
                                <p className='sub-heading'>Why do you think your profile would be the best match as a mentor? Also,
                                    could you please tell me about your specialization and describe your work experience?????</p>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-11">
                                <h3>Recorder Video</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <img src={vide} className='image-vid' />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col ">
                                <button className='record-btn d-flex justify-content-center align-items-center'><i class="fa-solid fa-video"></i><p className='ms-3 mt-3'>Start Recording</p></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <p className='sub-heading'>
                                    To provide answerable video recorded instructions for the given question, you could follow these steps:
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className='sub-heading'>INSTRUCTIONS:</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para "><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1'>Set up a camera or your phone to record yourself while providing instructions.</p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para "><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1'>Introduce yourself and briefly explain the purpose of the video.</p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para "><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1'>Start by addressing the first question, "How would you offer a mentorship program?" Provide a step-by-step guide, including any relevant details or resources that would be useful for the viewer.
                                    You could also use visual aids such as a whiteboard or slides to illustrate your points. </p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para"><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1'>Next, move on to the second question, "Why do you think your profile would be the best match as a mentor?" Explain your qualifications, skills, and experience that make you a suitable mentor.
                                    Provide examples from your work or personal life to support your claims. </p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para"><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1'>Finally, address the third question, "What is your specialization and describe your work experience?" Be concise but thorough in describing your specialization and work experience,
                                    and highlight any achievements or projects that are relevant to the topic.</p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex do-para"><i class="fa-regular fa-circle-check"></i>
                                <p className='px-1'>Make sure to speak clearly and at a pace that is easy to follow. After recording, review the video to ensure that the instructions are clear and easy to understand.
                                    You can then share the video with the requester for their review and feedback.</p></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 " >
                <div className="row justify-content-center align-items-center">
                    <div className="col-3">
                        <button type="button" class="btn btn-outline file-choose" style={{ color: "#663399" }}>Back</button>
                        <button type="button" class="btn btn-outline ms-3" style={{ backgroundColor: "#663399", color: 'white', width: '60px' }}>Next</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
