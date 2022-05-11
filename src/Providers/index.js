import { HeaderProvider } from "./Header"

const Providers = ({children}) => {

    return (
        <HeaderProvider>{children}</HeaderProvider>
    )
}

export default Providers