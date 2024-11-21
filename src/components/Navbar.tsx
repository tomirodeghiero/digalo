
import MenuIcon from '../assets/icons/menu.svg';


export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="container bg-black">
          <div className="py-4 flex items-center justify-between">

            <div className="relative">
              <div className='absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)] blur-2xl '></div>

              <img src={'/assets/icons/logo.png'} alt="logo" className='h-12 w-12' />
            </div>
            <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>

              <MenuIcon className="text-white" />
            </div>
            <nav className='text-white gap-6 items-center hidden sm:flex'>

              <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition' >Proyecto</a>
              <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Características</a>
              <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Preguntas Frecuentes</a>
              <button className='bg-white py-2 px-4 rounded-lg text-black'>Ingresar a la WebApp</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
};
