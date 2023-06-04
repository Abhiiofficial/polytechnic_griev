import React, { useEffect, useState } from 'react'
import './AdminLogin.css'
import { TextField } from '@mui/material'
import { motion } from 'framer-motion'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'


const AdminLogin = ({ getLoginPerson, handleLogin }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const callLogin = () => {
        handleLogin(email, password)
    }

    const navigate = useNavigate()

    const token = Cookies.get('access_token')
    useEffect(() => {
        if (token) {
            navigate('/dashboard')
        }
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className='admin-login'>
                <div className="admin-login-col">
                    <div className="nav-button-box">
                        <span className="material-symbols-outlined  nav-button" onClick={() => getLoginPerson('noOne')}>
                            keyboard_backspace
                        </span>
                    </div>
                    <div className="admin-login-row">
                        <div className="admin-login-head">
                            <div className="admin-login-title">
                                <span className="admin-login-title-name">CARMEL</span>
                            </div>
                            <div className="admin-login-title">
                                <span className="admin-login-title-name">POLYTECHNIC</span>
                            </div>
                        </div>
                    </div>
                    <div className="admin-login-row">
                        <span className="admin-name">ADMIN</span>
                    </div>
                    <div className="admin-login-row">
                        <div className="admin-login-input-col">
                            <div className="admin-login-input-row">
                                <TextField className='admin-login-input' label='Username' type='text' onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="admin-login-input-row">
                                <TextField className='admin-login-input' label='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="admin-login-input-row">
                                <button className="admin-login-button" onClick={e => {
                                    e.preventDefault();
                                    if (email != "" && password != "") {
                                        callLogin()
                                    }
                                }}>LOGIN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default AdminLogin