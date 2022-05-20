import { HeaderProvider } from "./Header"
import { WasteInfoProvider } from "./InfoWaste"
import { AuthProvider } from "./IsAuth"
import { ModalProvider } from "./Modal"
import { SecondModalProvider } from "./SecondModal"
import { UserProvider } from "./user"
import { UserWasteProvider } from "./UserRes"
import { CompaniesProvider } from "./Companies"
import { WasteDataProvider } from "./WasteData"
import { ModalTypeProvider } from "./ModalTypes"


const Providers = ({children}) =>{
  return(
    <AuthProvider>
      <UserProvider>
        <UserWasteProvider>         
          <ModalTypeProvider>
            <CompaniesProvider>
              <HeaderProvider>     
              <SecondModalProvider>            
                <ModalProvider>
                  <WasteInfoProvider>
                    <WasteDataProvider>
                      {children}
                    </WasteDataProvider>
                  </WasteInfoProvider>
                </ModalProvider>   
                </SecondModalProvider>               
              </HeaderProvider>
            </CompaniesProvider>
          </ModalTypeProvider>            
        </UserWasteProvider>
      </UserProvider>
    </AuthProvider> 
  )
}

export default Providers