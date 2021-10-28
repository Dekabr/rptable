import React, {ChangeEvent, useState} from 'react';

export const Form = () => {
    const [firstName, setFirstName] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value)
    }

    return (
        <div>
            <h1>Form</h1>
            <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
            />

        </div>
    )
}
