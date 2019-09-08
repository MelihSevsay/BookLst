export default (state = {}, actions) => {
  switch (actions) {
    case 'select_book':
      return actions.payload;
    case 'deselect_book':
      return {};
    default:
      return state;
  }
};
