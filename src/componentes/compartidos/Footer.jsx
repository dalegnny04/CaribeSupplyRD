 // Footer.jsx
import React, { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../constantes/Links';
// Importar Firestore
 import { db } from '../../firebase/Credenciales.js';
import { doc, setDoc } from 'firebase/firestore' 

export const Footer = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('') 

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage('') 

        if (!email) {
            setMessage('Por favor, ingresa un correo electrónico.')
            return
        }

        try {
            // Usamos el correo como ID del documento
            const docRef = doc(db, 'subscribers', email.toLowerCase())
            
            await setDoc(docRef, {
                email: email.toLowerCase(),
                subscribedAt: new Date().toISOString(), 
            }, { merge: true }) 
            
            setEmail('')
            setMessage('¡Suscripción exitosa! Gracias.')
            
        } catch (error) {
            console.error('Error al suscribir:', error)
            setMessage('Ocurrió un error. Intenta de nuevo.')
        }
    }

    return (

         <footer className='py-16 bg-gray-950 px-12 flex justify-between gap-10 text-slate-200 text-sm flex-wrap mt-10 md:flex-nowrap'>

            <Link to='/' className='text-2xl font-bold tracking-tighter transition-all text-white flex-1'>
                CaribeSupplyRD
                Tradiccion que viaja
            </Link>

            <div className="flex flex-col gap-4 flex-1">
                <p className="font-semibold uppercase tracking-tighter">Suscribete</p>
                <p className='text-xs font-medium'>Recibe promociones exclusivas</p>

                {/* Mostrar mensaje de feedback */}
                {message && (
                    <p className={`text-xs font-semibold ${message.includes('éxito') ? 'text-green-400' : 'text-red-400'}`}>
                        {message}
                    </p>
                )}

                <form onSubmit={handleSubmit} className='border border-gray-800 flex items-center gap-2 px-3 py-2 rounded-full'>
                    <input
                        type='email'
                        placeholder='Correo Electronico'
                        className='pl-2 bg-gray-950 text-slate-200 w-full focus:outline-none'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type='submit' className='text-slate-200 hover:text-cyan-600 transition-colors'>
                        <BiChevronRight size={20} />
                    </button>
                </form>
            </div>

            <div className="flex flex-col gap-4 flex-1">
                <p className='font-semibold uppercase tracking-tighter'>Políticas</p>
                <nav className="flex flex-col gap-2 text-xs font-medium">
                    <Link to='/productos' className='text-slate-300 hover:text-white'>Productos</Link>
                    <Link to='#' className='text-slate-300 hover:text-white'>Políticas de privacidad</Link>
                    <Link to='#' className='text-slate-300 hover:text-white'>Términos de uso</Link>
                </nav>
            </div>

            <div className="flex flex-col gap-4 flex-1">
                <p className="font-semibold uppercase tracking-tighter">Síguenos</p>
                <p className="text-xs leading-6">
                    No te pierdas las novedades de CaribeSupply
                </p>

                <div className="flex">
                    {socialLinks.map(link => (
                        <a
                            key={link.id}
                            href={link.href}
                            target='_blank'
                            rel='noreferrer'
                            className='text-slate-300 border border-gray-800 w-full h-full py-3.5 flex items-center justify-center transition-all hover:bg-white hover:text-gray-950'
                        >
                            {link.icon} 
                        </a>
                    ))}
                </div>
            </div>
         </footer>
    )
}