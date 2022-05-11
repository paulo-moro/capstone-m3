import { useEffect } from "react"
import { useHeader } from "../../Providers/Header"


const HomeCollector = () => {
    const {changeHeader} = useHeader()

    useEffect(() => {
        changeHeader('homeCollector')
     }, [])

    return(
        <div>home Collector</div>
    )
}

export default HomeCollector