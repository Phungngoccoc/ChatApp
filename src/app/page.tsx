'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import img from "../../public/movie.jpg"
import banner from "../../public/banner.jpeg"
import user from "../../public/user.png"
import widge_gif from "../../public/widge.gif"
import Image from "next/image";
import StarIcon from "@/components/icon/star";
import PlayIcon from "@/components/icon/play";
import Clock from "@/components/icon/clock";
import Calendar from "@/components/icon/calendar";
import Camera from "@/components/icon/camera";
import Movie from "@/components/icon/movie";
import { Button } from "@/components/ui/button";
import Dots from "@/components/icon/dot";
export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className="flex justify-center p-5">
      <div className="container lg:!px-0 xl:!px-25 2xl:!px-50">
        <div className="container bg-[#0c1012] min-h-[100vh] px-4">
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
                  className="basis-1/2 [@media(min-width:480px)]:basis-1/3 sm:!basis-1/4 md:!basis-1/5 lg:!basis-1/8 rounded-none  "
                >
                  <Link href="#" className="relative z-0 group">
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

          <div className="grid grid-cols-10 gap-4 h-[500px] pt-4">
            <div className="col-span-7">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {Array.from({ length: 20 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-full rounded-none border m-0 p-0"
                    >
                      <div className="relative z-0 group">
                        <Image src={banner} alt="a" width={10000} height={300} className="rounded-[3px]" />
                        <div className="absolute left-0 top-0 w-[66%] h-full bg-black/50 ps-10 pt-6 text-white">
                          <Link href={`#`} className="font-light text-[30px] mb-2">
                            Thanh Kiếm Của Thợ Săn Quỷ
                          </Link>
                          <div className="flex gap-4 mt-1">
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
                          <p className="line-clamp-2 text-sm text-white opacity-80 mt-3 pe-3">
                            Vào thời Edo, có một vu nữ tên là "Itsukihime" ở ngôi làng miền núi Kadono. Jinta, một chàng trai trẻ đóng vai trò là một vu nữ tên là "Itsukihime" ở ngôi làng miền núi Kadono
                          </p>
                          <div className="mt-4">
                            <span className="flex text-[12px] items-center">
                              <Camera size={24} className="me-1" color="#b2df50" /> Studio: MAPPA
                            </span>
                          </div>
                          <div className="mt-1 w-[100%] flex items-center pe-5">
                            <div className="shrink-0 ms-1 me-1">
                              <Movie size={16} color="#b2df50" />
                            </div>
                            <span className="text-[12px] overflow-hidden whitespace-nowrap text-ellipsis">
                              Thể Loại: Shounen, Shounen, Shounen, Shounen, Shounen, Shounen, Shounen, Shounen, Shounen, Shounen, Shounen, Shounen, Shounen, Shounen, Shounen, Shounen, Shounen, Shounen
                            </span>
                          </div>
                          <div className="flex mt-6 gap-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <Image
                                key={index}
                                src={user}
                                alt={`user-${index}`}
                                width={40}
                                height={40}
                                className="rounded-full me-2"
                              />
                            ))}
                            <Button className="cursor-pointer group w-[40px] h-[40px] bg-transparent border-[#b2df50] border-2 hover:bg-[#b2df50] rounded-[2px] focus:outline-none ring-0">
                              <Dots size={20} className="text-[#b2df50] group-hover:text-white" />
                            </Button>
                          </div>
                          <div className="mt-6">
                            <Button className="flex items-center px-3 py-3 text-sm bg-[#921616] hover:bg-[#921616] rounded-[5px]">
                              <PlayIcon size={8} color="white" /> Xem phim
                            </Button>
                          </div>
                        </div>
                      </div>

                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <div className="col-span-3">
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
              <div className="mt-4">
                <Image src={widge_gif} width={300} height={300} alt="gif" />
              </div>

              <div className="mt-4 bg-[#131719] p-[10px]">
                <div className="widg relative pe-4 mb-5 text-[13px]">
                  ANIME MỚI CẬP NHẬT
                </div>
                <div>
                  <ul className="">
                    <li className="text-[13px]">
                      <Link href={`#`} className="flex items-center justify-between border-b border-[#312d28] py-2 group relative list-anime">
                        <span className="overflow-hidden whitespace-nowrap text-ellipsis text-[#cd8e8e] group-hover:text-white group-hover:translate-x-[10px] transition-all duration-300 relative">Nohara Hiroshi: Hiru Meshi no Ryuugi</span>
                        <span className="italic !text-[rgb(95_95_95)]">Tập 01</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}