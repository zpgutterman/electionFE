export class PrimaryDem {
  constructor(
    public id: number,
    public name: string,
    public lastTradePrice: number,
    public bestBuyNoCost: number,
    public lastClosePrice: number,
    public bestSellYesCost: number,
    public image: string,
    public updateAt?: Date,

  ) { }


}
