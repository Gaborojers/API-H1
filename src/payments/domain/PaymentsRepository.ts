import { Payments } from "./Payments";
export interface PaymentsRepository {
  noticationPayments(pay: Payments): Promise<Payments | null>;
}
