import { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, selected, onSelectedChange, options }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setIsOpen(false);
    };

    document.body.addEventListener('click', onBodyClick, {
      capture: true
    });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true
      });
    };
  }, []);

  const renderedOptions = options.map(option => {
    const { label, value } = option;
    
    if (value === selected.value) {
      return null;
    }

    return (
      <div
        className="item"
        key={value} 
        onClick={() => onSelectedChange(option)}
      >
        {label}
      </div>
    );
  });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{label}</label>
        <div 
          className={`ui selection dropdown ${isOpen ? "visible active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${isOpen ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
