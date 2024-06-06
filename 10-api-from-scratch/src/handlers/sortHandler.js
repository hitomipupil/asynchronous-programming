import { state } from "../../data/state.js";
import { setData } from "../utils/setData.js";

export const sortHandler = () => {
    if(state.sort.type === ''){
        state.sort.type = '-';
    }else{
        state.sort.type = '';
    }
    setData();
}