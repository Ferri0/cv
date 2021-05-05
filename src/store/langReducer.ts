const defaultState = {lang: 'en'};

type actionType = {
  type: string;
};

const SET_EN_LANG = 'SET_EN_LANG';
const SET_RU_LANG = 'SET_RU_LANG';
const SET_UA_LANG = 'SET_UA_LANG';

export const langReducer = (state = defaultState, action: actionType) => {
  switch (action.type) {
    case SET_EN_LANG:
      return {lang: 'en'};
    case SET_RU_LANG:
      return {lang: 'ru'};
    case SET_UA_LANG:
      return {lang: 'ua'};
    default:
      return state;
  }
};

export const setEnLangAction = () => ({type: SET_EN_LANG});
export const setRuLangAction = () => ({type: SET_RU_LANG});
export const setUaLangAction = () => ({type: SET_UA_LANG});
