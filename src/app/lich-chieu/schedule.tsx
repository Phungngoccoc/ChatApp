'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from '../../../public/movie_2.jpg'
import StarIcon from '@/components/icon/star'
import PlayIcon from '@/components/icon/play'

export default function SchedulePage() {
    return (
        <div className="container bg-[#0c1012] py-2 px-4">
            <div className="grid grid-cols-10 gap-4 pt-4">
                <div className="col-span-full mb-5">
                    <div className="text-[13px] bg-red-600 rounded-[9px] mx-auto max-w-[70%] mt-5 px-4 py-3">
                        <p><strong>MẸO SỬ DỤNG:</strong>  Sử dụng chức năng <strong>Lọc Anime</strong> trên thanh công cụ để lọc những phim bạn đang cần xem chính xác nhất.</p>
                    </div>


                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index}>
                            <div className="text-[13px] bg-red-800 text-center rounded-[3px] mt-5 px-4 py-3 text-[20px] font-bold">
                                <p>Thứ Ba, Ngày 07 tháng 10</p>
                            </div>
                            <div className='flex mt-5 gap-3'>
                                {Array.from({ length: 2 }).map((_, index) => (
                                    <div className="group col-span-1 max-w-[160px]" key={index}>
                                        <Link href="/phim/test" className="relative z-0 group">
                                            <Image src={img} alt="a" className="rounded-[3px] max-w-[160px]" />

                                            <div className="flex items-center absolute z-10 top-0 left-0 ms-2 mt-1 bg-black/65 rounded-full px-3 py-2 justify-center mt-4">
                                                <StarIcon size={11} color="#f5ed4a" />
                                                <span className="text-[#f5ed4a] text-[11px]">9.6</span>
                                            </div>

                                            <div className="flex flex-col items-center absolute z-10 top-0 right-0 me-1 mt-3 bg-[#8e1a1e] gap-0 rounded-full w-[40px] h-[40px] justify-center me-3">
                                                <span className="text-white text-[10px] mt-[5px]">TẬP</span>
                                                <span className="text-white text-[12px] mb-[5px]">1177</span>
                                            </div>
                                            <div className="absolute bottom-0 left-0 py-2 bg-[#811334] w-full text-center z-3">
                                                SẮP CHIẾU
                                            </div>
                                            <div className="flex items-center justify-center absolute inset-0  bg-gradient-to-t from-black/60 to-transparent group-hover:bg-black/10 transition-all opacity-100 duration-300  group-hover:rounded-[1px] z-1">
                                                <div className="w-[50px] h-[50px] rounded-full bg-black/50 border border-[2px] border-black flex items-center justify-center scale-0 group-hover:scale-100 transition-all duration-300">
                                                    <PlayIcon size={14} color="white" className="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="mt-3">
                                            <p className="overflow-hidden text-center whitespace-nowrap text-ellipsis text-[14px] opacity-100 text-white group-hover:opacity-70">Bí Mật Của Phù Thủy Tĩnh Lặng</p>
                                            <p className="text-[12px] opacity-70 text-center line-clamp-4">Pháp sư thiên tài Monica Everett là một cô gái cực kỳ nhút nhát và ngại giao tiếp trước đám đông. Sau bao nhiêu nỗ lực Monica cuối cùng cũng đã học được và thông thạo thuật vô niệm khả năng sử dụng phép thuật mà không cần niệm chú. Ở tuổi 15 cô đã được chọn làm một trong Bảy Hiền Nhân bảy pháp sư mạnh mẽ nhất vương quốc với danh hiệu Phù Thủy Tĩnh Lặng. Và rồi Monica bắt đầu một cuộc sống ẩn dật yên bình trong rừng. Tuy vậy hai năm sau vào một ngày nọ Monica nhận được một yêu cầu. Đó chính là bí mật bảo vệ Nhị Hoàng Tử đang theo học trong Học Viện. Để hoàn thành yêu cầu đó Monica buộc phải thâm nhập vào một học viện xa hoa chỉ dành cho con em quý tộc theo học. Không muốn đâu....Sợ lắm.....Ưư...cái dạ dày của tôi... Tiếng khóc thút thít của cô gái rồi cũng bị những cơn gió cuốn bay đi thật xa.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}