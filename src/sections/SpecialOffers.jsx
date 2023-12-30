import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffers = () => {
  return (
   <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
    <div className="flex-1">
      <img src={offer} width={773} height={687}
      className="object-contain w-full"/>
    </div>

    <div className="flex flex-1 flex-col">
        <h2 className="mt-10  font-palanquin text-4xl capitalize  lg:max-w-lg">
          <span className="text-coral-red inline-block mr-3 mt-3">Special</span> 
          Offers
          </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
          <p className="mt-6 info-text lg:max-w-lg">our dedications to datail and excellence ensures your satisfaction</p>
          <div className="mt-11 flex-wrap flex gap-4">
            <Button label = "Shop Now" iconURL={arrowRight}/>
            <Button 
              label={'Learn more'}
              backgroundColor = 'bg-white'
              borderColor = 'border-slate-gray'
              textColor = 'text-slate-gray'
              />
          </div>
      </div>
   </section>
  )
}

export default SpecialOffers