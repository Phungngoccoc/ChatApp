'use client'
import RightBar from '@/components/right-bar'
import React, { useState } from 'react'
import movie_img from "../../../../public/movie_2.jpg"
import Link from 'next/link'
import Image from 'next/image'
import PlayIcon from '@/components/icon/play'
import StarIcon from '@/components/icon/star-full'
import StarEmptyIcon from '@/components/icon/star-empty'
import Clock from '@/components/icon/clock'
import Calendar from '@/components/icon/calendar'
import EyeIcon from '@/components/icon/eye'
import FileIcon from '@/components/icon/file'
import Movie from '@/components/icon/movie'
import Camera from '@/components/icon/camera'
import ImageIcon from '@/components/icon/image'

export default function DetailMovie() {
    const [activeTab, setActiveTab] = useState<'info' | 'character' | 'trailer' | 'images'>('info');
    const baseClass = 'text-[14px] flex items-center pb-3 cursor-pointer';
    const activeClass = 'text-[#b9e850] border-b-[4px] border-[#b9e850]';
    return (
        <div className="container bg-[#0c1012] py-2 px-4">
            <div className="grid grid-cols-10 gap-4 pt-4">
                <div className="col-span-10 lg:col-span-7 relative">
                    <div className={`bg-[url('/banner.png')] p-5 relative bg-cover`}>
                        <div className='absolute bg-black/80 top-0 left-0 w-full h-full z-3'></div>
                        <div className='flex md:flex-row flex-col items-center md:items-start'>
                            <Link href="/phim/test" className="relative group !min-w-[180px] w-fit h-fit block overflow-hidden rounded-[3px] z-4 md:order-1 order-2">
                                <Image src={movie_img} alt="a" className="rounded-[3px]" width={180} />
                                <div className="flex items-center justify-center absolute inset-0 group-hover:bg-black/30 transition-all opacity-100 duration-300 z-1">
                                    <div className="w-[50px] h-[50px] rounded-full bg-black/50 border-[2px] border-black flex items-center justify-center scale-100 group-hover:scale-100 transition-all duration-300">
                                        <PlayIcon size={14} color="white" />
                                    </div>
                                </div>
                                <div className='absolute text-[20px] bg-[#ff000099] w-full z-5 bottom-[15px] left-0 text-center py-1'>
                                    XEM PHIM
                                </div>
                            </Link>
                            <div className='z-4 px-4 pt-2 !w-full overflow-hidden  md:order-2 order-1 md:mb-0 mb-3'>
                                <h1 className='text-[#b5e745] text-[30px] font-light overflow-hidden whitespace-nowrap text-ellipsis'>Bí Mật Của Phù Thủy Tĩnh Lặng</h1>
                                <h2 className='text-[16px] overflow-hidden whitespace-nowrap text-ellipsis'>Silent Witch: Chinmoku no Majo no Kakushigoto, Secrets of the Silent Witch</h2>
                                <div className='!max-h-[150px] overflow-y-scroll mt-2 text-[13px] opacity-70 text-justify pe-2 m-0 custom-scrollbar md:block hidden'>
                                    Pháp sư thiên tài Monica Everett là một cô gái cực kỳ nhút nhát và ngại giao tiếp trước đám đông. Sau bao nhiêu nỗ lực, Monica cuối cùng cũng đã học được và thông thạo thuật vô niệm, khả năng sử dụng phép thuật mà không cần niệm chú. Ở tuổi 15, cô đã được chọn làm một trong Bảy Hiền Nhân, bảy pháp sư mạnh mẽ nhất vương quốc, với danh hiệu Phù Thủy Tĩnh Lặng. Và rồi, Monica bắt đầu một cuộc sống ẩn dật yên bình trong rừng. Tuy vậy, hai năm sau, vào một ngày nọ, Monica nhận được một yêu cầu. Đó chính là bí mật bảo vệ Nhị Hoàng Tử đang theo học trong Học Viện. Để hoàn thành yêu cầu đó, Monica buộc phải thâm nhập vào một học viện xa hoa chỉ dành cho con em quý tộc theo học. "Không muốn đâu....Sợ lắm.....Ưư...cái dạ dày của tôi..." Tiếng khóc thút thít của cô gái rồi cũng bị những cơn gió cuốn bay đi thật xa.
                                </div>
                            </div>
                            <div className='order-3 md:hidden z-4'>
                                <div className='!max-h-[150px] overflow-y-scroll mt-2 text-[13px] opacity-70 z-4 text-justify pe-2 m-0 custom-scrollbar'>
                                    Pháp sư thiên tài Monica Everett là một cô gái cực kỳ nhút nhát và ngại giao tiếp trước đám đông. Sau bao nhiêu nỗ lực, Monica cuối cùng cũng đã học được và thông thạo thuật vô niệm, khả năng sử dụng phép thuật mà không cần niệm chú. Ở tuổi 15, cô đã được chọn làm một trong Bảy Hiền Nhân, bảy pháp sư mạnh mẽ nhất vương quốc, với danh hiệu Phù Thủy Tĩnh Lặng. Và rồi, Monica bắt đầu một cuộc sống ẩn dật yên bình trong rừng. Tuy vậy, hai năm sau, vào một ngày nọ, Monica nhận được một yêu cầu. Đó chính là bí mật bảo vệ Nhị Hoàng Tử đang theo học trong Học Viện. Để hoàn thành yêu cầu đó, Monica buộc phải thâm nhập vào một học viện xa hoa chỉ dành cho con em quý tộc theo học. "Không muốn đâu....Sợ lắm.....Ưư...cái dạ dày của tôi..." Tiếng khóc thút thít của cô gái rồi cũng bị những cơn gió cuốn bay đi thật xa.
                                </div>
                            </div>
                        </div>
                        <div className='text-white flex mt-4'>
                            <div className='z-5 border-t border-white/60 w-full pt-4 ps-2 flex'>
                                <div className='w-[50px] h-[50px] border-2 border-[#b9e850] z-5 rounded-full text-[12px] text-white flex items-center justify-center font-bold' >
                                    95%
                                </div>
                                <div className='flex flex-col ms-3 justify-center'>
                                    <div className='flex items-center '>
                                        {Array.from({ length: 9 }).map((_, index) => (
                                            <StarIcon key={index} />
                                        ))}
                                        <StarEmptyIcon />
                                    </div>
                                    <div className='text-[10px] mt-1'>(Đánh giá <strong>9.5</strong>/10 từ <strong>2083</strong> thành viên)</div>
                                </div>
                                <div className="flex gap-2 mt-1 ms-6">
                                    <span className="flex items-center text-[12px] text-white font-light">
                                        <Clock size={16} stroke="white" className="opacity-40 me-1" /> 12/12
                                    </span>
                                    <span className="flex items-center text-[12px] text-white font-light">
                                        <Calendar size={16} className="opacity-40 me-1" fill="white" /> 2025
                                    </span>
                                    <span className="flex items-center text-[12px] text-white font-light">
                                        <EyeIcon width={16} height={16} fill="#ccc" className='opacity-40 me-1' /> 1,111,111 Lượt xem
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-x-10">
                        <div
                            className={`${baseClass} ${activeTab === 'info' ? activeClass : 'text-gray-400'}`}
                            onClick={() => setActiveTab('info')}
                        >
                            <FileIcon width={24} height={24} fillColor={activeTab === 'info' ? '#b9e850' : '#999'} className="me-2" />
                            Thông tin phim
                        </div>

                        <div
                            className={`${baseClass} ${activeTab === 'character' ? activeClass : 'text-gray-400'}`}
                            onClick={() => setActiveTab('character')}
                        >
                            <Movie size={20} color={activeTab === 'character' ? '#b9e850' : '#999'} className="me-2" />
                            Nhân vật
                        </div>

                        <div
                            className={`${baseClass} ${activeTab === 'trailer' ? activeClass : 'text-gray-400'}`}
                            onClick={() => setActiveTab('trailer')}
                        >
                            <Camera size={30} color={activeTab === 'trailer' ? '#b9e850' : 'white'} className="me-2" />
                            Trailer
                        </div>

                        <div
                            className={`${baseClass} ${activeTab === 'images' ? activeClass : 'text-gray-400'}`}
                            onClick={() => setActiveTab('images')}
                        >
                            <ImageIcon width={24} height={24} fillColor={activeTab === 'images' ? '#b9e850' : '#999'} className="me-2" />
                            Hình ảnh
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <RightBar />
            </div>
        </div>
    )
}
