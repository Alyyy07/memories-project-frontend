import {CREATE, DELETE, FETCH_ALL, UPDATE} from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((data) => (data._id === action.payload._id ? action.payload : data));
      case DELETE:
        return posts.filter(post => post._id !== action.payload);
    default:
      return posts;
  }
};
