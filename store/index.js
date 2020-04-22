import cookieparser from 'cookieparser'
import Cookie from 'js-cookie'

export const state = () => {
  return {
    auth: null
  }
}
export const mutations = {
  setAuth (state, auth) {
    state.auth = auth
  }
}
export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setAuth', auth)
  },
  login ({ commit }, user) {
    console.log(user)
    const auth = {
      accessToken: 'someStringGotFromApiServiceWithAjax'
    }
    if (auth) {
      commit('setAuth', auth) // mutating to store for client rendering
      Cookie.set('auth', auth) // saving token in cookie for server rendering
    } else {
      throw new AuthExceptions(400, 'Bad request')
    }
  },
  logout ({ commit }) {
    Cookie.remove('auth')
    commit('setAuth', null)
  }
}

function AuthExceptions (status, message) {
  return {
    status,
    message
  }
}
