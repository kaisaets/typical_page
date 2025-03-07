import './Login.css'

import Card from '../UI/Card'
import Button from '../UI/Button'
import { useEffect, useState } from 'react'

const Login = (props) =>{
    const [enteredEmail, setEnteredEmail] = useState ('')
    const[enteredPassword, setEnteredPassword] = useState('')
    const[emailIsValid, setEmailIsValid] = useState()
    const[passwordIsValid, setPasswordIsValid] = useState()  
    const[formIsValid, setFormIsValid] = useState(false)


    useEffect(() => {
        const timeOut = setTimeout(() => {
            console.log('Check if form is valid')
            setFormIsValid(emailIsValid && passwordIsValid)
            console.log('checked')
        }, 500)
    return () =>{
        clearTimeout(timeOut)
    } 
    })

    const emailChangeHandler = (event) =>{
        setEnteredEmail(event.target.value)
    } 

    const passwordChangeHandler = (event) =>{
        setEnteredPassword(event.target.value)
    } 

    const emailValidateHandler = () =>{
        setEmailIsValid(enteredEmail.includes('@'))
    } 
    const passwordValidateHandler = () =>{
        setPasswordIsValid(enteredPassword.trim().length > 6)
    } 

    const submitHandler = (event) =>{
        event.preventDefault()
        props.onLogin(enteredEmail, enteredPassword)
    } 

    return (
        <Card className='login'>
            <form onSubmit={submitHandler}>
                <div className={`control ${emailIsValid === false ? 'invalid' : ''}`}>
                     <label for='email'>Email</label>
                    <input type='email' id='email' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailValidateHandler}></input>
                </div>
               <div className={`control ${passwordIsValid === false ? 'invalid' : '' }`}>
                    <label for='password'>Password</label>
                    <input type='password' id='password' value={enteredPassword} onChange={passwordChangeHandler} onBlur={passwordValidateHandler}></input>
               </div>
               <div className='actions'>
                    <Button type='submit' disabled ={!formIsValid} >
                        Log in
                    </Button>
               </div>
            </form>
        </Card>
    )
} 

export default Login