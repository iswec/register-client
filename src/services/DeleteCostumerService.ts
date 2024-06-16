import prismaClient from "../prisma";

interface DeleteCostumerProps {
  id: string;
}

class DeleteCostumerService {
  async execute({ id }: DeleteCostumerProps) {
    if (!id) {
      throw new Error("Solicitação negada");
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error("Cliente não existe");
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id,
      },
    });

    return { message: "Deletado com sucesso" };
  }
}

export { DeleteCostumerService };
