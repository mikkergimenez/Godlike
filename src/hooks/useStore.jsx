import React from 'react'
import { useLocalStore } from 'mobx-react' // 6.x or mobx-react-lite@1.4.0
import RootStore from '../stores/root.store';

const storeContext = React.createContext({
    rootStore: new RootStore()
})

export function createStore() {
    // note the use of this which refers to observable instance of the store
    return new RootStore();
}
  

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(createStore)
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
  const store = React.useContext(storeContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}