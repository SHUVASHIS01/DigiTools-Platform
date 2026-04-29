import { FiShoppingCart } from 'react-icons/fi';

export default function Navbar({ cartCount }) {
  return (
    <div className="navbar bg-base-100 container mx-auto px-4 lg:px-8 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        <a className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 cursor-pointer">
          DigiTools
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium text-gray-700">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
        <div className="indicator cursor-pointer mr-2 md:mr-4">
          {cartCount > 0 && <span className="indicator-item badge badge-primary badge-sm text-white">{cartCount}</span>}
          <FiShoppingCart className="text-2xl text-gray-700" />
        </div>
        <a className="hidden sm:inline-flex font-medium text-gray-700 cursor-pointer hover:text-primary transition-colors">Login</a>
        <a className="btn btn-primary rounded-full px-6 text-white border-none bg-gradient-to-r from-primary to-purple-500 hover:from-purple-600 hover:to-purple-500 transition-all">Get Started</a>
      </div>
    </div>
  );
}
