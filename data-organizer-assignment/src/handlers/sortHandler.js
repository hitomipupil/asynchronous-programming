import { state } from "../../data/state.js";
import { setData } from "../utils/setData.js";

export const sortHandler = async(event) => {

try {
    const type = state.sort.type;
    if(type === 'ASC'){
        state.sort.type = 'DESC';
    }else {
        state.sort.type = 'ASC';
    }
    setData();
    }
    
    catch(err) {
        console.error(err);
    }
}