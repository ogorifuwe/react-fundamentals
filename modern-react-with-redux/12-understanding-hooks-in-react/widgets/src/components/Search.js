import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [ term, setTerm ] = useState('');
  const [ results, setResults ] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios
        .get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        },
      });
      setResults(data.query.search);
    };

    const timerId = setTimeout(() =>  {
      if (term) { search(); }
    }, 500);
    
    return () => {
      clearTimeout(timerId);
    }
  }, [term]);

  const onInputChange = (e) => {
    setTerm(e.target.value);
  }

  const renderedResults = results.map(result => {
    const { pageid, title, snippet } = result;
    return (
      <div key={pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: snippet }}>
          </span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
}

export default Search;
