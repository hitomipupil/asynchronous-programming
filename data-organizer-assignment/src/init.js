import { stapiService } from "./api-calls/apiService.js";
import { renderCharacterList } from "./components/renderCharacterList.js";
import { sortListener } from "./listeners/sortListener.js";

const init = async () => {
    try {
      const charactersArray = await stapiService('');
      // console.log(charactersArray);
      renderCharacterList(charactersArray);
    } catch (error) {
      console.error(error);
    }
  };
  
  init();

  sortListener('sortBtn');