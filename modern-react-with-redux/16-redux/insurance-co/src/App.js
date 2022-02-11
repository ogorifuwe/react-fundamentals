import { createStore, combineReducers } from 'redux';

const App = () => {
  // people dropping off forms (action creators)
  const createPolicy = (name, amount) => {
    return {
      type: 'CREATE_POLICY',
      payload: {
        name: name,
        amount: amount
      }
    };
  };

  const deletePolicy = (name) => {
    return {
      type: 'DELETE_POLICY',
      payload: { name }
    };
  };

  const createClaim = (name, amount) => {
    return {
      type: 'CREATE_CLAIM',
      payload: {
        name,
        amount
      }
    };
  };

  // departments (reducers)
  const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
      return [ ...oldListOfClaims, action.payload ];
    }

    return oldListOfClaims;
  };


  const accounting = (companyReserves = 100, action) => {
    if (action.type === 'CREATE_POLICY') {
      return companyReserves + action.payload.amount;
    } else if (action.type === 'CREATE_CLAIM') {
        return companyReserves - action.payload.amount;
    }

    return companyReserves;
  }

  const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
      return [ ...listOfPolicies, action.payload.name ];
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name);
    }

    return listOfPolicies;
  }

  const departments = combineReducers({
    claimsHistory: claimsHistory,
    accouting: accounting,
    policies: policies
  });

  const store = createStore(departments);

  store.dispatch(createPolicy('Alex', 20)); console.log(store.getState());
  store.dispatch(createPolicy('Sam,', 30)); console.log(store.getState());
  store.dispatch(createPolicy('Jim', 40)); console.log(store.getState());

  store.dispatch(createClaim('Alex', 30)); console.log(store.getState());

  store.dispatch(deletePolicy('Sam')); console.log(store.getState());

  return (
    <div>Open Console to see results...</div>
  );
};

export default App;
