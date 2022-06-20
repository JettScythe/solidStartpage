import { createContext, useContext, createSignal } from "solid-js";


export const SearchProviderContext = createContext();

export function SearchProvider(props) {
  const [state, setState] = createSignal(props.searchProvider || "searx" );
  const store = [
    state,
    {
      setSearchProvider(provider) {
        setState("")
        setState(provider);
      },
    },
  ];

  return (
    <SearchProviderContext.Provider value={store}>
      {props.children}
    </SearchProviderContext.Provider>
  );
}

export function useSearchProvider() { return useContext(SearchProviderContext); }