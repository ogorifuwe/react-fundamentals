import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {

  const {isLoading, cocktails } = useGlobalContext();

  switch(isLoading) {
    case true:
      return <Loading />
  }

  const len = cocktails.length;
  if (len < 1) {
    return (
      <h2 className='section-title'>
        No cocktails matched your search criteria
      </h2>
    );
  }

  const displayCocktails = cocktails.map(drink => (
      <Cocktail key={drink.id} {...drink} />
    ));

  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        { displayCocktails }
      </div>
    </section>
  )
}

export default CocktailList
