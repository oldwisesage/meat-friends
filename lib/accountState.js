import { createContext } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

// TODO build this context hook to implement dynamic rendering in account screen

function AccountStateProvider({children}) {
    const [comp, setComp] = useContext();
}
