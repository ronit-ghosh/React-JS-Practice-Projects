import { PiEmptyBold } from "react-icons/pi";

const Empty = () => {
  return (
    <div className=" w-full h-[350px] flex items-center justify-center gap-2">
      <PiEmptyBold fontSize={30}/> <div className="text-lg font-bold">No Contacts Available</div>
    </div>
  )
}

export default Empty
