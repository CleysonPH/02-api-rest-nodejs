import { FastifyRequest, FastifyReply } from 'fastify'

export async function logging(request: FastifyRequest, reply: FastifyReply) {
  console.log(`${request.method} ${request.url} ${reply.statusCode}`)
}
