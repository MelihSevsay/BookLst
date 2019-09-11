import {myDebugger} from '../components/common';

export default (state = {}, actions) => {
  myDebugger('Reducer>State=>', state);
  myDebugger('Reducer>actoin=>', actions);

  switch (actions.type) {
    case 'select_book':
      return actions.payload;
    case 'deselect_book':
      return {};
    default:
      return state;
  }
};
