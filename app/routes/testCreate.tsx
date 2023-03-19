import { Form, useActionData } from '@remix-run/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { json, redirect } from '@remix-run/node'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'





/**
 * 
 * Next features to add to create
 *  
 * Clear form after user submits form
 * Output errors if user puts in wrong value
 * 
 */

 
export const action: ActionFunction = async ({ request }) => {
 

    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");
    let firstName = form.get("firstName");
    let lastName = form.get("lastName");

    console.log({
        email: email,
        pw: password,
        fn: firstName,
        ln: lastName
    })

    return json({   
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName 
    });


}

 

const testCreate = () => {


  const actionData = useActionData()
  const [submittedData, setSubmittedData] = useState(true)
  const [inputValues, setInputValues] = useState({

    /*
    email: actionData?.fields?.email || '',
    password: actionData?.fields?.password || '',
    firstName: actionData?.fields?.lastName || '',
    lastName: actionData?.fields?.firstName || '',
    */

    email: '',
    password: '',
    firstName: "",
    lastName: ""

})


const updateInputValue = (event: React.ChangeEvent<HTMLInputElement> , field: string) => {
    setInputValues(value => ({...inputValues, [field]: event.target.value}))
}

 
useEffect(() => {

}, [submittedData])


/*

   // Updates the form data when an input changes
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData(form => ({ ...form, [field]: event.target.value }))
    }

    useEffect(() => {
        // Clear the form if we switch forms
        if (!firstLoad.current) {
            const newState = {
                email: '',
                password: '',
                firstName: '',
                lastName: ''
            }
            setErrors(newState)
            setFormError('')
            setFormData(newState)
        }
    }, [action])




*/

 
  return (
    <div>
        
        <div className="wrapper flex flex-col  items-center gap-y-3 mt-[50px]">
            
            <h1 className=' text-3xl mb-[50px]'>
                Test creating a user with prisma
            </h1>



            <form method ="POST" className="border-2 py-[40px] px-7 wrapper text=left flex flex-col  gap-y-3">

                <h1 className='text-black-500/100 text-3xl'>
                    Register
                </h1>

                <div className="wrapper flex justify-between mt-3">
                    <label htmlFor="email">Email</label>
                    <input className='border-2 ml-3' name = {'email'} onChange = {e => updateInputValue(e, 'email')} type="text"  />
                </div>

                <div className="wrapper flex justify-between">
                    <label htmlFor="password">Password</label>
                    <input className='border-2 ml-3' name = {'password'} onChange = {e => updateInputValue(e, 'password')} type="text"  />
                </div>

                <div className="wrapper flex justify-between">
                    <label htmlFor="firstName">First Name</label>
                    <input className='border-2 ml-3' name = {'firstName'} onChange = {e => updateInputValue(e, 'firstName')} type="text"  />
                </div>

                <div className="wrapper flex justify-between">
                    <label htmlFor="lastName">Last Name</label>
                    <input className='border-2 ml-3' name = {'lastName'} onChange = {e => updateInputValue(e, 'lastName')} type="text"  />
                </div>

                <input className='mt-5 py-3 px-7 border-2 border-black-500 hover:bg-sky-500/100' type="submit" value="Submit" />

            </form>
        
        </div>

        <div className="wrapper flex flex-col items-center gap-y-3 my-[100px]">

            <div className="wrapper text-left  flex flex-col gap-y-3">
                <h1 className='text-3xl'>OUTPUT DATA</h1>
                

                {
                    /*

                 <p>Email: {inputValues.email}</p>
                <p>Password: {inputValues.password}</p>
                <p>First Name: {inputValues.firstName}</p>
                <p>Last Name: {inputValues.lastName}</p>

                    */
                }

                {
                    // must check if email exists before outputting value
                }

                <p>Email: {actionData ? actionData.email: "none"}</p>
                <p>Password: {actionData ? actionData.password: "none"}</p>
                <p>First Name: {actionData ? actionData.firstName: "none"}</p>
                <p>Last Name: {actionData ? actionData.lastName: "none"}</p>      
              

                
               
            </div>
        
        </div>
       
    </div>
  )
}

export default testCreate