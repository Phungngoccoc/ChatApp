'use client'
import RightBar from '@/components/right-bar'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import movie_img from "../../../../public/movie_2.jpg"
import img from "../../../../public/movie.jpg"
import banner from "../../../../public/banner.png"
import Link from 'next/link'
import Image from 'next/image'
import PlayIcon from '@/components/icon/play'
import StarEmptyIcon from '@/components/icon/star-empty'
import character from "../../../../public/character.png"
import Clock from '@/components/icon/clock'
import Calendar from '@/components/icon/calendar'
import EyeIcon from '@/components/icon/eye'
import FileIcon from '@/components/icon/file'
import Movie from '@/components/icon/movie'
import ImageIcon from '@/components/icon/image'
import CameraVideoFill from '@/components/icon/camera-video'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import StarIcon from '@/components/icon/star'
import StarIcons from '@/components/icon/star-full'
type TabKey = 'info' | 'character' | 'trailer' | 'images';
export default function DetailMovie() {
    const [activeTab, setActiveTab] = useState<TabKey>('info');
    const baseClass = 'text-[14px] flex items-start pb-3 cursor-pointer min-h-[30px] justify-center';
    const activeClass = 'text-[#b9e850] border-b-[4px] border-[#b9e850]';
    const tabRefs: Record<TabKey, React.RefObject<HTMLDivElement | null>> = {
        info: useRef(null),
        character: useRef(null),
        trailer: useRef(null),
        images: useRef(null),
    };

    const [tabHeight, setTabHeight] = useState(0);

    // useEffect(() => {
    //     const ref = tabRefs[activeTab].current;
    //     if (!ref) return;

    //     requestAnimationFrame(() => {
    //         const height = ref.offsetHeight;
    //         console.log('height:', height);
    //         setTabHeight(height);
    //     });
    // }, [activeTab]);

    return (
        <div className="container bg-[#0c1012] py-2 px-4">
            <div className="grid grid-cols-10 gap-4 pt-4">
                <div className="col-span-10 lg:col-span-7 relative">
                    <div className={`bg-[url('/banner.png')] p-5 relative bg-cover relative`}>
                        <div className='absolute bg-black/80 top-0 left-0 w-full h-full z-3'></div>
                        <div className='flex md:flex-row flex-col items-center md:items-start'>
                            <Link href="/phim/test" className="relative group !min-w-[180px] w-fit h-fit block overflow-hidden rounded-[3px] z-4 md:order-1 order-2">
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
                    <div className="mt-4 flex items-start gap-x-10 transition-all duration-200">
                        <div
                            className={`${baseClass} ${activeTab === 'info' ? activeClass : 'text-gray-400'}`}
                            onClick={() => setActiveTab('info')}
                        >
                            <FileIcon width={24} height={24} fillColor={activeTab === 'info' ? '#b9e850' : '#999'} className="" />
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out max-h-[20px] ${activeTab === 'info' ? 'max-w-[100px] scale-100 opacity-100 ms-2' : 'max-w-0 h-0 scale-0 opacity-0'} md:max-w-[100px] md:scale-100 md:opacity-100 md:h-auto md:ms-2`}>
                                Thông tin phim
                            </div>

                        </div>

                        <div
                            className={`${baseClass} ${activeTab === 'character' ? activeClass : 'text-gray-400'}`}
                            onClick={() => setActiveTab('character')}
                        >
                            <Movie size={24} color={activeTab === 'character' ? '#b9e850' : '#999'} className="flex justify-center" />
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out max-h-[20px] ${activeTab === 'character' ? 'max-w-[100px]  scale-100 opacity-100 ms-2' : 'max-w-0 h-0 scale-0 opacity-0'} md:max-w-[100px] md:scale-100 md:opacity-100 md:h-auto md:ms-2`}>
                                Nhân vật
                            </div>
                        </div>

                        <div
                            className={`${baseClass} ${activeTab === 'trailer' ? activeClass : 'text-gray-400'}`}
                            onClick={() => setActiveTab('trailer')}
                        >
                            <CameraVideoFill width={24} height={24} fill={activeTab === 'trailer' ? '#b9e850' : '#999'} className="" />
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out max-h-[20px] ${activeTab === 'trailer' ? 'max-w-[100px]  scale-100 opacity-100 ms-2' : 'max-w-0 h-0 scale-0 opacity-0'} md:max-w-[100px] md:scale-100 md:opacity-100 md:h-auto md:ms-2`}>
                                Trailer
                            </div>
                        </div>

                        <div
                            className={`${baseClass} ${activeTab === 'images' ? activeClass : 'text-gray-400'}`}
                            onClick={() => setActiveTab('images')}
                        >
                            <ImageIcon width={24} height={24} fillColor={activeTab === 'images' ? '#b9e850' : '#999'} className="" />
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out max-h-[20px] ${activeTab === 'images' ? 'max-w-[100px]  scale-100 opacity-100 ms-2' : 'max-w-0 h-0 scale-0 opacity-0'} md:max-w-[100px] md:scale-100 md:opacity-100 md:h-auto md:ms-2`}>
                                Hình ảnh
                            </div>
                        </div>
                    </div>
                    <div className='pb-3 bg-[#171f22] relative overflow-y-auto thin-scrollbar'>
                        <div className={`w-full absolute top-0 left-0 grid grid-cols-2 gap-x-3 text-[12px] p-4 transform ${activeTab === 'info' ? "scale-100 opacity-100 transition duration-100" : "scale-0 opacity-0"}`}>
                            <ul className='col-span-1 !list-disc ms-4'>
                                <li>
                                    <div className='flex items-center'>
                                        <span>Tập mới:</span>
                                        <Link href={`#`} className='w-[30px] h-[30px] rounded-[3px] bg-[#3b3b3b] flex items-center justify-center text-[14px] ms-2'>11</Link>
                                        <Link href={`#`} className='w-[30px] h-[30px] rounded-[3px] bg-[#3b3b3b] flex items-center justify-center text-[14px] ms-2'>12</Link>
                                        <Link href={`#`} className='w-[30px] h-[30px] rounded-[3px] bg-[#3b3b3b] flex items-center justify-center text-[14px] ms-2'>13</Link>
                                    </div>
                                </li>
                                <li className='mt-3 font-bold'>Trạng thái: <span className='opacity-70 font-light'>Full</span></li>
                                <li className='mt-3 font-bold'>Thể loại: <Link href={`#`} className='text-[#b5e745] font-light'>Fantasy</Link>, <Link href={`#`} className='text-[#b5e745] font-light'>Magic</Link></li>
                                <li className='mt-3 font-bold'>Đạo diễn: <span className='opacity-70 font-light'>Kanasaki Takaomi</span></li>
                                <li className='mt-3 font-bold'>Quốc gia: <Link href={`#`} className='text-[#b5e745] font-light'>Nhật Bản</Link></li>
                                <li className='mt-3 font-bold'>Số người theo dõi: <span className='opacity-70 font-light'>3,607</span></li>
                            </ul>
                            <ul className='col-span-1 list-disc ms-4'>
                                <li className='mt-3 font-bold'>Thời lượng <span className='opacity-70 font-light'>13/13</span></li>
                                <li className='mt-3 font-bold'>
                                    <div className='flex items-center'>
                                        Chất lượng: <span className='opacity-70 font-light py-1 px-3 bg-[#f2473e] rounded-full ms-2'>HD</span>
                                    </div>
                                </li>
                                <li className='mt-3 font-bold'>
                                    <div className='flex items-center'>
                                        Rating: <span className='opacity-70 font-light py-1 px-3 bg-[#f2473e] rounded-[3px] ms-2'>PG-13 - Teens 13 tuổi trở lên</span>
                                    </div>
                                </li>
                                <li className='mt-3 font-bold'>Ngôn ngữ <span className='opacity-70 font-light'>Vietsub</span></li>
                                <li className='mt-3 font-bold'>Studio: <Link href={`#`} className='text-[#b5e745] font-light'>Studio Gokumi</Link></li>
                                <li className='mt-3 font-bold'>Seasin: <Link href={`#`} className='text-[#b5e745] font-light'>Mùa hạ - 2025</Link></li>
                            </ul>
                        </div>
                        <div className={`w-full absolute top-0 left-0 overflow-y-scroll grid grid-cols-6 gap-3 gap-y-5 pt-8 text-[12px] thin-scrollbar p-4 transform ${activeTab === 'character' ? "scale-100 opacity-100 transition duration-100" : "scale-0 opacity-0"}`}>
                            {Array.from({ length: 20 }).map((_, index) => (
                                <Link href={`#`} className='flex flex-col items-center justify-center md:col-span-1 col-span-2' key={index}>
                                    <Image src={character} alt='char' width={80} />
                                    <span>Monica</span>
                                </Link>
                            ))}
                        </div>
                        <div className={`w-full absolute top-0 left-0 h-full pt-8 text-[12px] p-4 transform ${activeTab === 'trailer' ? "scale-100 opacity-100 transition duration-100 pointer-events-auto" : "scale-0 opacity-0 pointer-events-none"}`}>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/0OBF29HoV4A?si=CSvTUopIPtOTAp7y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </div>
                        <div className={`w-full z-0 pt-8 text-[12px] p-4 transform ${activeTab === 'images' ? "scale-100 opacity-100 transition duration-100" : "scale-0 opacity-0"}`}>
                            <Image src={banner} alt='banner' width={1000} className='aspect-16/9' />
                        </div>

                    </div>
                    <div className="mt-4 bg-[#131719] p-[10px]">
                        <div className="widg relative pe-4 mb-5 text-[13px] text-white">
                            Phim liên quan
                        </div>
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="w-full mt-5"
                        >
                            <CarouselContent>
                                {Array.from({ length: 20 }).map((_, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="basis-1/2 [@media(min-width:480px)]:basis-1/3 sm:!basis-1/4 md:!basis-1/5 lg:!basis-1/6 rounded-none  "
                                    >
                                        <Link href="/phim/test" className="relative z-0 group">
                                            <Image src={img} alt="a" width={300} height={200} className="rounded-[3px]" />

                                            <div className="flex items-center absolute z-10 top-0 left-0 ms-2 mt-1 bg-black/65 rounded-full px-3 py-2 justify-center">
                                                <StarIcon size={11} color="#f5ed4a" />
                                                <span className="text-[#f5ed4a] text-[11px]">9.6</span>
                                            </div>

                                            <div className="flex flex-col items-center absolute z-10 top-0 right-0 me-1 mt-1 bg-[#8e1a1e] gap-0 rounded-full w-[40px] h-[40px] justify-center">
                                                <span className="text-white text-[10px] mt-[5px]">TẬP</span>
                                                <span className="text-white text-[12px] mb-[5px]">1177</span>
                                            </div>
                                            <div className="absolute bottom-0 w-full text-center text-white font-normal text-[12px] px-2 pb-2 z-2 group-hover:opacity-0 opacity-100 transition-all duration-300">One Piece - Đảo Hải Tặc</div>
                                            <div className="flex items-center justify-center absolute inset-0  bg-gradient-to-t from-black/60 to-transparent group-hover:bg-black/10 transition-all opacity-100 duration-300 rounded-b-[8px] group-hover:rounded-[1px] z-1">
                                                <div className="w-[50px] h-[50px] rounded-full bg-black/50 border border-[2px] border-black flex items-center justify-center scale-0 group-hover:scale-100 transition-all duration-300">
                                                    <PlayIcon size={14} color="white" className="" />
                                                </div>
                                            </div>
                                        </Link>

                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="absolute cursor-pointer left-[-10px] top-1/2 -translate-y-1/2 bg-[#a10b11] rounded-none text-white w-[25px] h-[30px] flex items-center justify-center shadow-md ring-none focus-non border-none hover:bg-[#a10b11]">
                                <ChevronLeft className="w-5 h-5 hover:text-white" />
                            </CarouselPrevious>

                            <CarouselNext className="absolute cursor-pointer right-[-10px] top-1/2 -translate-y-1/2 bg-[#a10b11] rounded-none text-white w-[25px] h-[30px] flex items-center justify-center shadow-md ring-none focus-non border-none hover:bg-[#a10b11]">
                                <ChevronRight className="w-5 h-5" />
                            </CarouselNext>
                        </Carousel>

                    </div>
                </div>
                <RightBar />
            </div>
        </div >
    )
}
