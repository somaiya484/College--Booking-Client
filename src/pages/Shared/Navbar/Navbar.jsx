// import { useContext, } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Authentacation/Authentacation';
import { useContext } from 'react';
// import { AuthContext } from '../../../authProviders/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const Logout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }


    const navbarPages = <>
        <li className='text-blue-900  hover:underline font-semibold text-lg'><Link to='/'>Home</Link></li>
        <li className='text-blue-900  hover:underline font-semibold text-lg'><Link to='/allCollege'>Colleges</Link></li>
        <li className='text-blue-900  hover:underline font-semibold text-lg'><Link to='admission'>Admission</Link></li>

        {/* {user && <li className='text-blue-900  hover:underline font-semibold text-lg'><Link to='/addToys'>Add A Toy</Link></li>} */}
        {user && <li className='text-blue-900  hover:underline font-semibold text-lg'><Link to='/myToys'>My College</Link></li>}
        <li className='mx-2 text-purple-800  hover:underline font-semibold text-lg mt-2 cursor-pointer'>{user?.displayName}
        {/* <img className='w-full rounded-full lg:-mt-3' src={user?.displayName} alt="" /> */}
        </li>

        {
            user?.email ?
                <li><button onClick={Logout} className=' bg-blue-900 text-white  hover:underline font-semibold text-lg '>LogOut</button></li>
                :
                <li><Link className='bg-blue-900 text-white  hover:underline font-semibold text-lg ' to='/login '>Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-blue-100 fixed z-30">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-4xl font-bold text-gray-800">Campus<span className='text-blue-800'>Dash</span></a>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {navbarPages}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navbarPages}
                </ul>
            </div>
        </div>
        // <div className="navbar bg-base-100">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </label>
        //             <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
        //                 {navbarPages}
        //             </ul>
        //         </div>
        //         <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1">
        //             <li><a>Item 1</a></li>
        //             <li tabIndex={0}>
        //                 <details>
        //                     <summary>Parent</summary>
        //                     <ul className="p-2">
        //                         <li><a>Submenu 1</a></li>
        //                         <li><a>Submenu 2</a></li>
        //                     </ul>
        //                 </details>
        //             </li>
        //             <li><a>Item 3</a></li>
        //         </ul>
        //     </div>
        //     <div className="navbar-end">
        //         <a className="btn">Button</a>
        //     </div>
        // </div>
    );
};

export default Navbar;