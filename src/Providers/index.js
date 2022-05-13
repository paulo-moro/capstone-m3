import { HeaderProvider } from "./Header"
import { AuthProvider } from "./IsAuth"
import { ModalProvider } from "./Modal"
import { UserProvider } from "./user"
import { UserWasteProvider } from "./UserRes"


const Providers = ({children}) =>{
  return(
    <AuthProvider>
      <UserProvider>
        <UserWasteProvider>
          <ModalProvider>
          <HeaderProvider>{children}</HeaderProvider>
          </ModalProvider>
        </UserWasteProvider>
      </UserProvider>
    </AuthProvider> 
  )
}

export default Providers
