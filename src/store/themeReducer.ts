const defaultState = {theme: 'dark'};

type actionType = {
  type: string;
};

const SWITCH_THEME = 'SWITCH_THEME';

export const themeReducer = (state = defaultState, action: actionType) => {
  switch (action.type) {
    case SWITCH_THEME:
      return state.theme === 'dark' ? {theme: 'light'} : {theme: 'dark'};
    default:
      return state;
  }
};

export const switchThemeAction = () => ({type: SWITCH_THEME});
