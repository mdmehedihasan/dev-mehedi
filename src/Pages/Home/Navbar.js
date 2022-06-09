import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItem = <>
        <li className='text-xl font-bold'><Link to="/">Home</Link></li>
        <li className='text-xl font-bold'><a href="home#about">About Me</a></li>
        <li className='text-xl font-bold'><a href="home#about">Work</a></li>
        <li className='text-xl font-bold'><a href="home#about">Skills</a></li>
    </>
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-2xl font-bold text-blue-700" >DEV MEHEDI</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                <div class="navbar-end">
                    <a className='btn bg-opacity-0 text-black hover:bg-slate-400 font-bold text-xl' href="/src/assets/Mehedi Hasan Resume Mern Stack Developer.pdf" download>RESUME</a>


                </div>
            </div>
        </div>
    );
};

export default Navbar;