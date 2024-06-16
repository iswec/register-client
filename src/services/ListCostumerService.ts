import prismaClient from "../prisma";

class ListCostumerService {
  async execute() {
    const customers = await prismaClient.customer.findMany();

    return customers;
  }
}

export { ListCostumerService };
