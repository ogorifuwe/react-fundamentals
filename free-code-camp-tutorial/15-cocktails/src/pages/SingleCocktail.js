import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {

  const { id } = useParams();
  const [ isLoading, setIsLoading ] = React.useState(false);
  const [ cocktail, setCocktail ] = React.useState(null);

  React.useEffect(() => {
    setIsLoading(true);
    async function getCocktailById() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: type,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          ];

          const newCocktail = {
            name, image, type, category, glass, instructions, ingredients
          };

          setCocktail(newCocktail);
        } else {
            setCocktail(null);
        }

        setIsLoading(false);
      } catch(error) {
          console.log(error);
          setIsLoading(false);
      }
    }
    getCocktailById();
  }, [ id ]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  if (!cocktail) {
    return (
      <h2 className='section-title'>no cocktail to display</h2>  
    )
  }

  const { name, image, type, category, glass, instructions, ingredients } = cocktail;

  return (
    <section className='section cocktail-section'>
      <Link
        className='btn btn-primary'
        to='/'
      >
        back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name:</span>
            {name}
          </p>

          <p>
            <span className='drink-data'>type:</span>
            {type}
          </p>

          <p>
            <span className='drink-data'>glass:</span>
            {glass}
          </p>
          
          <p>
            <span className='drink-data'>category:</span>
            {category}
          </p>

          <p>
            <span className='drink-data'>instructions:</span>
            {instructions}
          </p>

          <p>
            <span classsName='drink-data'>ingredients:</span>
            {
              ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null
              })
            }
          </p>
        </div>
      </div>
      
    </section>
  )
}

export default SingleCocktail
