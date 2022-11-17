import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddProduct, DeleteProduct } from "./magasin-action";
import { MagasinStateModel } from "./magasin-state-model";

@State<MagasinStateModel>({
    name: 'products',
    defaults: {
        products: [],
    },
})

@Injectable()
export class MagasinState {
    @Selector()
    static getNbProducts(state: MagasinStateModel) {
        return state.products.length;
    }

    @Selector()
    static getListProducts(state: MagasinStateModel) {
        return state.products;
    }

    @Selector()
    static getTotalPrice(state: MagasinStateModel) {
        return state.products.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2);
    }

    @Action(AddProduct)
    add(
        { getState, patchState }: StateContext<MagasinStateModel>,
        { payload }: AddProduct
    ) {
        const state = getState();
        patchState({
            products: [...state.products, payload]
        });
    }

    @Action(DeleteProduct)
    delete(
        { getState, patchState }: StateContext<MagasinStateModel>,
        { payload }: DeleteProduct
    ) {
        const state = getState();
        patchState({
            products: state.products.filter(
                (x) => !(payload.name == x.name)
              ),
        });
    }
}