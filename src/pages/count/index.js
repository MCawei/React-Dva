import { connect } from 'dva'

const Counter = (props) => {
  console.log(props);
  const { dispatch, counts } = props
  function addCount(num) {
    dispatch({
      type: 'counts/add',
      payload: num
    })
  }
  function minusCount(num) {
    dispatch({
      type: 'counts/minus',
      payload: num
    })
  }
  return (
    <div className='g2'>
      <div className='gdp2'>
        {counts}
      </div>

      <div className='gdp2'>
        <button onClick={() => addCount(counts)}>+</button>
        <button onClick={() => minusCount(counts)}>-</button>
      </div>
    </div>
  )
}

export default connect(({ counts }) => ({
  counts
}))(Counter)
