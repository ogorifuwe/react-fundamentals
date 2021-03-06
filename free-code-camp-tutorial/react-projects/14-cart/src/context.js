import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  isLoading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {

  const [ state, dispatch ] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  }

  const removeCartItem = (id) => {
    dispatch({ type: 'REMOVE_CART_ITEM', payload: id });
  }

  const increaseItemCount = (id) => {
    dispatch({ type: 'INCREASE_ITEM_COUNT', payload: id });
  }
  
  const decreaseItemCount = (id) => {
    dispatch({ type: 'DECREASE_ITEM_COUNT', payload: id });
  }

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const response = await fetch(url);
    const products = await response.json();
    dispatch({ type: 'DISPLAY_ITEMS', payload: products });
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
          clearCart,
          removeCartItem,
          increaseItemCount,
          decreaseItemCount
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
