import axios from 'axios'
import React from 'react'

export default function LinkedinLogin() {

    const facebook = () => {
        window.open("http://localhost:3001/auth/linkedin", "_self")
    };

    return (
        <>
            <div className="col-lg-6">
                <button
                    className="btn btn-primary login-btn"
                    type="button"
                    style={{ background: "#142850", border: 0 }}
                    onClick={facebook}
                >
                    <i
                        className="fa fa-linkedin"
                        style={{ fontSize: 18 }}
                    />{" "}
                    Continue With Linkedin
                </button>
            </div>
        </>
    )
}
