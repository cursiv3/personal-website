import * as actions from "../actions/actionTypes";

const INIT = {
  about: false,
  portfolio: false,
  music: false,
  resume: false,
  contact: false
};

const navButtonReducer = (state = INIT, action) => {
  switch (action.type) {
    case actions.ACTIVATE_ABOUT:
      return [...state, { about: true }];
    case actions.ACTIVATE_PORTFOLIO:
      return [...state, { portfolio: true }];
    case actions.ACTIVATE_MUSIC:
      return [...state, { music: true }];
    case actions.ACTIVATE_RESUME:
      return [...state, { resume: true }];
    case actions.ACTIVATE_CONTACT:
      return [...state, { contact: true }];
  }
};
