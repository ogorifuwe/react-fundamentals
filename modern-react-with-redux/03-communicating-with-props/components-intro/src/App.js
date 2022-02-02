import React from 'react';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Scott"
          commentText="Nice blog post!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          commentText="Awesome read!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Joe"
          commentText="Informational ..."
        />
      </ApprovalCard>
    </div>
  )
}

export default App;
