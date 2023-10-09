import {Link} from "react-router-dom"


const NavBar = ()=> {
    return (
        <nav className="w-full h-10 bg-gray-500 flex items-center">
            <div className="w-full flex gap-4 ml-10 text-blue-100">
                <Link to ="/">Home</Link><br/>
                <Link to ="/about">About Us </Link><br/>
                <Link to ="/contact">Contact Us</Link><br/>
            </div>
        </nav>
    )
}
export default NavBar