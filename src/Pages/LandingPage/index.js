import { useEffect } from "react"
import { useHeader } from "../../Providers/Header"
import {Chat} from "./../../Components/Chat/index.js"
const LandingPage = () => {
    const {changeHeader} = useHeader()
    
    useEffect(() => {
        changeHeader('landing')
     }, [])


    return(
        <>
            <div>LandingPage</div>
            <Chat/>
        </>
    )
}

export default LandingPage