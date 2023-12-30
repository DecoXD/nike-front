/* eslint-disable */

const FooterBar = ({title,links}) => {
  return (
    <div className=" ">
      <h3 className="font-palaquin text-white-400 font-bold text-2xl ">
        {title}
      </h3>
      <div className=" mt-8 flex flex-col gap-2">
        {
          links.map((item) => <a key={item.name} className=" text-white-400
          font-montserrat " href={item.link}>{item.name}</a>)
        }
      </div>
     
    </div>
  )
}

export default FooterBar