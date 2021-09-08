import React from 'react'
import FeatI from '../../assets/images/feat1.webp'
import FeatII from '../../assets/images/feat2.webp'
import FeatIII from '../../assets/images/feat3.webp'
import Card from '../Card'
import './styles.css'

const boxes = [
  { url: FeatI, id: 1, name: 'Scan', para: 'Scan the QR code from a given merchant.' },
  { url: FeatII, id: 2, name: 'Confirm', para: 'Confirm the amount and cashback reward.' },
  { url: FeatIII, id: 3, name: 'Earn', para: 'Pay and immediately earn cashback in your Strike account.' },
]

function Box() {
  return (
    <div>
      <div className="box-container">
        {boxes.map((box) => (
          <div className="box-area">
              <img src={box.url} alt="" />
            <div className="id">
              <span>{box.id}</span>
            </div>
            <div className="box-name">
                <h4>{box.name}</h4>
            </div>
            <div className="box-para">
                <p>{box.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Box
