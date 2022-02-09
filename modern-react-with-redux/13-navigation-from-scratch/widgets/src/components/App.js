import { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';
import { items, colorOptions } from '../data';

const App = () => {
  const [ selected, setSelected ] = useState(colorOptions[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={colorOptions}
        />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
