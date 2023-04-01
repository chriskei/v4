import {
  createSignal, createContext, useContext
} from 'solid-js';
import { MAJOR_PAGES } from '../utils/majorPages';

const MajorPageContext = createContext();

export function MajorPageContextProvider(props) {
  const [ majorPage, setMajorPage ] = createSignal(MAJOR_PAGES.HOME);

  return (
    <MajorPageContext.Provider
      value={{
        majorPage,
        setMajorPage
      }}>
      {props.children}
    </MajorPageContext.Provider>
  );
}

export function useMajorPageContext() {
  return useContext(MajorPageContext);
}
