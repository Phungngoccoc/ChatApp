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
import Link from 'next/link'
import React from 'react'
const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]
export default function Header() {
    return (
        <div className='bg-[#000000] text-[#ffffff] w-full'>
            <div className='w-full flex justify-center'>
                <div className='px-1 flex items-center h-[66px] lg:justify-center justify-between w-full'>
                    <figure className="Logo">
                        <a href="/" title="Xem anime Vietsub" rel="home"><img src="https://cdn.animevietsub.show/data/logo/logoz.png" alt="Logo" /></a>
                    </figure>
                    <div className="items-center justify-center gap-x-[10px] flex">
                        <NavigationMenu viewport={false} className='lg:block hidden'>
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
                                <Input className='ring-none border-none focus-none ps-0 placeholder-white placeholder-opacity-100' type="text" name="keyword" placeholder="Tìm: tên tiếng nhật, anh, việt" id="searchkeyword" />
                            </Label>
                        </div>

                        <div className="md:block hidden">
                            <Link href="" className="px-4 bg-[#921616] py-3 rounded-[3px]">Đăng nhập</Link>
                        </div>

                    </div>
                </div>
            </div>
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
        </div >
    )
}
