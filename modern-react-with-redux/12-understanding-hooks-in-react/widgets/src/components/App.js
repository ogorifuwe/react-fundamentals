import { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import { items, colorOptions } from '../data';

const App = () => {
  const [ selected, setSelected ] = useState(colorOptions[0]);
  //const [ isDropdownShowing, setIsDropdownShowing ] = useState(true);

  return (
    <div>
    {/* <button onClick={() => setIsDropdownShowing(!isDropdownShowing)}>
        Toggle Dropdown
      </button>
      { isDropdownShowing ?
        <Dropdown 
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={colorOptions}
        /> : null
      }*/}
      <Translate />
    </div>
  );
}

export default App;
