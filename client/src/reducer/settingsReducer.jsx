export const settingsReducer = (state, action) => {
  switch (action.type) {
    case types.EDIT_BG:
      return { ...state, backgroundColor: action.payload };
    case types.EDIT_COLOR_PRIMARY:
      return { ...state, primaryColor: action.payload };
    case types.EDIT_COLOR_SECONDARY:
      return { ...state, secondaryColor: action.payload };
    case types.EDIT_FONTCOLOR:
      return { ...state, fontColor: action.payload };
    case types.EDIT_LEFTBAR_BG:
      return { ...state, leftBarBackgroundColor: action.payload };
    case types.LOAD_FROM_LS:
      return { ...action.payload };
    case types.RESET:
      return { ...initialValues };

    default:
      return state;
  }
};

export const types = {
  EDIT_BG: "backgroundColor",
  EDIT_COLOR_PRIMARY: "primaryColor",
  EDIT_COLOR_SECONDARY: "secondaryColor",
  EDIT_FONTCOLOR: "fontColor",
  EDIT_LEFTBAR_BG: "leftBarBackgroundColor",
  RESET: "RESET",
  LOAD_FROM_LS: "LOAD_FROM_LS",
};

export const initialValues = {
  backgroundColor: "rgb(44,44,44)",
  leftBarBackgroundColor: "rgb(70,70,70)",
  primaryColor: "rgb(239,131,171)",
  secondaryColor: "rgb(73,43,55)",
  fontColor: "#fff",
  currency: "",
};
