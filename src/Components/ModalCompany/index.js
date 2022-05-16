import CardCompany from "../CardCompany"
import {CompanyModal} from "./style"
import {FaSearch} from "react-icons/fa"
import {useState} from "react"

const ModalCompany = ({companies, setOpenModalCompany}) => {
  
  const [filteredProducts, setFilteredProducts] = useState([])
  const [findWaste, setFindWaste] = useState([])
  const [search, setSearch] = useState([])
  const [searchName, setSearchName] = useState(false)
  const [searchCategory, setSearchCategory] = useState(false)

  
  const closeModalCompany = () => {
    setOpenModalCompany(false)
  }

  const showCompanies = ((filteredCompany ) => {
    
    const regex = new RegExp(filteredCompany.toLowerCase(), 'g')
      
    const filterCompany = companies.filter(company => company.name.toLowerCase().match(regex)) 
    setFilteredProducts(filterCompany)
    setSearchName(true)
    setSearchCategory(false)    
  })

  const WasteFind = (material) => {
    const found = companies.filter((company) => {
      return company.materials.includes(material) 
    })  
    setFindWaste(found) 
    setSearchName(false)
    setSearchCategory(true)        
  } 

  const showAll = () => {
    setSearchName(false)
    setSearchCategory(false)   
  }


  
      
      //Minha
    // companies.map((company) => {
    //   const found = company.materials.filter(waste => waste === "Papel")
    //   console.log(company.materials)
    //   console.log(found)
    //   setFindWaste(found)
      
    // })


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
              <button className="btnSearch" onClick={() => showCompanies(search)}><FaSearch/></button>
            </div>            
            <button className="btnCloseModalCompany" onClick={closeModalCompany}>X</button>
          </div>          
        </div>       
        <div className="containerBtnModalCompany">
          <button className="btnWasteModalCompany" onClick={() => WasteFind("Plástico")}>Plástico</button>
          <button className="btnWasteModalCompany" onClick={() => WasteFind("Papel")}>Papel</button>
          <button className="btnWasteModalCompany" onClick={() => WasteFind("Vidro")}>Vidro</button>
          <button className="btnWasteModalCompany" onClick={() => WasteFind("Metal")}>Metal</button>
          <button className="btnWasteModalCompany" onClick={() => WasteFind("Madeira")}>Madeira</button>
          <button className="btnWasteModalCompany" onClick={() => WasteFind("Óleo")}>Óleo</button>
          <button className="btnWasteModalCompany" onClick={showAll}>Todos</button>
        </div>
        {
          searchName ?
          (<CardCompany companies={filteredProducts} />) 
          :
          searchCategory ?
          (<CardCompany companies={findWaste}/>) 
          :
          (<CardCompany companies={companies}/>)
        }                    
      </div>      
    </CompanyModal>    
  )
}

export default ModalCompany