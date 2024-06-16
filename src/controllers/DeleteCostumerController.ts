import { DeleteCostumerService } from "../services/DeleteCostumerService";
import { FastifyRequest, FastifyReply } from "fastify";

class DeleteCostumerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const customerService = new DeleteCostumerService();

    const customer = await customerService.execute({ id });

    reply.send(customer);
  }
}

export { DeleteCostumerController };
