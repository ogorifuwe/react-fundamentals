import { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import { languageOptions } from '../data';

const Translate = () => {
  const [ language, setLangauge ] = useState(languageOptions[0]);
  const [ text, setText ] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            type="text"
            value={text}
            onChange={ (e) => setText(e.target.value) }
          />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLangauge}
        options={languageOptions}
      />
      
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>  
  ); 
};

export default Translate;
