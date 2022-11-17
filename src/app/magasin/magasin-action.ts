import { Product } from "../Class/product";

export class AddProduct {
  static readonly type = '[Product] Add';

  constructor(public payload: Product) { }
}

export class DeleteProduct {
  static readonly type = '[Product] Delete';

  constructor(public payload: Product) { }
}

export class GetProduct {
  static readonly type = '[Product] Get';

  constructor(public payload: Product) { }
}