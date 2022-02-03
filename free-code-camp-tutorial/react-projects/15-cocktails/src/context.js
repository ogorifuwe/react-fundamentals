import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ searchTerm, setSearchTerm ] = useState('a');
  const [ cocktails, setCocktails ] = useState([]);

  const getCocktailsByName = useCallback (async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const drinksEphemeral = drinks.map(drink => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            type: strAlcoholic,
            glass: strGlass
          };
        });
        setCocktails(drinksEphemeral);
      } else {
          setCocktails([]);
      }
      
      setIsLoading(false);
    } catch(error) {
        console.log(error);
        setIsLoading(false);
    }
  }, [ searchTerm ]);

  useEffect(() => { getCocktailsByName() }, [ searchTerm, getCocktailsByName ]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
          searchTerm,
          setSearchTerm,
          cocktails
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
