'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "../../public/logo.png"

export default function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const handleOpenMenu = (state: boolean) => {
        setIsOpenMenu(state)
    }

    const toggleSubMenu = (menuId: string) => {
        if (openSubMenu !== menuId) {
            setOpenSubMenu(menuId);
        } else {
            setOpenSubMenu(null);
        }
    };

    return (
        <div className='bg-[#000000] text-[#ffffff] w-full sticky top-0 z-9999'>
            <div className='w-full flex justify-center'>
                <div className='px-1 flex items-center h-[66px] lg:justify-center justify-between w-full'>
                    <figure className="Logo">
                        <Link href="/" title="Xem anime Vietsub" rel="home"><Image src={logo} alt="Logo" /></Link>
                    </figure>
                    <div className="items-center justify-center gap-x-[10px] flex pe-2">
                        <NavigationMenu viewport={false} className='lg:block hidden'>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="/">TRANG CHỦ</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>DẠNG ANIME</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid grid-cols-3 w-[400px] gap-y-5 text-left py-3 text-white">
                                            <div className="col-span-1 px-2">
                                                <Link
                                                    className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                                    href="/loc/dang-phim/tv-series"
                                                >
                                                    TV/Series
                                                </Link>
                                            </div>
                                            <div className="col-span-1 px-2">
                                                <Link
                                                    className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                                    href="/loc/dang-phim/anime-le"
                                                >
                                                    Movie/OVA
                                                </Link>
                                            </div>
                                            <div className="col-span-1 px-2">
                                                <Link
                                                    className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                                    href="/loc/dang-phim/hoat-hinh-trung-quoc"
                                                >
                                                    HH Trung Quốc
                                                </Link>
                                            </div>
                                            <div className="col-span-1 px-2">
                                                <Link
                                                    className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                                    href="/loc/dang-phim/anime-sap-chieu"
                                                >
                                                    Anime sắp chiếu
                                                </Link>
                                            </div>
                                            <div className="col-span-1 px-2">
                                                <Link
                                                    className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                                    href="/loc/dang-phim/anime-dang-chieu"
                                                >
                                                    Anime đang chiếu
                                                </Link>
                                            </div>
                                            <div className="col-span-1 px-2">
                                                <Link
                                                    className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                                    href="/loc/dang-phim/anime-tron-bo"
                                                >
                                                    Anime trọn bộ
                                                </Link>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>TOP ANIME</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid grid-cols-3 w-[400px] gap-y-5 text-left py-3 text-white">
                                            <div className="col-span-1 px-2">
                                                <Link
                                                    className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                                    href="/bang-xep-hang/theo-ngay"
                                                >
                                                    Theo ngày
                                                </Link>
                                            </div>
                                            <div className="col-span-1 px-2">
                                                <Link
                                                    className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                                    href="/bang-xep-hang/yeu-thich"
                                                >
                                                    Yêu thích
                                                </Link>
                                            </div>
                                            <div className="col-span-1 px-2">
                                                <Link
                                                    className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                                    href="/bang-xep-hang/theo-thang"
                                                >
                                                    Theo tháng
                                                </Link>
                                            </div>
                                            <div className="col-span-1 px-2">
                                                <Link
                                                    className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                                    href="/bang-xep-hang/theo-mua"
                                                >
                                                    Theo mùa
                                                </Link>
                                            </div>
                                            <div className="col-span-1 px-2">
                                                <Link
                                                    className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                                    href="/bang-xep-hang/theo-nam"
                                                >
                                                    Theo năm
                                                </Link>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>THỂ LOẠI</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid grid-cols-3 w-[400px] gap-y-5 text-left py-3 text-white max-h-[300px] overflow-y-scroll thin-scrollbar">
                                            {[
                                                "Action",
                                                "Adventure",
                                                "Comedy",
                                                "Drama",
                                                "Fantasy",
                                                "Sci-Fi",
                                                "Horror",
                                                "Romance",
                                                "Mystery",
                                                "Thriller",
                                                "Historical",
                                                "Supernatural",
                                                "HH Trung Quốc",
                                                "Slice of Life",
                                                "School",
                                                "Music",
                                                "Game",
                                                "Anime sắp chiếu",
                                                "Anime đang chiếu",
                                                "Anime trọn bộ",
                                                "Sports",
                                                "Action Comedy",
                                                "Action Drama",
                                                "Psychological",
                                                "Military",
                                                "Mecha",
                                                "Slice of Life Romance",
                                                "Magical Girl",
                                                "Romantic Comedy",
                                                "Sports Drama",
                                                "Action Fantasy",
                                                "Adventure Fantasy",
                                                "Cyberpunk",
                                                "Shoujo",
                                                "Shounen",
                                                "Seinen",
                                                "Josei",
                                                "Isekai",
                                                "Time Travel",
                                                "Parody",
                                                "Gore",
                                                "Detective",
                                                "Food",
                                                "Superhero",
                                                "Tragedy",
                                                "Incest",
                                                "School Romance",
                                                "Historical Romance",
                                            ].map((genre) => (
                                                <div key={genre} className="col-span-1 px-2">
                                                    <Link
                                                        className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                                        href="/loc/the-loai/hanh-dong"
                                                    >
                                                        {genre}
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>SEASON</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid grid-cols-3 w-[450px] gap-y-5 text-left py-3 text-white max-h-[300px] overflow-y-scroll thin-scrollbar">
                                            {[
                                                "Mùa Đông 2025",
                                                "Mùa Xuân 2025",
                                                "Mùa Hè 2025",
                                                "Mùa Thu 2025",
                                                "Mùa Đông 2024",
                                                "Mùa Xuân 2024",
                                                "Mùa Hè 2024",
                                                "Mùa Thu 2024",
                                                "Mùa Đông 2023",
                                                "Mùa Xuân 2023",
                                                "Mùa Hè 2023",
                                                "Mùa Thu 2023",
                                                "Mùa Đông 2022",
                                                "Mùa Xuân 2022",
                                                "Mùa Hè 2022",
                                                "Mùa Thu 2022",
                                                "Mùa Đông 2021",
                                                "Mùa Xuân 2021",
                                                "Mùa Hè 2021",
                                                "Mùa Thu 2021",
                                            ].map((season) => (
                                                <div key={season} className="col-span-1 px-2">
                                                    <Link
                                                        className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                                        href="/loc/mua/mua-thu-2025"
                                                    >
                                                        {season}
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="/thu-vien">THƯ VIỆN</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="/lich-chieu">LỊCH CHIẾU</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <div className="search border border-white/30 px-4 py-1 rounded-[3px] md:block hidden" id="search_desktop">
                            <Label className="flex">
                                <svg
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#ccc"
                                    className='opacity-40'
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                                            stroke="#ffffff"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </g>
                                </svg>
                                <Input className='ring-none border-none focus-none ps-0 placeholder-white w-[100px] placeholder-opacity-100 pe-0' type="text" name="keyword" placeholder="Tìm kiếm" id="searchkeyword" />
                            </Label>
                        </div>
                        <div className="md:block hidden">
                            <Link href="" className="px-4 bg-[#921616] py-3 rounded-[3px] text-nowrap">Đăng nhập</Link>
                        </div>
                        <div className="flex md:hidden me-6 z-20">
                            <Button type="button" className="-m-2.5 bg-[#921616] inline-flex items-center justify-center rounded-md p-2.5 hover:bg-[#be2626] cursor-pointer w-[50px] h-[50px]" onClick={() => handleOpenMenu(isOpenMenu === false ? true : false)}>
                                <AnimatePresence mode="wait" initial={false}>
                                    {isOpenMenu === false ? (
                                        <motion.svg
                                            key="menu"
                                            className="size-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="#000000"
                                            aria-hidden="true"
                                            data-slot="icon"
                                            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                            transition={{ duration: 0.1 }}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                            />
                                        </motion.svg>
                                    ) : (
                                        <motion.svg
                                            key="close"
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                            transition={{ duration: 0.1 }}
                                        >
                                            <path
                                                d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                                                fill="#000000"
                                            />
                                        </motion.svg>
                                    )}
                                </AnimatePresence>
                            </Button>
                        </div>
                    </div>
                </div>
            </div >
            <div className='w-full justify-center items-center lg:hidden md:flex hidden'>
                <NavigationMenu viewport={false} className='h-[40px]'>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs">TRANG CHỦ</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>DẠNG ANIME</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid grid-cols-3 w-[400px] gap-y-5 text-left py-3 text-white">
                                    <div className="col-span-1 px-2">
                                        <Link
                                            className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                            href="#"
                                        >
                                            TV/Series
                                        </Link>
                                    </div>
                                    <div className="col-span-1 px-2">
                                        <Link
                                            className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                            href="#"
                                        >
                                            Movie/OVA
                                        </Link>
                                    </div>
                                    <div className="col-span-1 px-2">
                                        <Link
                                            className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                            href="#"
                                        >
                                            HH Trung Quốc
                                        </Link>
                                    </div>
                                    <div className="col-span-1 px-2">
                                        <Link
                                            className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                            href="#"
                                        >
                                            Anime sắp chiếu
                                        </Link>
                                    </div>
                                    <div className="col-span-1 px-2">
                                        <Link
                                            className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                            href="#"
                                        >
                                            Anime đang chiếu
                                        </Link>
                                    </div>
                                    <div className="col-span-1 px-2">
                                        <Link
                                            className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                            href="#"
                                        >
                                            Anime trọn bộ
                                        </Link>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>TOP ANIME</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid grid-cols-3 w-[400px] gap-y-5 text-left py-3 text-white">
                                    <div className="col-span-1 px-2">
                                        <Link
                                            className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                            href="#"
                                        >
                                            Theo ngày
                                        </Link>
                                    </div>
                                    <div className="col-span-1 px-2">
                                        <Link
                                            className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                            href="#"
                                        >
                                            Yêu thích
                                        </Link>
                                    </div>
                                    <div className="col-span-1 px-2">
                                        <Link
                                            className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                            href="#"
                                        >
                                            Theo tháng
                                        </Link>
                                    </div>
                                    <div className="col-span-1 px-2">
                                        <Link
                                            className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                            href="#"
                                        >
                                            Theo mùa
                                        </Link>
                                    </div>
                                    <div className="col-span-1 px-2">
                                        <Link
                                            className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                            href="#"
                                        >
                                            Theo năm
                                        </Link>
                                    </div>
                                    <div className="col-span-1 px-2">
                                        <Link
                                            className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                            href="#"
                                        >
                                            Anime trọn bộ
                                        </Link>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>THỂ LOẠI</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid grid-cols-3 w-[400px] gap-y-5 text-left py-3 text-white max-h-[300px] overflow-y-scroll thin-scrollbar">
                                    {[
                                        "Action",
                                        "Adventure",
                                        "Comedy",
                                        "Drama",
                                        "Fantasy",
                                        "Sci-Fi",
                                        "Horror",
                                        "Romance",
                                        "Mystery",
                                        "Thriller",
                                        "Historical",
                                        "Supernatural",
                                        "HH Trung Quốc",
                                        "Slice of Life",
                                        "School",
                                        "Music",
                                        "Game",
                                        "Anime sắp chiếu",
                                        "Anime đang chiếu",
                                        "Anime trọn bộ",
                                        "Sports",
                                        "Action Comedy",
                                        "Action Drama",
                                        "Psychological",
                                        "Military",
                                        "Mecha",
                                        "Slice of Life Romance",
                                        "Magical Girl",
                                        "Romantic Comedy",
                                        "Sports Drama",
                                        "Action Fantasy",
                                        "Adventure Fantasy",
                                        "Cyberpunk",
                                        "Shoujo",
                                        "Shounen",
                                        "Seinen",
                                        "Josei",
                                        "Isekai",
                                        "Time Travel",
                                        "Parody",
                                        "Gore",
                                        "Detective",
                                        "Food",
                                        "Superhero",
                                        "Tragedy",
                                        "Incest",
                                        "School Romance",
                                        "Historical Romance",
                                    ].map((genre) => (
                                        <div key={genre} className="col-span-1 px-2">
                                            <Link
                                                className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                                href="#"
                                            >
                                                {genre}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>SEASON</NavigationMenuTrigger>
                            <NavigationMenuContent className='translate-x-[-150px]'>
                                <div className="grid grid-cols-3 w-[450px] gap-y-5 text-left py-3 text-white max-h-[300px] overflow-y-scroll thin-scrollbar">
                                    {[
                                        "Mùa Đông 2025",
                                        "Mùa Xuân 2025",
                                        "Mùa Hè 2025",
                                        "Mùa Thu 2025",
                                        "Mùa Đông 2024",
                                        "Mùa Xuân 2024",
                                        "Mùa Hè 2024",
                                        "Mùa Thu 2024",
                                        "Mùa Đông 2023",
                                        "Mùa Xuân 2023",
                                        "Mùa Hè 2023",
                                        "Mùa Thu 2023",
                                        "Mùa Đông 2022",
                                        "Mùa Xuân 2022",
                                        "Mùa Hè 2022",
                                        "Mùa Thu 2022",
                                        "Mùa Đông 2021",
                                        "Mùa Xuân 2021",
                                        "Mùa Hè 2021",
                                        "Mùa Thu 2021",
                                    ].map((season) => (
                                        <div key={season} className="col-span-1 px-2">
                                            <Link
                                                className="block overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-60"
                                                href="#"
                                            >
                                                {season}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs">THƯ VIỆN</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs">LỊCH CHIẾU</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div
                className={`${isOpenMenu ? "" : "pointer-events-none"} md:hidden `}
                role="dialog"
                aria-modal="true"
                id="sidebar"
            >
                <div
                    className={`fixed inset-0 z-0 transition-opacity duration-300 ${isOpenMenu ? "opacity-100" : "opacity-0 pointer-events-none"
                        } bg-gray/10 backdrop-blur-sm`}
                    onClick={() => setIsOpenMenu(false)}
                />

                <div
                    className={`ps-2 thin-scrollbar2 bg-[#0e1113] fixed inset-y-0 left-[-5px] z-10 w-[270px] max-w-sm overflow-y-auto shadow-lg transform transition-transform duration-300 ${isOpenMenu ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className=" flex items-center justify-between p-4">
                        <Link href={`#`} className="bg-[#000000] p-4">
                            <Label className='w-[200px] bg-[#841515] text-center flex justify-center py-2 text-sm rounded-[3px]'>Đăng nhập</Label>
                        </Link>
                    </div>
                    <div className="flow-root text-white">
                        <ul>
                            <li className='text-[13px]'>
                                <Link href={`#`}>TRANG CHỦ</Link>
                            </li>
                        </ul>
                        <ul>
                            <li className='text-[13px]'>
                                <Button
                                    onClick={() => toggleSubMenu('sub_menu_1')}
                                    className={`dropdown-btn p-0 m-0 ${openSubMenu === 'sub_menu_1' ? 'rotate' : ''}`}>
                                    <span>DẠNG ANIME</span>
                                    <svg
                                        width={`24px`}
                                        height={`24px`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke={`#b5e745`}
                                        strokeWidth={`2`}
                                        transform="rotate(180)"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z"
                                            fill={`#b5e745`}
                                        />
                                    </svg>
                                </Button>
                                <ul className={`sub-menu ${openSubMenu === 'sub_menu_1' ? 'show' : ''}`}>
                                    <div className='grid grid-cols-2 p-0 text-[11px] bg-black/20'>
                                        <Link href={`#`} className='col-span-1 !ps-4'>TV/Series</Link>
                                        <Link href={`#`} className='col-span-1 !ps-4'>Movie/OVA</Link>
                                        <Link href={`#`} className='col-span-1 !ps-4'>HH Trung Quốc</Link>
                                        <Link href={`#`} className='col-span-1 !ps-4'>Anime sắp chiếu</Link>
                                        <Link href={`#`} className='col-span-1 !ps-4'>Anime đang chiếu</Link>
                                        <Link href={`#`} className='col-span-1 !ps-4'>Anime trọn bộ</Link>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li className='text-[13px]'>
                                <Button
                                    onClick={() => toggleSubMenu('sub_menu_2')}
                                    className={`dropdown-btn p-0 m-0 ${openSubMenu === 'sub_menu_2' ? 'rotate' : ''}`}>
                                    <span>TOP ANIME</span>
                                    <svg
                                        width={`24px`}
                                        height={`24px`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke={`#b5e745`}
                                        strokeWidth={`2`}
                                        transform="rotate(180)"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z"
                                            fill={`#b5e745`}
                                        />
                                    </svg>
                                </Button>
                                <ul className={`sub-menu ${openSubMenu === 'sub_menu_2' ? 'show' : ''}`}>
                                    <div className='grid grid-cols-2 p-0 text-[11px] bg-black/20'>
                                        <Link href={`#`} className='col-span-1 !ps-4'>Theo ngày</Link>
                                        <Link href={`#`} className='col-span-1 !ps-4'>Yêu thích</Link>
                                        <Link href={`#`} className='col-span-1 !ps-4'>Theo tháng</Link>
                                        <Link href={`#`} className='col-span-1 !ps-4'>Theo mùa</Link>
                                        <Link href={`#`} className='col-span-1 !ps-4'>Theo năm</Link>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li className='text-[13px]'>
                                <Button
                                    onClick={() => toggleSubMenu('sub_menu_3')}
                                    className={`dropdown-btn p-0 m-0 ${openSubMenu === 'sub_menu_3' ? 'rotate' : ''}`}>
                                    <span>THỂ LOẠI</span>
                                    <svg
                                        width={`24px`}
                                        height={`24px`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke={`#b5e745`}
                                        strokeWidth={`2`}
                                        transform="rotate(180)"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z"
                                            fill={`#b5e745`}
                                        />
                                    </svg>
                                </Button>
                                <ul className={`sub-menu ${openSubMenu === 'sub_menu_3' ? 'show' : ''}`}>
                                    <div className='grid grid-cols-2 p-0 text-[11px] bg-black/20'>
                                        {[
                                            "Action",
                                            "Adventure",
                                            "Comedy",
                                            "Drama",
                                            "Fantasy",
                                            "Sci-Fi",
                                            "Horror",
                                            "Romance",
                                            "Mystery",
                                            "Thriller",
                                            "Historical",
                                            "Supernatural",
                                            "HH Trung Quốc",
                                            "Slice of Life",
                                            "School",
                                            "Music",
                                            "Game",
                                            "Anime sắp chiếu",
                                            "Anime đang chiếu",
                                            "Anime trọn bộ",
                                            "Sports",
                                            "Action Comedy",
                                            "Action Drama",
                                            "Psychological",
                                            "Military",
                                            "Mecha",
                                            "Slice of Life Romance",
                                            "Magical Girl",
                                            "Romantic Comedy",
                                            "Sports Drama",
                                            "Action Fantasy",
                                            "Adventure Fantasy",
                                            "Cyberpunk",
                                            "Shoujo",
                                            "Shounen",
                                            "Seinen",
                                            "Josei",
                                            "Isekai",
                                            "Time Travel",
                                            "Parody",
                                            "Gore",
                                            "Detective",
                                            "Food",
                                            "Superhero",
                                            "Tragedy",
                                            "Incest",
                                            "School Romance",
                                            "Historical Romance",
                                        ].map((genre) => (
                                            <Link key={genre} href={`#`} className='col-span-1 !ps-4'>{genre}</Link>
                                        ))}
                                    </div>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li className='text-[13px]'>
                                <Button
                                    onClick={() => toggleSubMenu('sub_menu_4')}
                                    className={`dropdown-btn p-0 m-0 ${openSubMenu === 'sub_menu_4' ? 'rotate' : ''}`}>
                                    <span>TOP ANIME</span>
                                    <svg
                                        width={`24px`}
                                        height={`24px`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke={`#b5e745`}
                                        strokeWidth={`2`}
                                        transform="rotate(180)"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z"
                                            fill={`#b5e745`}
                                        />
                                    </svg>
                                </Button>
                                <ul className={`sub-menu ${openSubMenu === 'sub_menu_4' ? 'show' : ''}`}>
                                    <div className='grid grid-cols-2 p-0 text-[11px] bg-black/20'>
                                        {[
                                            "Mùa Đông 2025",
                                            "Mùa Xuân 2025",
                                            "Mùa Hè 2025",
                                            "Mùa Thu 2025",
                                            "Mùa Đông 2024",
                                            "Mùa Xuân 2024",
                                            "Mùa Hè 2024",
                                            "Mùa Thu 2024",
                                            "Mùa Đông 2023",
                                            "Mùa Xuân 2023",
                                            "Mùa Hè 2023",
                                            "Mùa Thu 2023",
                                            "Mùa Đông 2022",
                                            "Mùa Xuân 2022",
                                            "Mùa Hè 2022",
                                            "Mùa Thu 2022",
                                            "Mùa Đông 2021",
                                            "Mùa Xuân 2021",
                                            "Mùa Hè 2021",
                                            "Mùa Thu 2021",
                                        ].map((season) => (
                                            <Link key={season} href={`#`} className='col-span-1 !ps-4'>{season}</Link>
                                        ))}
                                    </div>
                                </ul>
                            </li>

                        </ul>
                        <ul>
                            <li className='text-[13px]'>
                                <Link href={`#`}>THƯ VIỆN</Link>
                            </li>
                        </ul>
                        <ul>
                            <li className='text-[13px]'>
                                <Link href={`#`}>LỊCH CHIẾU</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
