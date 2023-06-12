import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";


export default function Rating() {
  return (
    <div className=" flex items-center -ml-1 ">
      {Array.from({ length: 4 }).map((_,index)=>(
        <StarIcon key={index} className="flex-shrink-0 h-6 w-6 text-yellow-500" />
      ))}
      {Array.from({ length: 1 }).map((_,index)=>(
        <StarIconOutline key={index} className="flex-shrink-0 h-6 w-6 text-yellow-500" />
      ))}
    </div>
  );
}
