import MoreAnalysis from "./MoreAnalysis"
import RegularSell from "./RegularSell"

const MidSection = () => {
  return (
    <div className="flex justify-between w-3/5">
        <RegularSell/>
        <MoreAnalysis/>
    </div>
  )
}

export default MidSection