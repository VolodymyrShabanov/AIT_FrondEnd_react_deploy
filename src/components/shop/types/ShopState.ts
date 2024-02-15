import IShopItem from "./ShopItem";

export default interface IShopState {
    products: IShopItem[],
    isLoading: boolean,
    error: null | string,
}