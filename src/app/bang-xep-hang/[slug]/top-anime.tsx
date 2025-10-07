'use client'
import RightBar from '@/components/right-bar'
import Image from 'next/image';
import img from "../../../../public/movie_2.jpg"
import React, { useState } from 'react'
import Link from 'next/link';

type TabKey = 'top' | 'day' | 'month' | 'season' | 'year' | 'rating';


export default function TopAnime() {
    const [activeTab, setActiveTab] = useState<TabKey>('top');
    const baseClass = 'text-[14px] flex items-start pb-3 cursor-pointer min-h-[30px] justify-center mt-4';
    const activeClass = 'text-[#b9e850] border-b-[4px] border-[#b9e850]';
    const tabTitles: Record<TabKey, string> = {
        top: 'HAY NHẤT',
        day: 'NGÀY 08/10/2025',
        month: 'THÁNG 10',
        season: 'MÙA THU NĂM 2025',
        year: 'NĂM 2025',
        rating: 'THEO ĐÁNH GIÁ',
    };
    return (
        <div className="container bg-[#0c1012] py-2 px-4">
            <div className="grid grid-cols-10 gap-4 ps-2">
                <div className="col-span-10 lg:col-span-7 mb-5">
                    <div className="flex items-start gap-x-5 transition-all duration-200 flex-wrap">
                        <div className={`${baseClass} ${activeTab === 'top' ? activeClass : 'text-gray-400'}`} onClick={() => setActiveTab('top')}>
                            BẢNG XẾP HẠNG
                        </div>
                        <div className={`${baseClass} ${activeTab === 'day' ? activeClass : 'text-gray-400'}`} onClick={() => setActiveTab('day')}>
                            NGÀY
                        </div>
                        <div className={`${baseClass} ${activeTab === 'month' ? activeClass : 'text-gray-400'}`} onClick={() => setActiveTab('month')}>
                            THÁNG
                        </div>
                        <div className={`${baseClass} ${activeTab === 'season' ? activeClass : 'text-gray-400'}`} onClick={() => setActiveTab('season')}>
                            MÙA
                        </div>
                        <div className={`${baseClass} ${activeTab === 'year' ? activeClass : 'text-gray-400'}`} onClick={() => setActiveTab('year')}>
                            NĂM
                        </div>
                        <div className={`${baseClass} ${activeTab === 'rating' ? activeClass : 'text-gray-400'}`} onClick={() => setActiveTab('rating')}>
                            ĐÁNH GIÁ
                        </div>
                    </div>
                    <div className='mt-6'>
                        <h1 className='text-[#ccff00] text-[25px]'>BẢNG XẾP HẠNG ANIME {tabTitles[activeTab]}</h1>
                    </div>
                    <div className='mt-4'>
                        <ul className='relative'>
                            <li className={`w-full min-h-[200px] bg-[url('/banner.png')] bg-cover relative py-9 border-white border-b-[2px]`}>
                                <div className='absolute bg-black/60 top-0 left-0 w-full h-full z-1'></div>
                                <div className='flex z-2 relative flex'>
                                    <div className='text-[#fe0000] text-[26px] min-w-[60px] h-[60px] flex items-center justify-center'>01</div>
                                    <Link href={`/phim/test`} className='flex overflow-hidden'>
                                        <Image src={img} alt="img" className='max-w-[100px]' />
                                        <div className='px-2 overflow-hidden'>
                                            <h2 className='text-ellipsis text-[20px] uppercase'>Bí Mật Của Phù Thủy Tĩnh Lặng</h2>
                                            <h4 className='overflow-hidden whitespace-nowrap text-ellipsis'>Silent Witch: Chinmoku no Majo no Kakushigoto Secrets of the Silent Witch</h4>
                                        </div>
                                    </Link>
                                </div>
                                <span className='absolute bottom-[15px] right-[15px] z-2'>Full</span>
                            </li>
                            {Array.from({ length: 39 }).map((_, index) => (
                                <li className={`w-full bg-[#4b7e93] relative py-3 z-2 border-white border-b-[2px]`} key={index}>
                                    <div className='absolute bg-black/60 top-0 left-0 w-full h-full z-1'></div>
                                    <div className='flex z-2 relative flex'>
                                        <div className='text-[#fe3200] text-[26px] min-w-[60px] h-[60px] flex items-center justify-center'>{index + 2}</div>
                                        <Link href={`/phim/test`} className='flex overflow-hidden'>
                                            <Image src={img} alt="img" className='max-w-[45px]' />
                                            <div className='pe-2 ps-3 overflow-hidden'>
                                                <h2 className='text-ellipsis text-[15px]'>Bí Mật Của Phù Thủy Tĩnh Lặng</h2>
                                                <h4 className='overflow-hidden whitespace-nowrap text-ellipsis opacity-60 text-[14px]'>Silent Witch: Chinmoku no Majo no Kakushigoto Secrets of the Silent Witch</h4>
                                            </div>
                                        </Link>
                                    </div>
                                    <span className='absolute bottom-[15px] right-[15px] z-2'>Full</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <RightBar />
            </div>
        </div>
    )
}
