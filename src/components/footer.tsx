import React from 'react'
import logo from "../../public/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import FacebookIcon from '@/components/icon/facebook'
import InstagramIcon from '@/components/icon/insta'
import TwitterIcon from '@/components/icon/twitter'
import YouTubeIcon from '@/components/icon/youtobe'
import ArrowUpIcon from '@/components/icon/arrow-up'
export default function Footer() {
    return (
        <div className="flex justify-center h-fit pt-4 px-1 mb-5">
            <div className="container lg:!px-0 xl:!px-25 2xl:!px-50">
                <div className="container bg-[#0c1012] py-2 px-4 lg:flex-row flex flex-col items-center justify-between">
                    <Image src={logo} alt="logo" width={100} height={100} />
                    <div className='lg:flex-row flex flex-col text-[13px] items-center gap-6 uppercase lg:mt-0 mt-4'>
                        <Link href={`#`} className=''>XEM PHIM</Link>
                        <Link href={`#`}>Donate♥️</Link>
                        <Link href={`#`}>Chat Anime/Discord</Link>
                        <Link href={`#`}>THUẬT NGỮ</Link>
                        <Link href={`#`}>GROUP THẢO LUẬN</Link>
                    </div>
                    <div className='flex gap-2 lg:mt-0 mt-4'>
                        <Link href={`#`} className='bg-[#263238] w-[40px] h-[40px] rounded-[2px] flex items-center justify-center'>
                            <FacebookIcon width={24} height={24} className="text-white/30 hover:text-white transition-colors" />
                        </Link>
                        <Link href={`#`} className='bg-[#263238] w-[40px] h-[40px] rounded-[2px] flex items-center justify-center'>
                            <InstagramIcon width={24} height={24} className="text-white/30 hover:text-white transition-colors" />
                        </Link>
                        <Link href={`#`} className='bg-[#263238] w-[40px] h-[40px] rounded-[2px] flex items-center justify-center'>
                            <TwitterIcon width={24} height={24} className="text-white/30 hover:text-white transition-colors" />
                        </Link>
                        <Link href={`#`} className='bg-[#263238] w-[40px] h-[40px] rounded-[2px] flex items-center justify-center'>
                            <YouTubeIcon width={24} height={24} className="text-white/30 hover:text-white transition-colors" />
                        </Link>
                        <Link href={`#`} className='bg-[#b5e745] w-[40px] h-[40px] rounded-[2px] flex items-center justify-center'>
                            <ArrowUpIcon width={24} height={24} className="text-white/30 hover:text-white transition-colors" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
