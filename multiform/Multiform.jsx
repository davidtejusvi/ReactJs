import React, { useState } from 'react';
import './multiform.css'

const Multiform = () => {
    const data = [
        {
            id: "name",
            label: "Name",
            inputType: "text",
            buttonName: "Next",
            placeholder: "Enter your Name"
        }, {
            id: "email",
            label: "Email",
            inputType: "email",
            buttonName: "Next",
            placeholder: "Enter your Email"
        }, {
            id: "dob",
            label: "DOB",
            inputType: "date",
            buttonName: "Next",
            placeholder: "Enter your DOB"
        }, {
            id: "password",
            label: "Password",
            inputType: "password",
            buttonName: "Submit",
            placeholder: "Enter your password"
        }
    ]
    const [form, setForm] = useState(data);
    const [index, setIndex] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dob: "",
        password: ""
    })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (index == form.length - 1) {
            console.log("form submitted")
            setIsFormSubmitted(true)
        } else {
            setIndex(idx => idx + 1)
        }
    }

    const handleBack = () => {

    }

    const handleChange = (e) => {
        const id = e.target.id;
        const val = e.target.value;
        const copyformData = { ...formData };
        copyformData[id] = val;
        setFormData(copyformData)
    }

    console.log("formData", formData)

    return (
        <div>{
            !isFormSubmitted ? <div className='app'>
                <form className='container' onSubmit={handleSubmit}>
                    {
                        index > 0 && <a href='/' onClick={handleBack}>
                            Back
                        </a>
                    }
                    <label>{form[index].label}</label>
                    <input
                        id={form[index].id}
                        type={form[index].inputType}
                        placeholder={form[index].placeholder}
                        value={formData[form[index].id]}
                        onChange={handleChange}
                    />
                    <button>{form[index].buttonName}</button>
                </form>

            </div>
                :
                <div>
                    <div>
                        <h1>Success</h1>
                        <span>Name: {formData.name}</span>
                        <span>Name: {formData.email}</span>
                        <span>Name: {formData.dob}</span>
                        <span>Name: {formData.password}</span>
                    </div>
                </div>
        }

        </div>
    )
}

export default Multiform