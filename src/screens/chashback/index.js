import React from 'react'
import Box from '../../components/Box'
import Card from '../../components/Card'
import './styles.css'
import Cash from '../../assets/images/cashback.webp'
    
export const CashBack = () => {
    return (
        <div>
            <div className="cash-back">
                <h2>Earn cash while spending</h2>
                <p>
                    We work directly with popular brands to bring you savings on thousands
                    of products. Earn up to 15% cash back on the things you buy every day.
                </p>
            </div>
            <div className="partners">
                <h2>Most popular Partners</h2>
            </div>
            <Card />
            <div className="partners">
                <h2>How it works</h2>
            </div>
            <Box />
            <div className="merchant">
                <div className="content-area">
                    <div className="box-heading">
                        <h3>Merchants</h3>
                    </div>
                    <div className="Ist-content">
                        <p>
                            Cashback isn’t just for consumers. Start saving cash by signing up
                            with Strike for all your merchant processing needs.
                        </p>
                    </div>
                    <div className="IInd-content">
                        <p>
                            Every business has different requirements and our Cashback rewards
                            make it possible for you to profit and grow from precisely those
                            features. Interested in discussing Strike’s benefits? Contact
                            cashback@strike.me.
                        </p>
                    </div>
                </div>
                <div className="img-area">
                    <img src={Cash} alt="" />
                </div>
            </div>
        </div>
    )
}

