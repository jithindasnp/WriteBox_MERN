import React from 'react'

export default function GoogleLogin() {
    return (
        <>
            <div className="col-lg-6">
                <button className="btn btn-primary login-btn" type="submit">
                    <i className="fa fa-google" style={{ fontSize: 18 }} />{" "}
                    Continue With Google
                </button>
            </div>
        </>
    )
}
