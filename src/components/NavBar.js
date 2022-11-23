

const NavBar = () => {
  return (
    <div className="navbar bg-slate-200">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-xl font-bold italic">996Factory</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><a className='font-bold italic'>Home</a></li>
      <li tabIndex={0}>
        <a className='font-bold italic'>
          Products
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a className='font-bold italic'>Exhaust Systems</a></li>
          <li><a className='font-bold italic'>Racing Parts</a></li>
        </ul>
      </li>
      
    </ul>
  </div>
    
 </div>

 ) 
}
export default NavBar