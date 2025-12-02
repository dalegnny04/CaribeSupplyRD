import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa6";

export const navbarLinks = [
    {
        id:1,
        title: 'Inicio',
        href:'/'
    },
    {
        id:2,
        title: 'Sobre nosotros',
        href:'/nosotros'
    },
    /*{
        id:3,
        title: 'Contacto',
        href:'/Contacto'
    },*/
    {
        id:4,
        title: 'Productos',
        href:'/productos'
    }
    ,
     {
        id:5,
        title: 'Checkout',
        href:'/checkout'
    }
];

 export const socialLinks = [
	{
		id: 1,
		title: 'Facebook',
		href: 'https://www.facebook.com',
		icon: <FaFacebookF />,
	},
	{
		id: 2,
		title: 'Twitter',
		href: 'https://www.twitter.com',
		icon: < FaTwitter/>,
	},
	{
		id: 3,
		title: 'Instagram',
		href: 'https://www.instagram.com',
		icon: < FaInstagram />,
	},
	{
		id: 4,
		title: 'Tiktok',
		href: 'https://www.tiktok.com',
		icon: <FaTiktok />,
	},
];