import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button, Alert } from 'reactstrap'
import axios from 'axios'
import '../../css/Contact.css'

const Contact = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
    status: null
  })

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async e => {
    e.preventDefault()

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const formData = {
      name: state.name,
      email: state.email,
      message: state.message
    }

    const res = await axios.post('http://localhost:5000/api/form', formData, config)

    if(res.status === 200)
      setState({
        ...state,
        name: '',
        email: '',
        message: '',
        status: 200
      })
  }

  return (
    <div className="contact-grid">
      <div className="contact-page-title">
        <h1>Contact Me</h1>
      </div>

      <div className="contact-page-description">
        <p>
          If you have any questions over the content of the website feel free
          to contact me! I will answer any questions as soon as I can.
        </p>
        <br/>
        <p>
          Also, if there are any mistakes such as: errors in the code, grammatical
          errors in the text or errors loading content through links or images,
          let me know.
        </p>
      </div>

      <div className="container">
        <div className="wrapper animated bounceInLeft">

          <div className="personal-info">
            <h3>My Info</h3>
            <ul>
              <li>
                <p>Name: </p>
                Cameron Shatto
              </li>
              <li>
                <p>Email: </p>
                ExploringDataStructures@gmail.com
              </li>
            </ul>
          </div>
          <div className="contact">
            <Form onSubmit={e => onSubmit(e)}>
              <FormGroup className="form-group">
                <Label for="name">Name:</Label>
                <Input
                  type="text"
                  name="name"
                  value={state.name}
                  onChange={e => onChange(e)} required/>
              </FormGroup>

              <FormGroup className="form-group">
                <Label for="email">Email:</Label>
                <Input
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={e => onChange(e)} required/>
              </FormGroup>

              <FormGroup className="full">
                <Label for="message">Message:</Label>
                <Input
                  type="textarea"
                  name="message"
                  value={state.message}
                  onChange={e => onChange(e)} required/>
              </FormGroup>

              {state.status === 200 && <Alert className="full" color="success">Email sent!</Alert>}
              <Button className="full">Send Email</Button>
            </Form>
          </div>
        </div>
      </div>

      <div className="contact-page-hr">
        <hr/>
      </div>

    </div>
  )
}

export default Contact
