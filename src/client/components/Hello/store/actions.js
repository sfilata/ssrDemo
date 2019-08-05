import axios from 'axios';
import { CHANGE_LIST } from './constants';

const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = () => {
  return dispatch => {
    return axios.get('/api/news.json')
      .then(res => {
        const list = res.data.data;
        console.log('neil-log', list);
        dispatch(changeList(list));
      })
  }
}