import React from 'react'
import { Input, TextField, Button, FormControl } from '@mui/material'
import styled, { css } from 'styled-components'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const SiteWrapper = styled('div')(
  css`
    display: flex;
    justify-content: center;
    align-items: center;
  `
)
const FormWrapper = styled(Form)(
  css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    border: 1px solid black;
    padding: 50px;
  `
)

const userSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Za krótko').required('To pole jest wymagane'),
  lastName: Yup.number().required('To pole jest wymagane'),
  email: Yup.string().email().required('To pole jest wymagane'),
})

const Home = () => {
  const handleOnSubmit = (values) => console.log(values)

  return (
    <SiteWrapper>
      <Formik
        initialValues={{ name: '', lastName: '', email: '', about: '' }}
        onSubmit={handleOnSubmit}
        validationSchema={userSchema}
      >
        {({ handleChange }) => {
          return (
            <FormWrapper>
              <Input name='name' placeholder='Name' onChange={handleChange} />
              <ErrorMessage name='name' />
              <Input
                name='lastName'
                placeholder='LastName'
                onChange={handleChange}
              />
              <ErrorMessage name='lastName' />
              <Input name='email' placeholder='Email' onChange={handleChange} />
              <ErrorMessage name='email' />
              <TextField name='about' placeholder='About' />
              <Button type='submit'>Wyślij</Button>
            </FormWrapper>
          )
        }}
      </Formik>
    </SiteWrapper>
  )
}

export default Home
