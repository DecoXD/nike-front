import Button from "../components/Button"
import {arrowRight} from '../assets/icons'
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"
const Hero = () => {

  const [bigShoe, setBigShoe] = useState(bigShoe1)

  function changeBigShoeImg (image) {
    if(image) {
      setBigShoe(image)
      return
    }
  }

  return (
    <section 
      id="home" 
      className="w-full flex xl:flex-row 
      xl:pl-16 pl-2 flex-col gap-10
      justify-center  min-h-screen max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col 
      justify-center items-start w-full max-xl:padding-x pt-28">

        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>

        <h1 className="mt-10  font-palanquin text-8xl max-sm:text-[4.5rem] max-sm:leading">
          <span className=" xl:bg-white xl:whitespace-nowrap 
          relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort and innovation for your active life.</p>
        
        <Button label = "Shop Now" iconURL = {arrowRight}/>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palaquin font-bold">{stat.value}</p>
              <p className=" leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>


      </div>
      
      <div className=" relative flex flex-1 justify-center items-center 
      flex-col
      xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img 
          src={bigShoe} 
          alt="shoe collection" 
          width={610}
          height={500}
          className="object-contain relative z-10"
          />

          <div className=" flex gap-6 absolute top-[90%] max-sm:px-6">
            {shoes.map((shoe,idx)=> <ShoeCard key={`${shoe}#${idx}`} isCurrent={shoe.bigShoe === bigShoe} imageURL={shoe.thumbnail} bigShoeImg={shoe.bigShoe} changeBigShoeImg={changeBigShoeImg}/>)}
          </div>
      </div>

    </section>
  )
}

export default Hero