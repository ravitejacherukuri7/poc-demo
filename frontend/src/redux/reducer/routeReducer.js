import {
  ROUTE_FAIL,
  ROUTE_LOADING,
  ROUTE_SUCCESS,
  SORT_ARRIVAL_HOUR,
  SORT_SENDING_HOUR,
} from "../action/RouteAction";

const initialState = {
  loading: false,
  faile: false,
  items: [],
};

const RouteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROUTE_LOADING:
      return {
        ...state,
        faile: false,
        loading: true,
      };

    case ROUTE_FAIL:
      return {
        ...state,
        loading: false,
        faile: true,
      };

    case ROUTE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case SORT_ARRIVAL_HOUR:
      return {
        ...state,
        items: state.items.sort((a, b) => a.arrivalHour - b.arrivalHour),
      };
    case SORT_SENDING_HOUR:
      return {
        ...state,
        items: state.items.sort((a, b) => a.sendingTime - b.sendingTime),
      };

    default:
      return state;
  }
};

export default RouteReducer;
