import axios from 'axios'
import React, { useEffect } from 'react'

export default function GoogleLogin() {





    const google = async () => {
        window.open("http://localhost:3001/auth/google", "_self")

    }



    return (
        <>
            <div className="col-lg-6">
                <button className="btn btn-primary login-btn" type="button" onClick={google}>
                    <i className="fa fa-google" style={{ fontSize: 18 }} />{" "}
                    Continue With Google
                </button>
            </div>
        </>
    )
}
