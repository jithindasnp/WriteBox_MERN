import React from 'react'
import './Test.css'
function Test() {
    return (
        <div>
            <div className="container test1Container mt-5 d-flex justify-content-center align-items-center   ">
                <div class="">
                    <div className="row ">
                        <div className="col">
                            <button className='test-button'>Test Camera</button>
                        </div>
                    </div>
                    <div className="row mt-5 me">
                    <button type="button" class="btn btn-outline" style={{ color: "#663399" }}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test
