import React from 'react'
import { useForm } from 'react-hook-form';

import { Body } from '.';

const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
px-5 py-3 placeholder-white`;
const errorStyles = `mt-1 text-primary-500`;

const ContactForm: React.FC = ({}) => {

    const {
        register,
        trigger,
        formState: {errors},
    } = useForm();

    const handleSubmit = async (e: any) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            target="_blank"
            action="https://formsubmit.co/b76790da4a42a2ce12a7354a761c8006"
            method="POST"
        >
            <input 
                type="text"
                placeholder="NAME"
                {...register("name", {
                    required: true,
                    maxLength: 100,
                })}
                className={inputStyles}
            />
             {errors.name && (
                <Body className={errorStyles}>
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLength" && "Max ength is 100 char."}
                </Body>
            )}

            <input 
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className={inputStyles}
            />

            {errors.email && (
                <Body className={errorStyles}>
                    {errors.email.type === "required" && "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                </Body>
            )}

            <textarea 
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                    required: true,
                    maxLength: 2000,
                })}
                className={inputStyles}
            />

            {errors.message && (
                <Body className={errorStyles}>
                    {errors.message.type === "required" && "This field is required."}
                    {errors.message.type === "maxLength" && "Max ength is 2000 char."}
                </Body>
            )}

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
