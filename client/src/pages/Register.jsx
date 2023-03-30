import React from 'react'
import FacebookLogin from '../components/FacebookLogin'
import GoogleLogin from '../components/GoogleLogin'

export default function Register() {
  return (
    <>
      <>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <title>Writebox | Mentoring</title>
        {/* Favicon */}
        <link rel="icon" href="assets/img/favicon_16x16.png" type="image/x-icon" />
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        {/* Fontawesome CSS */}
        <link
          rel="stylesheet"
          href="assets/plugins/fontawesome/css/fontawesome.min.css"
        />
        <link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css" />
        {/* Main CSS */}
        <link rel="stylesheet" href="assets/css/style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        {/* Main Wrapper */}
        <div className="main-wrapper">
          {/* Page Content */}
          <div className="bg-pattern-style bg-pattern-style-register">
            <div className="content">
              {/* Register Content */}
              <div className="account-content">
                <div className="account-box">
                  <div className="login-right">
                    <div className="login-header">
                      <h3> Register</h3>
                      <p className="text-muted">
                        Sign up as a student Or Sign up as a mentor, writer.
                      </p>
                    </div>
                    {/* Register Form */}
                    <form action="index.html">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">First Name</label>
                            <input
                              id="first-name"
                              type="text"
                              className="form-control"
                              name="first_name"
                              autofocus=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">Last Name</label>
                            <input
                              id="last-name"
                              type="text"
                              className="form-control"
                              name="last_name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-control-label">Email Address</label>
                        <input id="email" type="email" className="form-control" />
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">Password</label>
                            <input
                              id="password"
                              type="password"
                              className="form-control"
                              name="password"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">
                              Confirm Password
                            </label>
                            <input
                              id="password-confirm"
                              type="password"
                              className="form-control"
                              name="password_confirmation"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-check form-check-xs custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="agreeCheckboxUser"
                            id="agree_checkbox_user"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="agree_checkbox_user"
                          >
                            By clicking Continue with or Sign up, you agree to
                            Writebox
                          </label>{" "}
                          <a tabIndex={-1} href="javascript:void(0);">
                            Privacy Policy
                          </a>{" "}
                          &amp;{" "}
                          <a tabIndex={-1} href="javascript:void(0);">
                            {" "}
                            Terms.
                          </a>
                        </div>
                      </div>
                      <button
                        className="btn btn-primary login-btn"
                        type="submit"
                        style={{ background: "#00909E", border: 0 }}
                      >
                        Create Account
                      </button>
                      <div className="text-center mt-3">
                        <p>Or</p>
                      </div>
                      <hr />
                      <div className="row  mt-4">
                        <GoogleLogin/>
                        <FacebookLogin/>
                      </div>
                      <div className="account-footer text-center mt-4 mb-2">
                        Already have an account?{" "}
                        <a className="forgot-link mb-0" href="login.html">
                          Login
                        </a>
                      </div>
                    </form>
                    {/* /Register Form */}
                  </div>
                </div>
              </div>
              {/* /Register Content */}
            </div>
          </div>
          {/* /Page Content */}
        </div>
        {/* /Main Wrapper */}
        {/* jQuery */}
        {/* Bootstrap Core JS */}
        {/* Custom JS */}
      </>

    </>
  )
}
