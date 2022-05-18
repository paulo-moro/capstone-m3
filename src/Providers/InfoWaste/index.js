import { createContext, useContext, useState } from "react"

export const wasteInfoContext = createContext()

export const WasteInfoProvider = ({children}) => {

  const [infoWaste, setInfoWaste] = useState()

  const addInfoWaste = (item) => {
    setInfoWaste(item)
  }

	return(
		<wasteInfoContext.Provider value={{infoWaste, addInfoWaste}}>
			{children}
		</wasteInfoContext.Provider>
	)
}

export const useInfoWaste = () => useContext(wasteInfoContext)
