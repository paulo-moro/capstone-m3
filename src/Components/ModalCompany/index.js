import CardCompany from "../CardCompany"
import {CompanyModal} from "./style"
import {FaSearch} from "react-icons/fa"
import {useEffect, useState} from "react"
import { useCompany } from "../../Providers/Companies"

const ModalCompany = () => {  
  const {companies,Companies} = useCompany()
  const [search, setSearch] = useState("")
  const [searchName, setSearchName] = useState(false) 
  const [searchCategory, setSearchCategory] = useState(false)
  const [filteredCompanies, setFilteredCompanies] = useState([])  
  
  useEffect(()=>{
    Companies()
  },[])

  const searchCompanies = ((input) => {    
    const regex = new RegExp(input.toLowerCase(), 'g')      
    const filterByInput = companies.filter(company => company.name.toLowerCase().match(regex)) 
    setFilteredCompanies(filterByInput)
    setSearchName(true)
    setSearchCategory(false) 
    setSearch("")   
  })

  const CompanyFind = (material) => {
    const filterByMaterial = companies.filter((company) => {
      return company.materials.includes(material) 
    })  
    setFilteredCompanies(filterByMaterial) 
    setSearchName(false)
    setSearchCategory(true)        
  } 

  const showAll = () => {
    setSearchName(false)
    setSearchCategory(false)   
  }    
    

  return (
    <CompanyModal>
      <div className="containerModalCompany">    
            
        <div className="containerBtnModalCompany">
          
          <div className="containerInputButtons">
            <div className="searchCompany">
              <input 
              className="inputModalCompany" 
              placeholder="Digite o nome da empresa"
              name='search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}  
              ></input>
              <button className="btnSearch" onClick={() => searchCompanies(search)}><FaSearch/></button>
            </div>            
           
          </div>  
          <button className="btnWasteModalCompany" onClick={() => CompanyFind("Plástico")}>Plástico</button>
          <button className="btnWasteModalCompany" onClick={() => CompanyFind("Papel")}>Papel</button>
          <button className="btnWasteModalCompany" onClick={() => CompanyFind("Vidro")}>Vidro</button>
          <button className="btnWasteModalCompany" onClick={() => CompanyFind("Metal")}>Metal</button>
          <button className="btnWasteModalCompany" onClick={() => CompanyFind("Madeira")}>Madeira</button>
          <button className="btnWasteModalCompany" onClick={() => CompanyFind("Óleo")}>Óleo</button>
          <button className="btnWasteModalCompany" onClick={showAll}>Todos</button>
        </div>
        <h1 className="titleModalCompany">Empresas próximas à mim:</h1>
        {
          searchName ?
          (<CardCompany companies={filteredCompanies} />) 
          :
          searchCategory ?
          (<CardCompany companies={filteredCompanies}/>) 
          :
          (<CardCompany companies={companies}/>)
        }                    
      </div>      
    </CompanyModal>    
  )
}

export default ModalCompany