import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 mb-12">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={Logo} alt="" />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/donation'>Donation</NavLink></li>
                    <li><NavLink to='/statistics'>Statistics</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;