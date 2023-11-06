import CardOne from "./CardOne"
import CardThree from "./CardThree"
import CardTwo from "./CardTwo"

const Card = () => {
  return (
    <div className="flex w-3/5 gap-6">
        <CardOne/>
        <CardTwo/>
        <CardThree/>
    </div>
  )
}

export default Card