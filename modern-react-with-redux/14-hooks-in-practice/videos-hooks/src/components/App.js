import { useState, useEffect } from 'react';
import useVideos from '../hooks/useVideos';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
  const [ videos, search ] = useVideos('buildings');
  const [ selectedVideo, setSelectedVideo ] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
      <div className="ui-grid">
        <div className="ui-row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              //onVideoSelect={video => setSelectedVideo(video)}
              onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
