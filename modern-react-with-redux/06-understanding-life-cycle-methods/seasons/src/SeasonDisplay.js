import './SeasonDisplay.css'

const SeasonDisplay = props => {

  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-top-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-bottom-right massive ${iconName} icon`} />
    </div>
  );
};

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it\'s cold!',
    iconName: 'snowflake'
  }
};

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9)
      latitude = latitude > 0 ? 'summer' : 'winter';
    else
      latitude = latitude > 0 ? 'winter' : 'summer'; 
    return latitude;
}

export default SeasonDisplay;
