import { CHANGE_SERVICE_FIELD, EDIT_SERVICE, CANCEL_EDIT, ADD_SERVICE } from '../actions/actionTypes';

const initialState = {
  name: '',
  price: '',
  id: null,
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case EDIT_SERVICE:
      return { ...action.payload };
    case CANCEL_EDIT:
    case ADD_SERVICE:
      return initialState;
    default:
      return state;
  }
}
