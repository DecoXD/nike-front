/* eslint-disable */

const ShoeCard = ({imageURL, changeBigShoeImg,bigShoeImg,isCurrent}) => {
  return (
    <div className={ `bg-card bg-cover bg-tio max-sm:flex-1  rounded-lg border-2 ${isCurrent? 'border-coral-red' : 'border-transparent'}  cursor-pointer`}
    onClick={() => changeBigShoeImg(bigShoeImg)}>
      <img src={imageURL} alt="shoes collection" />
    </div>
  )
}



export default ShoeCard