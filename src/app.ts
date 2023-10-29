import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionRoutes } from './routes/transactions'
import { logging } from './middlewares/logging'

export const app = fastify()

app.register(cookie)

app.addHook('onResponse', logging)

app.register(transactionRoutes, {
  prefix: '/transactions',
})
