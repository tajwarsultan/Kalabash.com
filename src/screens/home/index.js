import React from 'react'
import './styles.css'
import img from '../../assets/images/mobile1.png'
import { Button } from '../../components/button'
import videoI from '../../assets/vedios/a.mp4'
import vedioII from '../../assets/vedios/b.mp4'
import vedioIII from '../../assets/vedios/c.mp4'
import image from '../../assets/images/frame.webp'
import cardImg from '../../assets/images/card.png'
import Card from '../../components/Card'
import { RightOutlined } from '@ant-design/icons'

export const Home = () => {
  return (
    <>
      <section className="home-container">
        <div className="home-content">
          <h1>A more connected financial world</h1>
          <p>
            Send money instantly, with no added fees, anywhere in the world.
          </p>
          <Button title="Download" />
          <div className="download-links">
            <a>iOS,</a>
            <a>Android,</a>
            <a>Chrome</a>
          </div>
        </div>
        <div className="home-content">
          <img src={img} alt="" className="mobile-img" />
        </div>
      </section>

      {/* Money Content */}

      <section className="home-container">
        <div className="home-content">
          <video className="video" autoPlay loop muted>
            <source src={videoI} type="video/mp4" />
          </video>
        </div>
        <div className="home-content">
          <h1>Money without borders</h1>
          <p>
            Send and receive instant and secure borderless payments from your
            fingertips, with no added fees.
          </p>
        </div>
      </section>
      <section className="home-container">
        <div className="innerContainer">
          <h1>Buy and sell bitcoin</h1>
          <p>
            Strike offers the easiest way to buy bitcoin. Skip fees and stack
            sats, the right way.
          </p>
        </div>
        <div>
          <video className="video" autoPlay loop muted>
            <source src={vedioII} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Paid Container */}

      <section className="home-container">
        <div className="home-content">
          <img src={image} className="frame-img" />
        </div>
        <div className="home-content">
          <p className="coming-soon">Comming Soon</p>
          <h1>Get paid in bitcoin</h1>
          <p>
            Put the power of your money back into your pocket. Convert your
            paycheck to bitcoin with no added fees.
          </p>
          <Button title="Join Waitist" />
        </div>
      </section>

      {/* this is wallet section */}

      <section className="wallet">
        <div>
          <img src={cardImg} className="frame-img" />

          <p className="wallet-para coming-soon">Comming Soon</p>
          <h1 className="wallet-headig">Wallet, meet the Strike card</h1>
          <p className="wallet-para">
            A real debit card with real rewards for the real world. Take your
            Strike app shopping anywhere at anytime.
          </p>
        </div>
      </section>
    </>
  )
}
