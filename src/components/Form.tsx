import React from 'react';
import { Link } from "react-router-dom";
import IconStar from './IconStar'
import { FormI, StarI } from '../types';
import { starsMessages, formMessages } from "../constants";

const Form = ({ msg, setMsg }: FormI) => {

    const submitRate = (i: number) => setMsg(starsMessages?.find((star: StarI) => i === star?.rate))

    return (
        <div className="form">
            <div className="form__container">
                <span className="form__icon">
                    <IconStar />
                </span>
                <h1 className="form__title">{formMessages.title}</h1>
                <p className="form__description">{formMessages.description}</p>
                <div className="form__stars">
                    {starsMessages?.map((star: StarI, i: number) =>
                        <button
                            key={i}
                            onClick={() => submitRate(i + 1)}
                            className='form__stars--rate'
                        >
                            {i + 1}
                        </button>
                    )}
                </div>
                {msg?.text && <p className='form__rate--msg'>{msg.text}</p>}
                <Link
                    to={'thank-you'}
                    className='form__btn'
                >
                    Submit
                </Link>
            </div>
        </div>
    )
}

export default Form