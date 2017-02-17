export default function (state = null, action) {
  switch (action.type) {
    case 'SELECTED CATEGORY':
      return action.categoryName;
      break;
    default:
      return state = null;
  }
  return state;
}
