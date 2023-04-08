import React from 'react'
import'./Topbar.css'

export default function Topbar() {
    return (
        <div className="container-fluid ">
            <div className="row topbarRow justify-content-center align-items-center">
                <div className="col-auto col topbarLinks ">
                    <span className="topbarNum me-1 ">1</span>
                    <span>About</span>
                    <i className="fa-solid fa-angle-right mx-2" />
                </div>
                <div className="col-auto col topbarLinks ">
                    <span className="topbarNum me-1 ">2</span>
                    <span>Photo</span>
                    <i className="fa-solid fa-angle-right mx-2" />
                </div>
                <div className="col-auto col topbarLinks">
                    <span className="topbarNum me-1 ">3</span>
                    <span>Certification</span>
                    <i className="fa-solid fa-angle-right mx-2" />
                </div>
                <div className="col-auto col topbarLinks">
                    <span className="topbarNum me-1 ">4</span>
                    <span>Education</span>
                    <i className="fa-solid fa-angle-right mx-2" />
                </div>
                <div className="col-auto col topbarLinks">
                    <span className="topbarNum me-1 ">5</span>
                    <span>Description</span>
                    <i className="fa-solid fa-angle-right mx-2" />
                </div>
                <div className="col-auto col topbarLinks">
                    <span className="topbarNum me-1 ">6</span>
                    <span>Video</span>
                    <i className="fa-solid fa-angle-right mx-2" />
                </div>
                <div className="col-auto col topbarLinks">
                    <span className="topbarNum me-1 ">7</span>
                    <span>Availability</span>
                    <i className="fa-solid fa-angle-right mx-2" />
                </div>
                <div className="col-auto col topbarLinks">
                    <span className="topbarNum me-1 ">8</span>
                    <span>Pricing</span>
                    <i className="fa-solid fa-angle-right mx-2" />
                </div>
                <div className="col-auto col topbarLinks">
                    <span className="topbarNum me-1 ">9</span>
                    <span>Discount</span>
                    <i className="fa-solid fa-angle-right mx-2" />
                </div>
            </div>
        </div>

    )
}
