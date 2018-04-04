import { Router } from 'express'

import mailer from '../../utils/mail'

const R = Router()

R.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body
  try {
    mailer.sendMail({
      encoding: 'utf-8',
      to: 'douglas.expalves@gmail.com',
      from: email,
      template: 'contact_email',
      context: { name, subject, message, date: Date.now().toString() }        
    }, (err) => {
      if (err) throw new Error(err.message)
      return res
        .status(200)
        .send({ data: [] , status: 200, errors: [] })
    })
  } catch (err) {
    return res
      .status(500)
      .send({ data: [], status: 500, errors: [ ...err ] })
  }
})

export default R
