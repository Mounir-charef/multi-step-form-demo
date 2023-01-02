import useMultiStepForm from "./hooks/useMultiStepForm";
import UserForm from "./Pages/UserForm";
import AccountForm from "./Pages/AccountForm";
import AddressForm from "./Pages/AddressForm";
import {FormEvent, useState} from "react";

type FormData = {
    firstName: string,
    lastName: string,
    age: string,
    street: string,
    city: string,
    state: string,
    zip: string,
    email: string,
    password: string
}

const INITIAL_DATA: FormData = {
    firstName: '',
    lastName: '',
    age: '',
    street: '',
    city: '',
    state: "",
    zip: '',
    email: '',
    password: ''
}

function App() {

    const [data, setData] = useState(INITIAL_DATA)
    function updateFields(fields: Partial<FormData>) {
        setData(prevState => {
            return {...prevState, ...fields}
        })
    }

    const {
        steps, currentStepIndex, step, isFirstStep, isLastStep, next, back, goTo
    } = useMultiStepForm([
        <UserForm {...data} updateFields={updateFields}/>,
        <AccountForm {...data} updateFields={updateFields}/>,
        <AddressForm {...data} updateFields={updateFields}/>]);

    function submitHandel(e: FormEvent){
        e.preventDefault()
        if (!isLastStep) next()
        else alert('Successful submit')
    }

    return (
    <div className="App" style={{position: 'relative', background: 'white', border: '1px solid black', padding: '2rem', margin: '1rem', borderRadius: '.5rem', fontFamily: 'Arial', maxWidth: 'max-content', marginInline: 'auto'}}>
        <form onSubmit={submitHandel}>
            <div style={{position: 'absolute', top: '.5rem', right:'.5rem'}}>
                {currentStepIndex + 1} / {steps.length}
            </div>
            {step}
            <div style={{
                marginTop: '1rem',
                display: 'flex',
                grid: '.5rem',
                justifyContent: 'flex-end',
            }}>
                {!isFirstStep && (
                    <button onClick={back} type='button'>
                        Back
                    </button>
                )}
                <button type='submit'>
                    {isLastStep ? 'Finish' : 'next'}
                </button>
            </div>
        </form>
    </div>
  )
}

export default App
