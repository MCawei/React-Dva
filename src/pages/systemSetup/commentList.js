import React, { useState, useEffect } from 'react';

import { Comment, Tooltip, List, Icon } from 'antd';
import moment from 'moment';

function CommentList(props) {
  const [state, setState] = useState({
    likes: 0,
    dislikes: 0,
    action: null,
  })

  // useEffect会在每次 DOM 渲染后执行，不会阻塞页面渲染。它同时具备componentDidMount、componentDidUpdate和componentWillUnmount三个生命周期函数的执行时机

  useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }

  //   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  //
  // 返回一个函数来进行额外的清理工作:
    //  当useEffect的返回值是一个函数的时候，React 会在下一次执行这个副作用之前执行一遍清理工作

  //   return function cleanup() {
  //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  //   };


    // 在 state 或 props 改变的情况下才执行,使用 Hook 的时候，我们只需要传入第二个参数：第二个参数是一个数组，可以传多个值
  }, [state]); // 只有在 state 改变的时候才执行 Effect;

  const data = [
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
        </p>
      ),
      datetime: (
        <Tooltip
          title={moment()
            .subtract(1, 'days')
            .format('YYYY-MM-DD HH:mm:ss')}
        >
        <span>
          {moment()
            .subtract(1, 'days')
            .fromNow()}
        </span>
        </Tooltip>
      ),
    },
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: 'Han Solo12',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
        </p>
      ),
      datetime: (
        <Tooltip
          title={moment()
            .subtract(2, 'days')
            .format('YYYY-MM-DD HH:mm:ss')}
        >
        <span>
          {moment()
            .subtract(2, 'days')
            .fromNow()}
        </span>
        </Tooltip>
      ),
    },
  ];

  function like(e) {
    e.stopPropagation();

    setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    })
  };

  function dislike (e) {
    e.stopPropagation();

    setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  };

  function commentLink(queryId) {
      props.data.history.push({ pathname: '/systemSetup/commentDetaill', query: { beId: queryId }} )
  }

  const actions = [
    <span key="comment-basic-like">
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={state.action === 'liked' ? 'filled' : 'outlined'}
            onClick={like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{state.likes}</span>
      </span>,
    <span key=' key="comment-basic-dislike"'>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={state.action === 'disliked' ? 'filled' : 'outlined'}
            onClick={dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{state.dislikes}</span>
      </span>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <List
      className="comment-list"
      header={`${data.length} replies`}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <li className='commentLi' onClick={()=>commentLink(item.author)}>
          <Comment
            actions={actions}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
        </li>
      )}
    />
  );
}

export default CommentList;
