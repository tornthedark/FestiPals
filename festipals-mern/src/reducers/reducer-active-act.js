export default function(state = null, action) {
  switch(action.type) {
    case "ACT_SELECTED":
      return action.data;
      break;
  }

  return state;
};
