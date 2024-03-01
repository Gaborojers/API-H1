export class Payments {
    constructor(
      readonly idPay: number,
      readonly product: string,
      readonly date: string,
      readonly price: number
    ) {}
  }