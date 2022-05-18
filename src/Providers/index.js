import { HeaderProvider } from "./Header"
import { WasteInfoProvider } from "./InfoWaste"
import { AuthProvider } from "./IsAuth"
import { ModalProvider } from "./Modal"
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
                <ModalProvider>
                  <WasteInfoProvider>
                    <WasteDataProvider>
                      {children}
                    </WasteDataProvider>
                  </WasteInfoProvider>
                </ModalProvider>                  
              </HeaderProvider>
            </CompaniesProvider>
          </ModalTypeProvider>            
        </UserWasteProvider>
      </UserProvider>
    </AuthProvider> 
  )
}

export default Providers