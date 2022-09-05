import React from 'react'
import IconThankYou from './IconThankYou'

const ThankYou = ({ msg }: any) => {
    return (
        <div className="thankyou">
            <div className="thankyou__container">
                <div className="thankyou__icon">
                    <IconThankYou />
                </div>
                <span className="thankyou__selectedreview">
                    You selected {msg?.rate} out of 5
                </span>
                <h1 className="thankyou__title">
                    Thank you!
                </h1>
                <p className='thankyou__description'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch.</p>
            </div>
        </div>
    )
}

export default ThankYou