import { HeaderProvider } from "./Header"
import { WasteInfoProvider } from "./InfoWaste"
import { AuthProvider } from "./IsAuth"
import { ModalProvider } from "./Modal"
import { SecondModalProvider } from "./SecondModal"
import { UserProvider } from "./user"
import { UserWasteProvider } from "./UserRes"


const Providers = ({children}) =>{
  return(
    <AuthProvider>
      <UserProvider>
        <UserWasteProvider>
          <ModalProvider>
            <SecondModalProvider>
              <WasteInfoProvider>
                <HeaderProvider>{children}</HeaderProvider>
              </WasteInfoProvider>
            </SecondModalProvider>
          </ModalProvider>
        </UserWasteProvider>
      </UserProvider>
    </AuthProvider> 
  )
}

export default Providers
