import axios from 'axios';

const KEY = 'AIzaSyAMN6YIu6VGXAdSGuoUTLeFhJKRS1q1-JM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: 5,
    key: KEY
  }
});
