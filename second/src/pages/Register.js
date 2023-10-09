import { TextField, Button } from '@mui/material'
import axios from 'axios'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'

const registerValidation = yup.object({
    name : yup.string().required('Name is Required').min(3, 'Name is too short!'),
    surname : yup.string().required('Surname is Required').max(20, 'Surname is too Long!'),
    username : yup.string().required('Username is Required'),
    password: yup.string().required('Password is Required')
})

function Register() {

    const handleRegister = (values) => {
        //axios.post('sadasas',values)
    }


    return (
        <div className='loginContainer'>
            <Formik
                initialValues={{ name: "", surname: "", username: "", password: "" }}
                onSubmit={(values) => handleRegister(values)}
                validationSchema={registerValidation}
            >
                {({ values, handleChange, handleBlur, errors, touched }) => (
                    <Form style={{display:'flex', flexDirection: 'column'}}>
                        <TextField id="name"
                            name='name'
                            label="Name"
                            variant="outlined"
                            sx={{ my: 2 }}
                            onChange={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                        />
                        <TextField id="surname"
                            label="Surname"
                            variant="outlined"
                            sx={{ my: 2 }}
                            onChange={handleChange('surname')}
                            onBlur={handleBlur('surname')}
                            value={values.surname}
                            error={touched.surname && Boolean(errors.surname)}
                            helperText={touched.surname && errors.surname}
                        />
                        <TextField id="username"
                            label="Username"
                            variant="outlined"
                            sx={{ my: 2 }}
                            onChange={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                            error={touched.username && Boolean(errors.username)}
                            helperText={touched.username && errors.username}
                        />

                        <TextField id="password"
                            label="Password"
                            variant="outlined"
                            sx={{ my: 2 }}
                            onChange={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            type='password'
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                        />
                        <Button variant="outlined" color="success" sx={{ mx: 5 }} type='submit' >
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Register

//name, surname, username, password