import Meme from "./Meme";

export default interface MemesState {
    memes: Meme[],
    isLoading: boolean,
    error: null | string,
}
