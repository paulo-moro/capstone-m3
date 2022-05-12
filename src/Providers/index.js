import { HeaderProvider } from "./Header"
import { AuthProvider } from "./IsAuth"
import { UserProvider } from "./user"
import { UserWasteProvider } from "./UserRes"


const Providers = ({children}) =>{
  return(
    <AuthProvider>
      <UserProvider>
        <UserWasteProvider>
          <HeaderProvider>{children}</HeaderProvider>
        </UserWasteProvider>
      </UserProvider>
    </AuthProvider> 
  )
}

export default Providers
