import { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export default function NavContextProvider({children}){
  const [navInd, setNavInd] = useState(null)

  return (
    <NavContext.Provider value={[navInd, setNavInd]}>
      {children}
    </NavContext.Provider>
  )
}

export const NavIndContext = () => {
  return useContext(NavContext);
}