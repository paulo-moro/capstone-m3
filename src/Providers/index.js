import { HeaderProvider } from "./Header"
import { AuthProvider } from "./IsAuth"
import { UserProvider } from "./user"
import { UserWasteProvider } from "./UserRes"


export const Providers = ({children}) =>{
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

