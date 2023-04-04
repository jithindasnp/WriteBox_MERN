import React, { useState } from 'react'
import LinkedinLogin from '../components/LinkedinLogin'
import GoogleLogin from '../components/GoogleLogin'
import axios from 'axios'

export default function Register() {
  const [emailCheck, setemailCheck] = useState()
  const [passCheck, setpassCheck] = useState()
  const [register, setregister] = useState()


  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const validPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/



  const registerInpChange = (e) => {
    const { name, value } = e.target
    setregister({ ...register, [name]: value })

  }



  //api for registeration
  const registerSubmit = (e) => {
    e.preventDefault()
    if (!validEmail.test(emailCheck)) {
      alert("Please add a valid email")
    }
    else if (!validPass.test(passCheck)) {
      alert("Password should contain Minimum 8 characters,At least one uppercase letter ,At least one lowercase letter, At least one special character")
    } else {
      axios.post('http://localhost:3001/api/register', register).then((result) => {
        alert(result.data.message)
        console.log(result);
      }).catch((error) => {
        console.log(error);
      })
    }

  }



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
              <div className="account-content ms-3">
                <div className="account-box">
                  <div className="login-right">
                    <div className="login-header">
                      <h3> Register</h3>
                      <p className="text-muted">
                        Sign up as a student Or Sign up as a mentor, writer.
                      </p>
                    </div>
                    {/* Register Form */}
                    <form onSubmit={registerSubmit}>
                      <div className="form-group">
                        <label className="form-control-label">Email Address</label>
                        <input id="email" name='email' type="email" className="form-control" onChange={(e) => { setemailCheck(e.target.value); registerInpChange(e) }} />
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="form-control-label" >Password</label>
                            <input
                              id="password"
                              type="password"
                              className="form-control"
                              name="password"
                              onChange={(e) => { setpassCheck(e.target.value); registerInpChange(e) }}
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
                        <GoogleLogin />
                        <LinkedinLogin />
                      </div>
                      <div className="account-footer text-center mt-4 mb-2">
                        Already have an account?{" "}
                        <a className="forgot-link mb-0" href="/login">
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
