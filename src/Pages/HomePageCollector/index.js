import CardCompany from "./../../Components/CardCompany"
import image from "../../Images/recycle.webp"

const HomeCollector = () => {

    return(
        <>
            <div>home Collector</div>

            {/* Card importado para teste */}
            <CardCompany company={{id: 1, name: "Ecoreciclagens", city: "curitiba", image: image, materials: ["papel","plastico","madeira","óleo","vidro","eletronico" ]}} />
        </>
        
    )
}

export default HomeCollector