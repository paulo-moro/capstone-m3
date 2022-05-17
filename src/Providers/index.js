import { HeaderProvider } from "./Header"
import { AuthProvider } from "./IsAuth"
import { UserProvider } from "./user"
import { UserWasteProvider } from "./UserRes"
import { ModalProvider } from "./Modal"
import { ModalWasteProvider } from "./openModalWaste"
import { ModalCompanyProvider } from "./openModalCompany"
import { CompaniesProvider } from "./Companies"
import { TakeWasteProvider } from "./takeWaste"
import { WasteDataProvider } from "./WasteData"


const Providers = ({children}) =>{
  return(
    <AuthProvider>
      <UserProvider>
        <UserWasteProvider>
          <ModalWasteProvider>
            <ModalCompanyProvider>
              <CompaniesProvider>
                <HeaderProvider>
                  <TakeWasteProvider>
                    <ModalProvider>
                      <WasteDataProvider>
                        {children}
                      </WasteDataProvider>
                    </ModalProvider>
                  </TakeWasteProvider>
                </HeaderProvider>
              </CompaniesProvider>
            </ModalCompanyProvider>
          </ModalWasteProvider>
        </UserWasteProvider>
      </UserProvider>
    </AuthProvider> 
  )
}

export default Providers
