import styles from './start.css'

import { connect } from 'dva'

const DvaStart = ( {dispatch, num, inputVal} ) => {
  function addNum(vl) {
    dispatch({
      type: 'start/add',
      payload: vl
    })
  }
  const inputChange = (e) => {
    console.log(inputVal);
    // this.setState({
    //   value: e.target.value
    // })

    dispatch({
      type: 'start/setInput',
      payload: e.target.value
    })
  }
  return (
    <div className={styles.box}>
      <p>{inputVal}</p>
      <input type="text" value={inputVal} onChange={inputChange}/>
      <p>{num}</p>
      <button onClick={() => addNum(4)}>+</button>
    </div>
  )
}

function mapStateToProps(state) {   //该函数用来把Store中的state转换成组件的props
    return state.start;
}
// const mapDispatchToProps = {
//     dvaDelete: (id) => ({
//         type: 'dvaStart/delete',
//         payload: id
//       })
// }

export default connect(
  mapStateToProps
)(DvaStart)
