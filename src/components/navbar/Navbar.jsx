import NavbaarRight from "./navbarItem/NavbaarRight"
import NavbarLeft from "./navbarItem/NavbarLeft"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-5">
       <NavbarLeft/>
      <NavbaarRight/>
    </div>
  )
}

export default Navbar
