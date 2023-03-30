import React from 'react'
import FacebookLogin from '../components/FacebookLogin'
import GoogleLogin from '../components/GoogleLogin'

function Login() {
    return (
        <>
            <div>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
                <title>Writebox | Mentoring</title>
                {/* Favicon */}
                <link rel="icon" href="assets/img/favicon_16x16.png" type="image/x-icon" />
                {/* Bootstrap CSS */}
                <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
                {/* Fontawesome CSS */}
                <link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css" />
                <link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css" />
                {/* Main CSS */}
                <link rel="stylesheet" href="assets/css/style.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                {/* Main Wrapper */}
                <div className="main-wrapper">
                    {/* Page Content */}
                    <div className="bg-pattern-style">
                        <div className="content">
                            {/* Login Tab Content */}
                            <div className="account-content ms-3">
                                <div className="account-box">
                                    <div className="login-right">
                                        <div className="login-header">
                                            <h3>Login </h3>
                                            <p className="text-muted">Sign in as a student Or Sign in as a mentor, writer.</p>
                                        </div>
                                        <form action="index.html">
                                            <div className="form-group">
                                                <label className="form-control-label">Email Address</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-control-label">Password</label>
                                                <div className="pass-group">
                                                    <input type="password" className="form-control pass-input" />
                                                    <span className="fas fa-eye toggle-password" />
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <a className="forgot-link" href="forgot-password.html">Forgot Password ?</a>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-check form-check-xs custom-checkbox">
                                                    <input type="checkbox" className="form-check-input" name="agreeCheckboxUser" id="agree_checkbox_user" />
                                                    <label className="form-check-label" htmlFor="agree_checkbox_user">Remember me</label>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary login-btn" type="submit" style={{ background: '#00909E', border: '0px' }}>Login</button>
                                            <div className="text-center mt-3">
                                                <p>Or</p>
                                            </div>
                                            <hr />
                                            <div className="row  mt-4">
                                                <GoogleLogin/>
                                                <FacebookLogin/>

                                            </div>
                                            <div className="text-center dont-have">Don’t have an account? <a href="register.html">Register</a></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* /Login Tab Content */}
                        </div>
                    </div>
                    {/* /Page Content */}
                </div>
                {/* /Main Wrapper */}
                {/* jQuery */}
                {/* Bootstrap Core JS */}
                {/* Custom JS */}
            </div>

        </>
    )
}

export default Login
