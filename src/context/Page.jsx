import {
  createSignal, createContext, useContext
} from 'solid-js';
import { MAJOR_PAGES } from '../utils/majorPages';

const PageContext = createContext();

export function PageContextProvider(props) {
  const [ majorPage, setMajorPage ] = createSignal(MAJOR_PAGES.HOME);
  const [ majorPageIdx, setMajorPageIdx ] = createSignal(0);

  return (
    <PageContext.Provider
      value={{
        majorPage,
        setMajorPage,
        majorPageIdx,
        setMajorPageIdx
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
}

export function usePageContext() {
  return useContext(PageContext);
}
