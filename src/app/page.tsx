import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import img from "../../public/movie.jpg"
import Image from "next/image";
import StarIcon from "@/components/icon/star";
import PlayIcon from "@/components/icon/play";
export default function Home() {
  return (
    <div className="flex justify-center p-5">
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
      </div>
    </div>
  );
}