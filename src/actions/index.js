import {myDebugger} from '../components/common';

export const selectBook = book => {
  myDebugger('Action=>', book);
  return {
    type: 'select_book',
    payload: book,
  };
};

export const deselectBook = () => {
  return {
    type: 'deselect_book',
    payload: {},
  };
};

//export {selectBook};
