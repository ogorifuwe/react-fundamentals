const reducer = (state, action) => {
  switch(action.type) {
    case 'CLEAR_CART':
      return {
        ...state, cart: []
      }

    case 'REMOVE_CART_ITEM':
      return {
        ...state, cart: state.cart.filter(item => (item.id !== action.payload))
      }

    case 'INCREASE_ITEM_COUNT':
      return {
        ...state, cart: state.cart.map(item => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount + 1 }
          }
          return item;
        })
      }

    case 'DECREASE_ITEM_COUNT':
      return {
        ...state, cart: state.cart.map(item => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 }
          }
          return item;
        }).filter(item => item.amount > 0)
      }

    case 'GET_TOTAL':
      let { total, amount } = state.cart.reduce((currCartObject, item) => {
        const { price, amount } = item;
        const currCartTotal = amount * price;

        currCartObject.total += currCartTotal;
        currCartObject.amount += amount;

        return currCartObject;
      }, { total: 0, amount: 0 })

      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount }

    case 'LOADING':
      return { ...state, isLoading: true }

    case 'DISPLAY_ITEMS':
      return {
        ...state, cart: action.payload, isLoading: false
      }

    default:
      return state;
  }
}

export default reducer;
