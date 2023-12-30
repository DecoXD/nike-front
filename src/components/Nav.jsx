import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className="padding-x py-8 fixed top-0 transparent z-50 w-full">

      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img 
            src={headerLogo} 
            alt="logo"
            width={130}
            height={29}
            />
        </a>

        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden ">
          {
            navLinks.map((item) => <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-[1.05rem] text-slate-gray'>{item.label}</a>
            </li>)
          }
        </ul>

        <div className="lg:hidden block">
          <img 
          src={hamburger} 
          alt="hamburger"
          width={26} 
          height={26} 
          />
        </div>
      </nav>

    </header>
  )
}

export default Nav