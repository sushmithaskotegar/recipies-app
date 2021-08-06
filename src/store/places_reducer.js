import { ADD_PLACE } from "./places-action";
import Place from "../Data/item";
const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(
        new Date().toString(),
        action.placeData.title,
        action.placeData.image,
        action.placeData.description
      );
      return {
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
};
