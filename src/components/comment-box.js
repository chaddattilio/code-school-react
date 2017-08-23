import React from 'react';

import Comment from './comment';

export default class CommentBox extends React.Component {
  render() {
    return(
      <div className="comment-box">
        <h3>Comments</h3>
        <h4 className="comment-count">2 comments</h4>
        <div className="comment-list">
          <Comment author="Morgan McCircuit" body="Great picture!" />
          <Comment author="Bending Bender" body="Excellent stuff" />
        </div>
      </div>
    ) 
  }
}
