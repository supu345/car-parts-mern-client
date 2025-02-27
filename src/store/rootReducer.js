import homeReducer from "./reducers/homeReducer";
import blogReducer from "./reducers/blogReducer";
import authReducer from "./reducers/authReducer";
import cardReducer from "./reducers/cardReducer";
import dashboardReducer from "./reducers/dashboardReducer";
import orderReducer from "./reducers/orderReducer";
const rootReducers = {
  home: homeReducer,
  blog: blogReducer,
  auth: authReducer,
  card: cardReducer,
  dashboard: dashboardReducer,
  order: orderReducer,
};
export default rootReducers;
