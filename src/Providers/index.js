import { HeaderProvider } from "./Header"
import { AuthProvider } from "./IsAuth"
import { UserProvider } from "./user"
import { UserWasteProvider } from "./UserRes"
import { ModalProvider } from "./Modal"


const Providers = ({children}) =>{
  return(
    <AuthProvider>
      <UserProvider>
        <UserWasteProvider>
          <HeaderProvider>
            <ModalProvider>
              {children}
            </ModalProvider>
          </HeaderProvider>
        </UserWasteProvider>
      </UserProvider>
    </AuthProvider> 
  )
}

export default Providers
