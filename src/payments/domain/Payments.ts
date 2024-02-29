export class Payments {
    constructor(
      readonly idPay: number,
      readonly product: string,
      readonly date: Date,
      readonly price: number
    ) {}
  }