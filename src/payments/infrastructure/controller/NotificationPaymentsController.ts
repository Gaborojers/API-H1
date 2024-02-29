import { Request, Response } from "express";
import { NotificationPaymentUseCase } from "../../application/NotificationPaymentsUseCase";


export class NotificationController{
  constructor(readonly payload: NotificationPaymentUseCase) {}
  async run(req: Request, res: Response) {
    const data = req.body;
   
    try {
      const payload = await this.payload.run(
        data.idPay,
        data.product,
        data.date,
        data.price
      );
      console.log(req.body)
      if (payload) {
        
        res.status(200).send(payload);
      } else {
        res.status(204).send("No se pudo realizar el pago");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}