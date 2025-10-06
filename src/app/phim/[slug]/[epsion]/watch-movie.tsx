'use client'
import RightBar from '@/components/right-bar'
import React, { useState } from 'react'
import movie_img from "../../../../../public/movie_2.jpg"
import Link from 'next/link'
import Image from 'next/image'
import PlayIcon from '@/components/icon/play'
import StarEmptyIcon from '@/components/icon/star-empty'
import Clock from '@/components/icon/clock'
import Calendar from '@/components/icon/calendar'
import EyeIcon from '@/components/icon/eye'
import StarIcons from '@/components/icon/star-full'
import { NextIcon } from '@/components/icon/next'
import { CommentIcon } from '@/components/icon/comment'
import { BulbIcon } from '@/components/icon/bulb'
import { BookmarkIcon } from '@/components/icon/bookmark'
import { FrameIcon } from '@/components/icon/frame'
import { ErrorIcon } from '@/components/icon/error'
import { CameraFrontIcon } from '@/components/icon/camera-front'
import { DownloadIcon } from '@/components/icon/download'
import { HistoryIcon } from 'lucide-react'
import { ServerIcon } from '@/components/icon/server'
export default function WatchMovie() {

    return (
        <div className="container bg-[#0c1012] py-2 px-4">
            <div className="grid grid-cols-10 gap-4 pt-4">
                <div className="col-span-10 lg:col-span-7 relative">
                    <div className='col-span-full'>
                        <iframe width="100%" height="100%" className='aspect-16/9' src="https://www.youtube.com/embed/0OBF29HoV4A?si=CSvTUopIPtOTAp7y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    </div>
                    <div className='col-span-full text-[14px] flex items-center flex-wrap justify-center mb-4'>
                        <div className='flex items-center px-3 py-2 mt-2'><NextIcon fill="#ccc" className='opacity-70 me-2' width={14} height={14} /> Tập tiếp</div>
                        <div className='flex items-center px-3 py-2 mt-2'><CommentIcon fill="#ccc" className='opacity-70 me-2' width={20} height={20} /> Bình luận</div>
                        <div className='flex items-center px-3 py-2 mt-2'><BulbIcon fill="#ccc" className='opacity-70 me-2' width={20} height={20} /> Tắt đèn</div>
                        <div className='flex items-center px-3 py-2 mt-2'><BookmarkIcon fill="#ccc" className='opacity-70 me-2' width={16} height={16} /> Theo dõi</div>
                        <div className='flex items-center px-3 py-2 mt-2'><FrameIcon rotate={90} fill="#ccc" className='opacity-70 me-2' width={20} height={20} /> Phóng to</div>
                        <div className='flex items-center px-3 py-2 mt-2'><ErrorIcon fill="#ccc" className='opacity-70 me-2' width={20} height={20} /> Báo lỗi</div>
                        <div className='flex items-center px-3 py-2 mt-2'><CameraFrontIcon stroke='#ccc' className='opacity-70 me-2' width={23} height={23} /> Chụp ảnh</div>
                        <div className='flex items-center px-3 py-2 mt-2'><DownloadIcon fill="#ccc" className='opacity-70 me-2' width={20} height={20} /> Tải về</div>
                        <div className='flex items-center px-3 py-2 mt-2'><HistoryIcon stroke="#ccc" className='opacity-70 me-2' width={20} height={20} /> Lịch sử xem</div>
                    </div>
                    <div className='col-span-full bg-[#131719] mb-4 text-white p-4'>
                        <div className='flex text-[12px]'><ServerIcon fill="#ccc" className='opacity-70 me-2' width={15} height={15} />ANIMEVSUB</div>
                        <div className='p-4 text-white flex flex-wrap gap-3'>
                            {Array.from({ length: 13 }).map((_, index) => (
                                <div key={index} className={`w-[40px] h-[40px] flex items-center justify-center border border-[#2c3032] rounded-[4px] ${index === 0 ? 'bg-[#e50914]' : 'bg-[#2c3032]'}`}><Link href={`/phim/test/tap-01`} >{index > 8 ? '' : '0'}{index + 1}</Link></div>
                            ))}
                        </div>
                    </div>
                    <div className={`bg-[url('/banner.png')] p-5 relative bg-cover relative col-span-full`}>
                        <div className='absolute bg-black/80 top-0 left-0 w-full h-full z-3'></div>
                        <div className='flex md:flex-row flex-col items-center md:items-start'>
                            <Link href="/phim/test/tap-01" className="relative group !min-w-[180px] w-fit h-fit block overflow-hidden rounded-[3px] z-4 md:order-1 order-2">
                                <Image src={movie_img} alt="a" className="rounded-[3px]" />
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
                                <h2 className='text-[16px] overflow-hidden whitespace-nowrap text-ellipsis'>Silent Witch: Chinmoku no Majo no Kakushigoto Secrets of the Silent Witch</h2>
                                <div className='!max-h-[150px] overflow-y-scroll mt-2 text-[13px] opacity-70 text-justify pe-2 m-0 custom-scrollbar md:block hidden'>
                                    Pháp sư thiên tài Monica Everett là một cô gái cực kỳ nhút nhát và ngại giao tiếp trước đám đông. Sau bao nhiêu nỗ lực Monica cuối cùng cũng đã học được và thông thạo thuật vô niệm khả năng sử dụng phép thuật mà không cần niệm chú. Ở tuổi 15 cô đã được chọn làm một trong Bảy Hiền Nhân bảy pháp sư mạnh mẽ nhất vương quốc với danh hiệu Phù Thủy Tĩnh Lặng. Và rồi Monica bắt đầu một cuộc sống ẩn dật yên bình trong rừng. Tuy vậy hai năm sau vào một ngày nọ Monica nhận được một yêu cầu. Đó chính là bí mật bảo vệ Nhị Hoàng Tử đang theo học trong Học Viện. Để hoàn thành yêu cầu đó Monica buộc phải thâm nhập vào một học viện xa hoa chỉ dành cho con em quý tộc theo học. Không muốn đâu....Sợ lắm.....Ưư...cái dạ dày của tôi... Tiếng khóc thút thít của cô gái rồi cũng bị những cơn gió cuốn bay đi thật xa.
                                </div>
                            </div>
                            <div className='order-3 md:hidden z-4'>
                                <div className='!max-h-[150px] overflow-y-scroll mt-2 text-[13px] opacity-70 z-4 text-justify pe-2 m-0 custom-scrollbar'>
                                    Pháp sư thiên tài Monica Everett là một cô gái cực kỳ nhút nhát và ngại giao tiếp trước đám đông. Sau bao nhiêu nỗ lực Monica cuối cùng cũng đã học được và thông thạo thuật vô niệm khả năng sử dụng phép thuật mà không cần niệm chú. Ở tuổi 15 cô đã được chọn làm một trong Bảy Hiền Nhân bảy pháp sư mạnh mẽ nhất vương quốc với danh hiệu Phù Thủy Tĩnh Lặng. Và rồi Monica bắt đầu một cuộc sống ẩn dật yên bình trong rừng. Tuy vậy hai năm sau vào một ngày nọ Monica nhận được một yêu cầu. Đó chính là bí mật bảo vệ Nhị Hoàng Tử đang theo học trong Học Viện. Để hoàn thành yêu cầu đó Monica buộc phải thâm nhập vào một học viện xa hoa chỉ dành cho con em quý tộc theo học. Không muốn đâu....Sợ lắm.....Ưư...cái dạ dày của tôi... Tiếng khóc thút thít của cô gái rồi cũng bị những cơn gió cuốn bay đi thật xa.
                                </div>
                            </div>
                        </div>
                        <div className='text-white flex'>
                            <div className='z-5 border-t border-white/60 w-full pt-4 ps-2 flex sm:flex-row flex-col'>
                                <div className='flex'>
                                    <div className='w-[50px] h-[50px] border-2 border-[#b9e850] z-5 rounded-full text-[12px] text-white flex items-center justify-center font-bold' >
                                        95%
                                    </div>
                                    <div className='flex flex-col ms-3 justify-center'>
                                        <div className='flex items-center '>
                                            {Array.from({ length: 9 }).map((_, index) => (
                                                <StarIcons key={index} />
                                            ))}
                                            <StarEmptyIcon />
                                        </div>
                                        <div className='text-[10px] mt-1'>(Đánh giá <strong>9.5</strong>/10 từ <strong>2083</strong> thành viên)</div>
                                    </div>
                                </div>
                                <div className="gap-2 mt-1 ms-6 sm:flex  hidden">
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
                                <div className="flex gap-2 mt-1 sm:hidden mt-4 ms-1">
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
                        <div className='z-5 flex mt-3 gap-x-3 text-[14px] overflow-x-scroll w-full whitespace-nowrap py-4 bottom-scrollbar relative'>
                            <Link href={`#`} className='border border-[#ccc] px-3 py-1 bg-[#7d9d14] rounded-[3px] flex items-center justify-center z-4'>Phần 1</Link>
                            <Link href={`#`} className='border border-[#ccc] px-3 py-1 bg-[#1a1c1d] rounded-[3px] flex items-center justify-center z-4'>Phần 1 Part 2</Link>
                            <Link href={`#`} className='border border-[#ccc] px-3 py-1 bg-[#1a1c1d] rounded-[3px] flex items-center justify-center z-4'>Phần Movie</Link>
                            <Link href={`#`} className='border border-[#ccc] px-3 py-1 bg-[#1a1c1d] rounded-[3px] flex items-center justify-center z-4'>Phần 2</Link>
                            <Link href={`#`} className='border border-[#ccc] px-3 py-1 bg-[#1a1c1d] rounded-[3px] flex items-center justify-center z-4'>Phần 3</Link>
                        </div>
                    </div>
                </div>
                <RightBar />
            </div>
        </div >
    )
}