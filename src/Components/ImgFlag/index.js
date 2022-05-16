import { useEffect, useState } from "react"
import { StyledFlag } from "./style"

const ImgFlag = ({p1, p2, p3, alt, imgSrc}) => {
    const [fade, setFade] = useState(false)

    useEffect(() => {
        setFade(false)

        setTimeout(() => setFade(true), 6900)
    }, [])
  return (
    <StyledFlag fade={fade}>
    <img src={imgSrc} alt={alt} />
    <div className="display__paragraph">
        <p className="p1">{p1}</p>
        <p className="p2">{p2}</p>
        <p className="p3">{p3}</p>
    </div>
    </StyledFlag>
  )
}

export default ImgFlag