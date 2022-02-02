import faker from 'faker';

const CommentDetail = props => {
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img src={faker.image.image()} alt="avatar" />
      </a>
      <div className="content">
        <a className="author" href="/">{props.author}</a>
        <div className="metadata">
          <span className="date">{(new Date()).toLocaleTimeString()}</span>
        </div>
        <div className="text">{props.commentText}</div>
      </div>
    </div>    
  );
}

export default CommentDetail;
