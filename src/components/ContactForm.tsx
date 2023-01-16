import React from 'react'

import { Body } from '.';

type ContactFormProps = {
    
}

const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log('click');
}

const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
px-5 py-3 placeholder-white`;
const errorStyles = `mt-1 text-primary-500`;

const ContactForm: React.FC<ContactFormProps> = ({}) => {
    return (
        <form
            onSubmit={handleSubmit}
            target="_blank"
        >
            <input 
                type="text"
                placeholder="NAME"

                className={inputStyles}
            />
            <Body className={errorStyles}>
                error message
            </Body>

            <input 
                type="text"
                placeholder="EMAIL"

                className={inputStyles}
            />

            <Body className={errorStyles}>
                error message
            </Body>

            <textarea 
                placeholder="MESSAGE"
                rows={4}
                cols={50}

                className={inputStyles}
            />

            <Body className={errorStyles}>
                error message
            </Body>

            <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition
                            duration-500 hover:text-white"
            >
                SUBMIT
            </button>
        </form>
    )
}

export default ContactForm
