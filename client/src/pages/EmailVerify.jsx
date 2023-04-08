import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from "../../src/App.css";
import success from "../../src/images/success.png";



export default function EmailVerify() {

    const [validUrl, setValidUrl] = useState(true);
    const param = useParams();

    useEffect(() => {
        const verifyEmailUrl = async () => {
            await axios.get(`http://localhost:3001/api/login/${param.id}/verify/${param.token}`).then((result) => {
                console.log(result);
                setValidUrl(true);
            }).catch((error) => {
                console.log(error);
                setValidUrl(false);
            })
        };
        verifyEmailUrl();


    }, [param]);


    return (
        <>
            {validUrl ? (
                <div className="container emailVerifyContainer">
                    <img src={success} alt="success_img" className={styles.success_img} />
                    <h1>Email verified successfully</h1>
                    <Link to="/profile">
                        <button type="button" class="btn btn-success">Go to profile</button>
                    </Link>
                </div>
            ) : (
                <h1>404 Not Found</h1>
            )}
        </>
    )
}
