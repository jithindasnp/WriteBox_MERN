import React from 'react'
import Topbar from '../components/Topbar/Topbar'
import About from '../components/About/About'
import Education from '../components/Education/Education'
import Certification from '../components/Certification/Certification'

export default function Profile() {
    return (
        <>
            <Topbar />
            <About />
            {/* <Education/>
            <Certification/> */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                       
                    </div>
                </div>
            </div>
        </>
    )
}