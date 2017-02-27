import { GETUSERS } from './type'
import axios from 'axios'

export default {
  getUsers ({ commit }) {
    return axios.get('http://vue-lara.com/api/user').then((response) => {
      let users = response.data
      commit(GETUSERS, { users })
    })
  }
}