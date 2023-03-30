import React from 'react'

export default function FacebookLogin() {
    return (
        <>
            <div className="col-lg-6">
                <button
                    className="btn btn-primary login-btn"
                    type="submit"
                    style={{ background: "#142850", border: 0 }}
                >
                    <i
                        className="fa fa-facebook-official"
                        style={{ fontSize: 18 }}
                    />{" "}
                    Continue With Facebook
                </button>
            </div>
        </>
    )
}
