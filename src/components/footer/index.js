import React from 'react'
import logo from '../../assets/images/logo.jpg'
import Store from '../../assets/images/app-store.png'
import Google from '../../assets/images/google-play.webp'
import Web from '../../assets/images/web-store.webp'
import {
    MailOutlined,
    TwitterOutlined,
    MediumOutlined,
} from '@ant-design/icons'
import './styles.css'

export const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="I-content">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav-elements">
                        <ul>
                            <li>
                                <a>FAQ</a>
                            </li>
                            <li>
                                <a>Cashback</a>
                            </li>
                            <li>
                                <a>Jobs</a>
                            </li>
                            <li>
                                <a>Terms</a>
                            </li>
                            <li>
                                <a>Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="social-icons">
                        <div className="icons">
                            <a> <MailOutlined color="white" /></a>
                        </div>
                        <div className="icons">
                            <a>  <TwitterOutlined color="white" /></a>
                        </div>
                        <div className="icons">
                            <a> <MediumOutlined color="white" /></a>
                        </div>
                    </div>
                </div>
                <div className="aviliable">
                    <img src={Store} alt="" />
                    <img src={Google} alt="" />
                    <img src={Web} alt="" />
                </div>
                <footer>© 2021 Kalbash | Sep-2021-04 </footer>
            </div>
        </div>
    )
}

