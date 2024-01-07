import React, { useState } from 'react'
import { Link, useResolvedPath } from 'react-router-dom'
import { IoHomeOutline,IoHappyOutline,IoLogInOutline,IoPeopleOutline, IoReaderOutline} from "react-icons/io5";

const SideBar = () => {
    const [sideOpen, setsideOpen] = useState(false)
    const SideMenu = [
        {
            id: "1",
            title: "Home",
            Sidelogo: <IoHomeOutline />,
            href: "/",
            gap: true
        },
        {
            id: "2",
            title: "About",
            href: "/about",
            Sidelogo:<IoReaderOutline />
        },
        {
            id: "3",
            title: "My Blog",
            href: "/my-blog",
            Sidelogo: <IoHappyOutline />
        },

        {
            id: "4",
            title: "Contact",
            Sidelogo: <IoPeopleOutline />,
            href: "/contact-us",
            gap: true
        },
        {
            id: "5",
            title: "Login",
            href: "/login",
            Sidelogo: <IoLogInOutline />,
        }
    ]
    const sidetoggle = () => {
        sideOpen ? setsideOpen(false) : setsideOpen(true)
    }
    
    const {pathname}=useResolvedPath();

    return (
        <div className=' flex flex-col h-screen w-full justify-start gap-4 p-2 cursor-pointer no-scrollbar scroll-smooth relative'>
            <Link to={"/"} className='w-full rounded-xl p-2 text-center text-xl mt-2 bg-primary-btn'>LOGO</Link>
            {
                SideMenu && SideMenu.map((item) => (
                    <Link  to={item.href} className={`${item.gap ? "mt-10 " : ""} border-b  py-4 ${sideOpen ? "px-8" : "px-2"} ${pathname===item.href && 'bg-secondary-bg'}  hover:text-secondary-text  w-full rounded-md flex items-center gap-x-2 transition-all`} key={item.id}>
                        <span className='text-xl mx-auto'>{item.Sidelogo}</span>
                        {sideOpen && <p className={`mx-auto text-lg ${!sideOpen && 'hidden'}   transition-all `} >{item.title}</p>}
                    </Link>

                ))
            }
            <div className='bg-white w-fit text-xl text-primary-btn rounded-full p-2 absolute -right-5 z-20 top-8' onClick={sidetoggle}>{sideOpen ? "<" : ">"}</div>
        </div>
    )
}

export default SideBar