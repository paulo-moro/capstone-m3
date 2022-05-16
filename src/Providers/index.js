import { HeaderProvider } from "./Header"
import { AuthProvider } from "./IsAuth"
import { UserProvider } from "./user"
import { UserWasteProvider } from "./UserRes"
import { ModalProvider } from "./Modal"
import { ModalWasteProvider } from "./openModalWaste"
import { ModalCompanyProvider } from "./openModalCompany"
import { CompaniesProvider } from "./Companies"


const Providers = ({children}) =>{
  return(
    <AuthProvider>
      <UserProvider>
        <UserWasteProvider>
          <ModalWasteProvider>
            <ModalCompanyProvider>
              <CompaniesProvider>
                <HeaderProvider>
                  <ModalProvider>
                    {children}
                  </ModalProvider>
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
