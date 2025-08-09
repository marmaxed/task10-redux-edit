import { ADD_SERVICE, REMOVE_SERVICE } from '../actions/actionTypes';
import { nanoid } from 'nanoid';

const initialState = [];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE: {
      const { id, name, price } = action.payload;
      if (id) {
        return state.map(service =>
          service.id === id ? { ...service, name, price: Number(price) } : service
        );
      }
      return [...state, { id: nanoid(), name, price: Number(price) }];
    }
    case REMOVE_SERVICE:
      return state.filter(service => service.id !== action.payload.id);
    default:
      return state;
  }
}
