import { createContext, useContext, useEffect, useState } from "react";
import Api from "../../Api";
import { useAuth } from "../IsAuth";

export const CompaniesContext = createContext()

export const CompaniesProvider = ({children}) => {
    
  const [companies, setCompanies] = useState([])
  const {auth} = useAuth()
  
  const Companies =()=> Api.get("/companies", {headers: {Authorization: `Bearer ${auth}`}})
  .then((res) => {setCompanies(res.data)})
  
  
  return(
    <CompaniesContext.Provider value={{companies,Companies,setCompanies}}>
      {children}
    </CompaniesContext.Provider>
  )
}

export const useCompany = () => useContext(CompaniesContext)



