import { useEffect } from "react"
import { useHeader } from "../../Providers/Header"


const HomeClient = () => {
    const {changeHeader} = useHeader()

    useEffect(() => {
       changeHeader('homeClient')
    }, [])
    

    return(
        <div>Home Client</div>
    )
}

export default HomeClient