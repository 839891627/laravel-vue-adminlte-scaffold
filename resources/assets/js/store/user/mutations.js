import { GETUSERS } from './type'

export default {
  [GETUSERS] (state, { users }) {
    state.users = users
  }
}