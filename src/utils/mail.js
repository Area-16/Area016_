import { createTransport } from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import { resolve } from 'path'

import { getEnv } from '../config/env'

const env = getEnv()

const transport = createTransport({
	host: process.env.MAILER_HOST,
	port: process.env.MAILER_PORT,
	auth: {
		user: process.env.MAILER_USER,
		pass: process.env.MAILER_PASS
	}
})

transport.use('compile', hbs({
	viewEngine: 'handlebars',
	viewPath: resolve('./mail'),
	extName: '.html'
}))

export default transport
