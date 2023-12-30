import {footerLogo} from '../assets/images'
import FooterBar from '../components/FooterBar'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <footer className="max-container">

      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
            <a href="/">
              <img src={footerLogo} 
              width={150}
              height={46}
              />
            </a>
            <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Fund Your perfect Size in Store. Get Rewards.</p>

            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((item) =>
              <div key={item.alt} className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                  <img src={item.src} alt={item.alt} width={25} height={25} />
              </div>
              )}
            </div>
        </div>
      </div>
      
      <div className="flex flex-1 gap-16 mt-8 justify-between  sm:flex-row flex-col">
        {footerLinks.map((link) => <FooterBar key={link.title} {...link}/>)}
      </div>
      
      <p className='text-white-400 mt-12 font-montserrat'>
      Created by <a href="https://github.com/DecoXD?tab=repositories" target='_blank' rel='noreferrer' className='font-bold'>André Pinheiro</a> &copy;2023 
      </p>
    </footer>
  )
}

export default Footer