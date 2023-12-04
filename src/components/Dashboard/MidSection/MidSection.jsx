import MoreAnalysis from "./MoreAnalysis"
import RegularSell from "./RegularSell"

const MidSection = () => {
  return (
    <div className="flex md:flex-row lg:flex-row flex-col w-full gap-10
    ">
        <RegularSell/>
        <MoreAnalysis/>
    </div>
  )
}

export default MidSection