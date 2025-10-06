import PlayIcon from '@/components/icon/play'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import widge_gif from "../../public/widge.gif"
import img from "../../public/movie.jpg"
import React from 'react'
import StarIcon from '@/components/icon/star'
import Clock from '@/components/icon/clock'
import Calendar from '@/components/icon/calendar'

export default function RightBar() {
    return (
        <div className="lg:col-span-3 col-span-10">
            <div className="widget bg-[#131719] p-[10px]">
                <div className="widg relative pe-4 mb-5">
                    Hôm nay xem gì
                </div>
                <div>
                    <p className="text-[13px] opacity-60 mt-8">
                        Nếu bạn buồn phiền không biết xem gì hôm nay. Hãy để chúng tôi chọn cho bạn
                    </p>
                    <Button className="flex items-center px-3 py-3 mt-4 text-sm bg-[#921616] hover:bg-[#921616] rounded-[5px]">
                        <PlayIcon size={8} color="white" /> Xem Anime ngẫu nhiên
                    </Button>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-center">
                <Image src={widge_gif} alt="gif" />
            </div>
            <div className="mt-4 bg-[#131719] p-[10px]">
                <div className="widg relative pe-4 mb-5 text-[13px]">
                    ANIME MỚI CẬP NHẬT
                </div>
                <div>
                    <ul className="">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <li className="text-[13px]" key={index}>
                                <Link href={`#`} className="flex items-center justify-between border-b border-[#312d28] py-2 group relative list-anime">
                                    <span className="overflow-hidden whitespace-nowrap text-ellipsis text-[#cd8e8e] group-hover:text-white group-hover:translate-x-[10px] transition-all duration-300 relative">Nohara Hiroshi: Hiru Meshi no Ryuugi</span>
                                    <span className="italic !text-[rgb(95_95_95)]">Tập 01</span>
                                </Link>
                            </li>
                        ))}
                        <li className="text-[13px]">
                            <Link href={`#`} className="flex items-center justify-between border-b border-[#312d28] py-2 group relative list-anime">
                                <span className="overflow-hidden whitespace-nowrap text-ellipsis text-white group-hover:translate-x-[10px] transition-all duration-300 relative">Xem thêm...</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-4 bg-[#131719] p-[10px]">
                <div className="widg relative pe-4 mb-5 text-[14px] flex items-center justify-between py-4">
                    <span>HOT TUẦN</span>
                    <Link href={`#`} className="text-[#F44336]">TV/Series</Link>
                    <Link href={`#`} className="opacity-60">Movie/OVA</Link>
                </div>
                <div>
                    <ul className="mt-9">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <li className="text-[13px]" key={index}>
                                <div className="flex mb-4">
                                    <Link href="#" className="relative z-0 group p-2">
                                        <Image src={img} alt="a" width={70} className="rounded-[3px]" />
                                        <div className="w-[22px] h-[22px] absolute top-0 left-0 bg-[#b5e745] flex items-center justify-center rounded-l-[3px] text-[9px] z-3">
                                            {`#${index + 1}`}
                                        </div>
                                        <div className="m-2 flex items-center justify-center absolute inset-0 to-transparent group-hover:bg-black/30 transition-all opacity-100 duration-300 rounded-b-[8px] group-hover:rounded-[1px] z-1">
                                            <div className="w-[20px] h-[20px] rounded-full bg-black/80 border border-[2px] border-black flex items-center justify-center scale-0 group-hover:scale-100 transition-all duration-300">
                                                <PlayIcon size={14} color="white" className="" />
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="ps-4 pt-2 text-[13px]">
                                        <Link href={`#`}>One Piece - Đảo Hải Tặc</Link>
                                        <div className="flex gap-2 mt-1">
                                            <span className="flex items-center text-[12px] text-[#b2df50] font-light">
                                                <StarIcon size={'12px'} color="#b2df50" className="me-1" /> 1123
                                            </span>
                                            <span className="flex items-center text-[12px] text-white font-light">
                                                <Clock size={16} stroke="white" className="opacity-40 me-1" /> 12/12
                                            </span>
                                            <span className="flex items-center text-[12px] text-white font-light">
                                                <Calendar size={16} className="opacity-40 me-1" fill="white" /> 2025
                                            </span>
                                            <span className="text-[10px] py-1 px-3 rounded-full bg-[#b81a12]">
                                                HD
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
