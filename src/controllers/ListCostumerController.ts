import { ListCostumerService } from "../services/ListCostumerService";
import { FastifyRequest, FastifyReply } from "fastify";

class ListCostumerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCostumerService = new ListCostumerService();

    const customers = await listCostumerService.execute();

    reply.send(customers);
  }
}

export { ListCostumerController };
