import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Anybody', duration: '3:01' },
    { title: 'Mighty Whine', duration: '3.45' },
    { title: 'Talking to the Moon', duration: '3:56' },
    { title: 'Number One', duration: '2:40' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SELECTED_SONG')
    return action.payload;

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});


