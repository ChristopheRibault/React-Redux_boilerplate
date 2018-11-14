import { MY_ACTION_TYPE1, MY_ACTION_TYPE2 } from './types';

export const myAction1 = () => (dispatch) => {
  dispatch({
    type: MY_ACTION_TYPE1,
    property: value,
  });
};

export const myAction2 = () => (dispatch) => {
  dispatch({
    type: MY_ACTION_TYPE2,
    property: value,
  });
};
