
function CommentDetail(props) {
  console.log(props.location.query.beId);
  let bId = props.location.query.beId

  return (
    <div className='comment-detail'>comment-detail--{bId}</div>
  )
}
export default CommentDetail;
