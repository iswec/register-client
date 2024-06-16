import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCostumerController } from "./controllers/ListCostumerController";
import { DeleteCostumerController } from "./controllers/DeleteCostumerController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get(
    "/teste",
    async (resquest: FastifyRequest, reply: FastifyReply) => {
      return { ok: true };
    }
  );

  fastify.post(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply);
    }
  );

  fastify.get(
    "/customers",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCostumerController().handle(request, reply);
    }
  );

  fastify.delete(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCostumerController().handle(request, reply);
    }
  );
}
