import { HeaderProvider } from "./Header"
import { WasteInfoProvider } from "./InfoWaste"
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
<<<<<<< HEAD
            <WasteInfoProvider>
              <HeaderProvider>{children}</HeaderProvider>
            </WasteInfoProvider>
=======
          <HeaderProvider>{children}</HeaderProvider>
>>>>>>> 58922a6872c5516796fab8e633771e5bfb1b57de
          </ModalProvider>
        </UserWasteProvider>
      </UserProvider>
    </AuthProvider> 
  )
}

export default Providers
