import React from 'react'
import { MdLocalShipping } from 'react-icons/md'
import { GiFarmer } from "react-icons/gi";
import { PiFarmThin } from "react-icons/pi";

// Aqui escribiremos las caracteristica de la tienda
export const FeatureGrip = () => {
    return (
        <div className='grid grid-cols-2 gap-8 mt-6 mb-16 lg:grid-cols-4 lg:gap-5'>

            <div className='flex items-center gap-6'>
                <MdLocalShipping size={40} className='text-slate-600' />

                <div className='space-y-1'>
                    <p className="font-semibold">Envio Gratis</p>
                    <p className='text-ms'>En todos nuestros productos</p>
                </div>
            </div>

            <div className='flex items-center gap-6'>
                <GiFarmer  size={40} className='text-slate-600' />

                <div className='space-y-1'>
                    <p className="font-semibold">Somos Autenticos</p>
                    <p className='text-ms'>Conecta directamente con artesanos, productores locales y microempresas.
 </p>
                </div>
            </div>

            <div className='flex items-center gap-6'>
                < PiFarmThin  size={40} className='text-slate-600' />

                <div className='space-y-1'>
                    <p className="font-semibold"> Llevate</p>
                    <p className='text-ms'> Un pedacito de Rep. Dom. al mundo</p>
                </div>
            </div>
        </div>
    )
}
