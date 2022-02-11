import { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [ translatedText, setTranslatedText ] = useState('');
  const [ debouncedText, setDebouncedText ] = useState(text);
  const URL = 'https://translation.googleapis.com/language/translate/v2';

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    }
  }, [text]);

  useEffect(() => {
    const performTranslation = async () => {
      const { data } = await axios.post(URL, {}, {
        params: {
          q: debouncedText,
          target: language.value,
          key: 
        }
      });
      
      setTranslatedText(data.data.translations[0].translatedText);
    };

    performTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translatedText}</h1>
    </div>
  );
}

export default Convert;
