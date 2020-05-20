export default {
  namespace: 'products',
  state: {
    attr: 'www',
  },
  reducers: {
    delete(state, {payload: id}) {
      return state.filter(item => item.id !== id)
    }
  }
}
