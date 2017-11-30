/**
 * Created by dell on 2017/3/16.
 */
export const incrementCounter = ({ commit, state }) =>{
  commit('INCREMENT', 10)
}

export const Counter = ({ commit, state }) =>{
  commit('DRECREMENT', 5)
}

export const increment=({ commit }) => {
  commit('increment')
}

export   const decrement= ({ commit }) => {
  commit('decrement')
}
