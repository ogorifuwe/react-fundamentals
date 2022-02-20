import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map(stream => {
      const { id, title, description } = stream;
      return (
        <div className="item" key={id}>
          {this.renderAdminPrivileges(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {title}
            <div className="description">{description}</div>
          </div>
        </div>
      );
    })
  }

  renderAdminPrivileges(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link
            className="ui button primary"
            to={`/streams/edit/${stream.id}`}
          >
            Edit
          </Link>
          <Link
            className="ui button negative"
            to={`/streams/delete/${stream.id}`}
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link className="ui button primary" to="/streams/new">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render () {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
          {this.renderCreate()}
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId, 
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(
  mapStateToProps, { fetchStreams })
(StreamList);
