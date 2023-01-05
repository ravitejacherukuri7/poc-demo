export const ROUTE_LOADING = "ROUTE_LOADING";
export const ROUTE_FAIL = "ROUTE_FAIL";
export const ROUTE_SUCCESS = "ROUTE_SUCCESS";
export const REQUEST_ROUTE = "REQUEST_ROUTE";
export const SORT_SENDING_HOUR = "SORT_SENDING_HOUR";
export const SORT_ARRIVAL_HOUR = "SORT_ARRIVAL_HOUR";
export const POST_ROUTE = "POST_ROUTE";

export const routeLoadingAC = () => ({ type: ROUTE_LOADING });
export const routeFailAC = () => ({ type: ROUTE_FAIL });
export const routeSuccessAC = (payload) => ({
  type: ROUTE_SUCCESS,
  payload,
});
export const routePostAC = (payload) => ({ type: POST_ROUTE, payload });
export const itemsRequestAC = () => ({ type: REQUEST_ROUTE });
export const itemsSortSendingAC = () => ({ type: SORT_SENDING_HOUR });
export const itemsSortArrivalAC = () => ({ type: SORT_ARRIVAL_HOUR });
