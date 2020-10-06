export const listReducer = (list = [], action) => {
  switch (action.type) {
    case "add":
      return [action.payload, ...list];

    case "delete":
      return list.filter((item) => item.id !== action.payload);

    case "check":
      return list.map((item) =>
        item.id === action.payload ? { ...item, checked: !item.checked } : item
      );

    default:
      break;
  }

  return list;
};
