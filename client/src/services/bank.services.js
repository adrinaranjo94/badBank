import { service } from "../core/axios";

const apiRoute = "/bank";

export const bankServices = {
  getAllTransactions: () => service.get(`${apiRoute}/transactions`),
  addTransaction: (transaction) =>
    service.post(`${apiRoute}/transactions`, transaction),
  removeTransaction: (transactionId) =>
    service.delete(`${apiRoute}/transactions/${transactionId}`),
};
