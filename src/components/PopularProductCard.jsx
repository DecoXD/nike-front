import { star } from "../assets/icons"

/*eslint-disable*/

const PopularProductCard = ({name,price,imgURL}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full cursor-pointer ">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
      <div className="mt-6 flex justify-start gap-2.5">
        <img 
            src={star} 
            alt="ratinf"
            width={24}
            height={24}
            />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
      </div>
      <h3 className="mt-2 font-palaquin text-2xl leading-normal font-semibold">{name}</h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal ">{price}</p>
  </div>
  )
}

export default PopularProductCard