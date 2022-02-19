import { combineReducers } from 'redux';
import authReducer from './auth.reducers';
import userReducer from './user.reducers';
import productReducer from './product.reducers';
import categoryReducer from './category.reducers';
import orderReducer from './order.reducers';
import userRegistration from './userRegistration.reducer';
import userAuth from './userAuth.reducer';
import properties from './properties';
import posts from './posts';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
  product: productReducer,
  order: orderReducer,
  userRegistration,
  userAuth,
  properties,
  posts,
});

export default rootReducer;
