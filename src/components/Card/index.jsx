import React from 'react'
import './styles.css'
import img from '../../assets/images/CryptoCloaks.webp'
import imgI from '../../assets/images/Lightnite.png'
import imgII from '../../assets/images/bitrefill.png'
import imgIII from '../../assets/images/bitcoin-shirt-logo.png'
import imgIV from '../../assets/images/citadel.png'
import imgV from '../../assets/images/btc-pins.png'

const cards = [
  { width: '85px', height: '60px', src: img, per: 5, name: 'CryptoCloaks', url:'https://www.cryptocloaks.com/' },
  { src: imgI, per: 15, name: 'Lightnite', url:'https://lightnite.io/' },
  { radius: '10px', width: '75px', height: '75px', src: imgII, per: 5, name: 'Bitrefill', url:'https://www.bitrefill.com/' },
  { width: '80px', height: '40px', src: imgIII, per: 5, name: 'BitcoinShirt', url:'https://bitcoinshirt.co/' },
  { width: '50px', height: '70px', src: imgIV, per: 5, name: 'Citadel21', url:'https://www.citadel21.com//' },
  { width: '65px', height: '70px', src: imgV, per: 5, name: 'BTC Pins', url:'https://btcpins.com/' },
]

function Card() {
  return (
    <div className="card-container">
      {cards.map((card) => (
        <div className="card-area">
          <div className="card-box">
            <a className="card-links" href={card.url} target="_blank" >
              <div className="img-box">
                <img style={{width:`${card.width}`, height: `${card.height}`, borderRadius: `${card.radius}`}} src={card.src} alt="icons" />
              </div>
              <span>{card.per}%</span>
            </a>
          </div>
          <h3>{card.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default Card
