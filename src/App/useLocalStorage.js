import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}))

  const {  //alparecer esto solo es para destructurar state y poder consumir sus vainas peladas
    sincronizedItem,
    error,
    loading,
    item,
  } = state

  //ACTION CREATORS
  const onError = (error)=>  dispatch({ type: actionTypes.error, payload: error})
  const onSuccess = (parsedItem)=>  dispatch({ type: actionTypes.success, payload: parsedItem})
  const onSave = (Item)=>  dispatch({ type: actionTypes.save  , payload: Item})
  const onSincronize = ()=>  dispatch({ type: actionTypes.sincronize})
      
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem)
      } catch(error) {
        onError(error);
      }
    }, 500);
  }, [sincronizedItem]);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch(error) {
      onError(error);
    }
  };

  const sincronizeItem = () => {
    onSincronize()
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

const initialState =({ initialValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
})

const actionTypes = {
  error : 'Error',
  success : 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE'
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  },
})

const reducer = (state, action)=> { //state entra gracias a useReducer, el action entra por parte de 
  return reducerObject(state, action.payload)[action.type] || state
}

export { useLocalStorage };