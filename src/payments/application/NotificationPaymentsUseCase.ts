import { Payments } from "../domain/Payments";
import { PaymentsRepository } from "../domain/PaymentsRepository";
import { INotificationService } from "./services/INotificationService";

export class NotificationPaymentUseCase {
  constructor(
    readonly pyment: PaymentsRepository,
    readonly paymes: INotificationService
  ) {}

  async run(
    idPay: number,
    product: string,
    date: string,
    price: number
  ): Promise<Payments | null> {
    const pay = new Payments(idPay, product, date, price);
    try {
      const payN = await this.pyment.noticationPayments(pay);
      await this.paymes.sendMessage(pay);
      return payN;
    } catch (error) {
      return null;
    }
  }
}