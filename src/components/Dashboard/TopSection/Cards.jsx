import Card from "../TopSection/Card";

const Cards = () => {
 const cardObj = [
    {
        backgroundColor:"#CDC3FF",
        title:"Total Earning",
        value:"242.65K",
        description:"From the running month"
    },
    {
        backgroundColor:"#AAC9FF",
        title:"Average Earning",
        value:"17.347K",
        description:"Daily Earning of this month"
    },
    {
        backgroundColor:"#92E3B8",
        title:"Conversion Rate",
        value:"74.86%",
        description:"+6.04% greater than last week"
    }
 ]

  return (
    <div className="flex lg:flex-row flex-col lg:w-full w-[50vw] gap-6">
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