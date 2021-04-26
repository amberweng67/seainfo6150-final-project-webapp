import React, { useState } from 'react'
import styles from './SignUp.module.css';
import { useHistory } from "react-router-dom";

function getRequiredErrorMessage(type) {
    return `${type} is required`;
}

function getFormatErrorMessage(type) {
    return `${type} format is not correct`;
}

function getEqualErrorMessage(type1, type2) {
    return `${type1} and ${type2} do not have the same value`;
}

const CAREER_FIELDS = [
    'Product Manager',
    'UX Designer',
    'Software Engineer',
    'Data Scientist',
    'Business Analyst',
    'Other',
];

const EDUCATION_LEVELS = [
    'Bacholar',
    'Master',
    'Doctor',
    'MBA',
    'JD',
    'Other',
];

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [rememberMe, setRememberMe] = useState(true);
    const [sex, setSex] = useState('');
    const [careerField, setCareerField] = useState('');
    const [educationLevel, setEducationLevel] = useState('');

    const history = useHistory();
    const validateForm = () => {
        const errorMessages = [];
        const passwordFormValue = { type: 'password', label: 'Passowrd', value: password, required: true };
        const formValues = [
            {
                type: 'email', label: 'Email', value: email, required: true,
                validator: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },
            {
                type: 'userName', label: 'User name', value: userName, required: true,
            },
            passwordFormValue,
            { type: 'repeatPassword', label: 'Repeat Password', value: repeatPassword, required: true, equalFormValue: passwordFormValue },
            {
                type: 'sex', label: 'Sex', value: sex, required: true,
            },
            {
                type: 'phoneNumber', label: 'Phone number', value: phoneNumber, required: false,
                validator: /[0-9]{10}/
            },
            {
                type: 'careerField', label: 'Career field', value: careerField, required: false,
            },
            {
                type: 'educationLevel', label: 'Education level', value: educationLevel,
            },
        ];
        for (const formValue of formValues) {
            if (!formValue.value && formValue.required) {
                errorMessages.push(getRequiredErrorMessage(formValue.label));
            } else if (formValue.validator) {
                if (formValue.value && !formValue.validator.test(formValue.value)) {
                    errorMessages.push(getFormatErrorMessage(formValue.label));
                }
            } else if (formValue.equalFormValue) {
                if (formValue.value !== formValue.equalFormValue.value) {
                    errorMessages.push(getEqualErrorMessage(formValue.label, formValue.equalFormValue.label));
                }
            }
        }
        return errorMessages;
    };

    const signUp = () => {
        const errorMessages = validateForm();
        if (errorMessages.length > 0) {
            setErrorMessages(errorMessages);
        } else {
            history.push('/login');
        }
    };

    const cancel = () => {
        history.push('/');
    }

    const selectSex = ({ target: { value } }) => {
        setSex(value);
    }

    return (
        <form className={styles.formContainer}>
            <div className={styles.container}>
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />

                <label htmlFor="email"><b>Email*</b></label>
                <input id="email" type="text" placeholder="Enter Email" name="email" required value={email} onChange={({ target: { value } }) => { setEmail(value) }} />

                <label htmlFor="user-name"><b>User Name*</b></label>
                <input id="user-name" type="text" placeholder="User name" name="user-name" value={userName} onChange={({ target: { value } }) => { setUserName(value) }} />

                <label htmlFor="psw"><b>Password*</b></label>
                <input id="psw" type="password" placeholder="Enter Password" name="psw" required value={password} onChange={({ target: { value } }) => { setPassword(value) }} />

                <label htmlFor="psw-repeat"><b>Repeat Password*</b></label>
                <input id="psw-repeat" type="password" placeholder="Repeat Password" name="psw-repeat" required value={repeatPassword} onChange={({ target: { value } }) => { setRepeatPassword(value) }} />

                <div className={styles.inputField}>
                    <label><b>Sex*</b></label>
                    <div>
                        <div>
                            <input type="radio" id="male" name="sex" value="male" onChange={selectSex} checked={sex === 'male'} />
                            <label htmlFor="male">Male</label>
                        </div>

                        <div>
                            <input type="radio" id="female" name="sex" value="female" onChange={selectSex} checked={sex === 'female'} />
                            <label htmlFor="female">Female</label>
                        </div>

                        <div>
                            <input type="radio" id="other" name="sex" value="other" onChange={selectSex} checked={sex === 'other'} />
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>
                </div>

                <label htmlFor="phone-number"><b>Phone Number</b></label>
                <input id="phone-number" type="text" placeholder="Phone Number: 1234567890" name="phone-number" value={phoneNumber} onChange={({ target: { value } }) => { setPhoneNumber(value) }} />

                <label htmlFor="careerField"><b>Career Field</b></label>
                <div className={styles.inputField}>
                    <select name="careerField" id="careerField" onChange={(value) => {setCareerField(value)}}>
                        {CAREER_FIELDS.map(field=> <option key={field} value={field}>{field}</option>)}
                    </select>
                </div>

                <label htmlFor="educationlevel"><b>Education Level</b></label>
                <div className={styles.inputField}>
                    <select name="educationlevel" id="educationlevel" onChange={(value) => {setEducationLevel(value)}}>
                        {EDUCATION_LEVELS.map(level=> <option key={level} value={level}>{level}</option>)}
                    </select>
                </div>

                <label>
                    <input type="checkbox" checked={rememberMe} name="remember" onChange={() => {
                        setRememberMe(!rememberMe);
                    }} /> Remember me
                </label>

                <p>By creating an account you agree to our Terms & Privacy.</p>

                {errorMessages.length > 0 && <div className={styles.error}>
                    {errorMessages.map(msg => <div key={msg}>{msg}</div>)}
                </div>}
                <div className={styles.clearfix}>
                    <button className={styles.regularbutton} type="button" onClick={cancel}>Cancel</button>
                    <button className={styles.regularbutton} type="button" onClick={signUp}>Sign Up</button>
                </div>
            </div>
        </form>
    )
}

export default SignUp
