import CardCompany from "../CardCompany"
import {CompanyModal} from "./style"
import {FaSearch} from "react-icons/fa"
import {useState} from "react"
import { useCompany } from "../../Providers/Companies"
import { useModalCompany } from "../../Providers/openModalCompany"

const ModalCompany = () => {
  
  const {companies} = useCompany()
  const {closeCompanyModal} = useModalCompany()

  const [search, setSearch] = useState("")
  const [searchName, setSearchName] = useState(false) 
  const [searchCategory, setSearchCategory] = useState(false)
  const [filteredCompanies, setFilteredCompanies] = useState([])  
  

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
        <div className="containerHeaderModalCompany">
          <h1 className="titleModalCompany">Empresas próximas à mim:</h1>
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
            <button className="btnCloseModalCompany" onClick={closeCompanyModal}>X</button>
          </div>          
        </div>       
        <div className="containerBtnModalCompany">
          <button className="btnWasteModalCompany" onClick={() => CompanyFind("Plástico")}>Plástico</button>
          <button className="btnWasteModalCompany" onClick={() => CompanyFind("Papel")}>Papel</button>
          <button className="btnWasteModalCompany" onClick={() => CompanyFind("Vidro")}>Vidro</button>
          <button className="btnWasteModalCompany" onClick={() => CompanyFind("Metal")}>Metal</button>
          <button className="btnWasteModalCompany" onClick={() => CompanyFind("Madeira")}>Madeira</button>
          <button className="btnWasteModalCompany" onClick={() => CompanyFind("Óleo")}>Óleo</button>
          <button className="btnWasteModalCompany" onClick={showAll}>Todos</button>
        </div>
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