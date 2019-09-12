import {myDebugger} from '../components/common';
import {SELECT_BOOK, DESELECT_BOOK} from '../contracts/globalDefaults';

export default (state = {}, actions) => {
  myDebugger('Reducer>State=>', state);
  myDebugger('Reducer>actoin=>', actions);

  switch (actions.type) {
    case SELECT_BOOK:
      return actions.payload;
    case DESELECT_BOOK:
      return {};
    default:
      return state;
  }
};
