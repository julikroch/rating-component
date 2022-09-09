import IconThankYou from './IconThankYou'
import { MsgI } from '../types'
import { thankYouMessages } from '../constants'

const ThankYou = ({ msg }: MsgI) => {

    const rateValue = msg?.rate && thankYouMessages.rate.replace('{value}', `${msg.rate}`)

    return (
        <div className="thankyou">
            <div className="thankyou__container">
                <div className="thankyou__icon">
                    <IconThankYou />
                </div>
                <span className="thankyou__selectedreview">
                    {rateValue}
                </span>
                <h1 className="thankyou__title">
                    {thankYouMessages.title}
                </h1>
                <p className='thankyou__description'>
                    {thankYouMessages.description}
                </p>
            </div>
        </div>
    )
}

export default ThankYou