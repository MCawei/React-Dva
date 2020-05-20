export default {
  // 每个Model 唯一的Key, model 外提交action 需添加 key 例如 example/add
  namespace: 'counts',
  // 数据初始化
  state: {
    counts: 0
  },
  // 监听
  subscriptions: {},
// 纯函树更新状态,触发视图更新
  reducers: {
    add(state, { payload: num }) {
      let newCurrent = state + 1
      return newCurrent
    },
    minus(state, { payload: num }) {
      return state - 1
    }
  },
  // 不是纯函数,如提交的异步action 走这里
  effects: {
    * asyncName({ ars }, { call, put, select }) {
      // 执行异步操作;
      yield call()
      // Get state
      // yield select(({ counts }))
      // 提交action
      yield put({ type: 'add' })
    }
  }
}
