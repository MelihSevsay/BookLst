import {myDebugger} from '../components/common';
import {SELECT_BOOK, DESELECT_BOOK} from '../contracts/globalDefaults';

export const selectBook = book => {
  myDebugger('Action=>', book);
  return {
    type: SELECT_BOOK,
    payload: book,
  };
};

export const deselectBook = () => {
  return {
    type: DESELECT_BOOK,
    payload: {},
  };
};

//export {selectBook};
