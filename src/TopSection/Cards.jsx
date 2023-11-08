import Card from "../TopSection/Card"

const Cards = () => {
 const cardObj = [
    {
        backgroundColor:"#CDC3FF",
        title:"Total Earning",
        value:"242.65K",
        description:"From the running month"
    },
    {
        backgroundColor:"#92E3B8",
        title:"Total Earning",
        value:"242.65K",
        description:"From the running month"
    },
    {
        backgroundColor:"#AAC9FF",
        title:"Total Earning",
        value:"242.65K",
        description:"From the running month"
    }
 ]

  return (
    <div className="flex w-4/5 gap-6">
     {
        cardObj.map((item,index) => (
            <Card key={index} backgroundColor={item.backgroundColor}
            title={item.title}
            value={item.value}
            description={item.description}
            />
        ))
     }
    </div>
  )
}

export default Cards