import {
  createSignal, createContext, useContext
} from 'solid-js';
import { MAJOR_PAGES } from '../utils/majorPages';

const PageContext = createContext();

export function PageContextProvider(props) {
  const [ majorPage, setMajorPage ] = createSignal(MAJOR_PAGES.HOME);
  const [ majorPageIdx, setMajorPageIdx ] = createSignal(0);
  const [ desiredMajorPage, setDesiredMajorPage ] = createSignal(MAJOR_PAGES.ABOUT);

  return (
    <PageContext.Provider
      value={{
        majorPage,
        setMajorPage,
        majorPageIdx,
        setMajorPageIdx,
        desiredMajorPage,
        setDesiredMajorPage
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
}

export function usePageContext() {
  return useContext(PageContext);
}
