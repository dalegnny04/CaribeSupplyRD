 // NavBar.jsx
import React, { useState } from 'react' // 👈 AÑADIDO: useState para manejar el estado
import { navbarLinks } from '../constantes/Links';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// 👈 AJUSTADO: Se añade HiOutlineUserCircle
import { HiOutlineSearch, HiOutlineShoppingBag, HiOutlineLogout, HiOutlineLogin, HiOutlineUserCircle } from 'react-icons/hi'; 
import { FaBarsStaggered } from 'react-icons/fa6';
import { Logo } from './compartidos/Logo';
import { getAuth, signOut } from 'firebase/auth';
// RUTA CORREGIDA: Desde src/products se va a src/firebase/Credenciales.js
import appFirebase from '../firebase/Credenciales'; 

const auth = getAuth(appFirebase);

export const NavBar = () => {
    // Usamos auth.currentUser, pero recuerda que el estado de usuario se gestiona en Autentificacion.jsx
    const usuario = auth.currentUser; 
    const navigate = useNavigate();

    // 🚀 ESTADOS PARA LA BÚSQUEDA
    const [searchTerm, setSearchTerm] = useState(''); // El término que el usuario escribe
    const [isSearchVisible, setIsSearchVisible] = useState(false); // Controla si el input está visible

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log('Sesión cerrada');
            navigate('/'); // Redirigir a la página de inicio después del logout
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };
    
    // 🔍 FUNCIÓN PARA MANEJAR EL ENVÍO DE BÚSQUEDA
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        
        if (searchTerm.trim()) {
            // Redirigir a la página de productos con el término de búsqueda en la URL
            navigate(`/productos?q=${searchTerm.trim()}`);
            setIsSearchVisible(false); // Ocultar el campo después de la búsqueda
        }
    };
    
    // Función para alternar la visibilidad de la barra de búsqueda
    const toggleSearch = () => {
        if (isSearchVisible) {
            setSearchTerm('');
        }
        setIsSearchVisible(!isSearchVisible);
    }

    return (
        <header className='bg-white text-black py-4 flex items-center justify-between px-5 border-b border-slate-200 lg:px-12'>
            {/*logo*/}
            <Logo />
            
            <nav className='space-x-5 hidden md:flex'>
                {
                    navbarLinks.map(link => (
                        <NavLink 
                            key={link.id} 
                            to={link.href} 
                            className={({ isActive }) => `${isActive ? 'text-cyan-600 underline' : ''} transition-all duration-300 font-medium hover:text-cyan-600 hover:underline`}
                        >
                            {link.title}
                        </NavLink>
                    ))
                }
            </nav>

            <div className='flex items-center gap-4'>
                
                {/* 👤 INDICADOR DE SESIÓN ACTIVA (Muestra icono y correo si hay usuario) */}
                {usuario && (
                    <div className='flex items-center gap-2 text-slate-700'>
                        <HiOutlineUserCircle size={25} className='text-cyan-600'/>
                        {/* El correo solo se muestra en pantallas extra-grandes */}
                        <span className='text-sm font-medium hidden xl:inline'>
                            {usuario.email || 'Usuario Activo'} 
                        </span>
                    </div>
                )}
                
                {/* 🔎 CAMPO DE BÚSQUEDA CONDICIONAL */}
                {isSearchVisible && (
                    <form onSubmit={handleSearchSubmit} className='relative flex items-center'>
                        <input
                            type='text'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder='Buscar productos...'
                            className='border-b border-slate-300 focus:outline-none focus:border-cyan-600 px-2 py-1 w-40 text-sm transition-all duration-300'
                            autoFocus 
                        />
                    </form>
                )}

                {/* BOTÓN PARA ABRIR/CERRAR LA BÚSQUEDA */}
                <button 
                    onClick={toggleSearch} // 👈 Usa la función para mostrar/ocultar el input
                    className='text-slate-700 hover:text-cyan-600 transition-colors'
                    title={isSearchVisible ? 'Cerrar búsqueda' : 'Abrir búsqueda'}
                >
                    <HiOutlineSearch size={25}/>
                </button>

                {/* Botón de carrito */}
                <button className='relative'>
                    <span className='absolute -bottom-2 -right-2 w-5 h-5 grid place-items-center bg-black text-white text-xs rounded-full'>0</span>
                    <HiOutlineShoppingBag size={25}/>
                </button>

                {/* Diseño Mejorado para autenticación */}
                {usuario ? (
                    // Botón de Salir (Logout)
                    <button 
                        onClick={handleLogout}
                        className='flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-full bg-slate-700 text-white hover:bg-cyan-600 hover:border-cyan-600 transition-all duration-300 shadow-md'
                        title="Cerrar Sesión"
                    >
                        <HiOutlineLogout size={20} />
                        <span className='text-sm font-semibold hidden lg:inline'>Salir</span>
                    </button>
                ) : (
                    // Botón de Entrar/Registrarse (Login/Register)
                    <Link 
                        to='/login' // Asumiendo que esta ruta maneja el login y el registro
                        className='flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-full text-slate-700 hover:bg-slate-100 transition-all duration-300 shadow-md'
                        title="Iniciar Sesión o Registrarse"
                    >
                        <HiOutlineLogin size={20} />
                        <span className='text-sm font-semibold hidden lg:inline'>Entrar</span>
                    </Link>
                )}
            </div>

            <button className='md:hidden'>
                <FaBarsStaggered size={25}/>
            </button>
        </header>
    );
}