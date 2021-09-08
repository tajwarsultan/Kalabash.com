import React, { useState } from "react"
import { Menu } from 'antd';
import { UserOutlined, WalletOutlined, PaperClipOutlined, QuestionCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import "./styles.css"
const { SubMenu } = Menu;



export const FAQ = () => {
    return (
        <section className="menu-container">
            <h1>How can we help you?
            </h1>
            <div className="drop">
                <Menu
                    mode="inline"
                    style={{ width: "50%", marginTop: "20px", background: "none" }}
                >
                    <SubMenu key="sub1" icon={<QuestionCircleOutlined />} title="About Strike">
                        <Menu.ItemGroup key="g1" title="Item 1">
                            <Menu.Item key="1"><Link to="/Job">What is Strike?</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/Job">How does Strike work?</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/Job">Where is Strike supported?</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/Job">When will Strike be available in my region?</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/Job">What are my limits?</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/Job">Is it possible to open a channel with Strike?</Link></Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<UserOutlined />} title="Account Verification" style={{ marginTop: "30px" }}>
                        <Menu.Item key="1"><Link to="/Job">What is required to open an account?</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/Job">Why is my account pending?</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<WalletOutlined />} title="Payments,Deposits, Withdrawals" style={{ marginTop: "30px" }}>
                        <Menu.Item key="1"><Link to="/Job">How do I increase my transaction limits?</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/Job">How to purchase bitcoin with Strike?</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/Job">What are transaction fees?</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/Job">Why aren't my payments going through?</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/Job">Why aren't my deposits going through?</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/Job">Why is my withdrawal still pending?</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/Job">Why was my deposit reversed?</Link></Menu.Item>
                        <Menu.Item key="8"><Link to="/Job">What is my active currency and how does it work?</Link></Menu.Item>
                        <Menu.Item key="9"><Link to="/Job">Where is my USD held?</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<PaperClipOutlined />} title="Term & Privacy" style={{ marginTop: "30px" }}>
                        <Menu.Item key="1"><Link to="/Job">Terms</Link></Menu.Item>
                        <Menu.Item key="1"><Link to="/Job">Privacy Policy</Link></Menu.Item>
                    </SubMenu>
                </Menu>
                <p className="faq-para">Can't find what you're looking for?</p>
                <div className="contact">
                    <h2 className="contact-heading">Contact us</h2>
                    <RightOutlined className="contact-icon" />
                </div>
            </div>
        </section >
    )
}