require('dotenv').config()
const express = require('express')
const path = require('path')
const nodemailer = require('nodemailer')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.post('/api/form', async (req, res) => {
  const htmlEmail = `
    <h3>Contact Details</h3>
    <p>Name: ${req.body.name}</p>
    <p>Email: ${req.body.email}</p>
    <h3>Message</h3>
    <p>
      ${req.body.message}
    </p>
  `

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD
      }
    })

    let info = await transporter.sendMail({
      from: req.body.email,
      to: process.env.USER_EMAIL,
      subject: 'New Contact Message',
      text: req.body.message,
      html: htmlEmail
    })

    console.log('Message sent: %s', info.messageId)
    console.log('Message URL %s', nodemailer.getTestMessageUrl(info))

    res.send('Success')
  } catch(err) {
    console.log(err.message)
    res.status(500).send('Error sending email')
  }
})

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`))
