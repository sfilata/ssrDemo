import axios from 'axios';
import { CHANGE_LIST } from './constants';

const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = () => {
  return dispatch => {
    return axios.get('http://localhost:3000/api/news.json')
      .then(res => {
        const list = res.data.data;
        dispatch(changeList(list));
      })
  }
}