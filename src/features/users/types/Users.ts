import User from "./User";

export default interface IUsers {
    data: User[],
    isLoading: boolean,
    error: null | string
}