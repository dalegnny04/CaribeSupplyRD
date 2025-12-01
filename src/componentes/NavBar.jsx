import React from 'react'
import { navbarLinks } from '../constantes/Links';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineSearch, HiOutlineShoppingBag } from 'react-icons/hi';
import { FaBarsStaggered } from 'react-icons/fa6';
import { Logo } from './compartidos/Logo';
import { useCart } from "/src/context/cartcontext.jsx";

export const NavBar = () => {
    
    const { cart } = useCart(); 
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className='bg-white text-black py-4 flex items-center justify-between px-5 border-b border-slate-200 lg:px-12'>

            {/* Logo */}
            <Logo />

            {/* Menu */}
            <nav className='space-x-5 hidden md:flex'>
                {navbarLinks.map(link => (
                    <NavLink
                        key={link.id}
                        to={link.href}
                        className={({ isActive }) =>
                            `${isActive ? 'text-cyan-600 underline' : ''} 
                            transition-all duration-300 font-medium hover:text-cyan-600 hover:underline`
                        }
                    >
                        {link.title}
                    </NavLink>
                ))}
            </nav>

            {/* Iconos */}
            <div className='flex gap-5 items-center'>
                
                <button>
                    <HiOutlineSearch size={25} />
                </button>

                <div className='relative'>
                    <Link
                        to='/account'
                        className='border-2 border-slate-700 w-9 h-9 rounded-full grip place-items-center text-lg font-bold'
                    >
                    </Link>
                </div>

                {/* Carrito */}
                <Link to="/cart" className='relative'>
                    <span className='absolute -bottom-2 -right-2 w-5 h-5 flex items-center justify-center bg-black text-white text-xs rounded-full'>
                        {totalItems}
                    </span>
                    <HiOutlineShoppingBag size={25} />
                </Link>

            </div>

            <button className='md:hidden'>
                <FaBarsStaggered size={25}/>
            </button>
        </header>
    );
};
