import { Payments } from "../domain/Payments";
import { PaymentsRepository } from "../domain/PaymentsRepository";
import amqp from "amqplib";

export class ResponseRepository implements PaymentsRepository {
  async noticationPayments(pay: Payments): Promise<Payments | null> {
    const options = {
      username: 'Gaboneil',
      password: 'LGSC06042004',
    };
    const url: string | any = 'amqp://52.21.114.121';
   try {
    const conn = await amqp.connect(url, options);
    const ch = await conn.createChannel();
    const status = ch.publish(
      "upchiapas.int",
      "esp32",
      Buffer.from(JSON.stringify(pay))
    );

    
    if (status) {
      return pay;
    } else {
      return null;
    }
   } catch (error) {
    console.log(error);
    
    return null;
   }
  }
}