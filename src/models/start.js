import key from 'keymaster'
import { delay } from '../utils/utils'
export default {
  namespace: 'start',
  state: {
    num: 100,
    inputVal: '',
    atte: 'undefined',
    das: [
      {id: 1},{id: 2},{id: 3}
    ]
  },
  reducers: {
    addNum(state, {payload: id}) {
      let atte = state.num + 1
      return {
        ...state,
        num: atte
      }
    },
    minusNum(state, {payload: id}) {
      return {
        ...state,
        num: state.num - 1
      }
    },
    setInput(state, {payload: val} ) {
      return {
        ...state,
        inputVal: val
      }
    }
  },
  effects: {
    *add(action, { call, put}) {
      // put 触发reducers，改变state
      // call 调用某个方法
      yield put({type: 'addNum'})
      yield call(delay, 1000)
      yield put({type: 'minusNum'})
    }
  },
  subscriptions: {
  keyboardWatcher({ dispatch }) {
    key('⌘+up, ctrl+up, up', () => { dispatch({type:'add'}) });
   }
  }
}
