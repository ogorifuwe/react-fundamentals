import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';

import { fetchStream } from '../../actions';

class StreamShow extends Component {
  constructor(props) {
    super(props);

    this.videoRef = createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);

    this.buildPlayer(id);
  }

  componentDidUpdate() {
    this.buildPlayer(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer(streamId) {
    if (this.player || !this.props.stream) {
      return;
    }

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${streamId}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video
          ref={this.videoRef}
          controls={true}
          style={{ width: '100%' }}
        />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps, { fetchStream }
)(StreamShow);
