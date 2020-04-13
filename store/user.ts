interface UserState {
  token:String
}

export const state = () => ({
  token: 'test'
})

export const mutations = {
  setToken (state:UserState, value:String) {
    state.token = value
  }
}
