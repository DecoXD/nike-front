/*eslint-disable*/

const Button = ({label,iconURL,backgroundColor='',textColor='',borderColor=''}) => {
  return (
    <button className={`${backgroundColor} ${textColor} ${borderColor} flex px-7 py-4 rounded-full items-center gap-4 border-2 bg-coral-red text-slate-100 font-montserrat leading-none`}>
        {label}
        {iconURL && <img src={iconURL} alt="button" />}
    </button>
  )
}

export default Button