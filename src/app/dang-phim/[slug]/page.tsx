'use client'

import React, { useState } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import RightBar from "@/components/right-bar"
import PlayIcon from "@/components/icon/play"
import Image from "next/image"
import Link from "next/link"
import Arrow from "@/components/icon/arrow"
import img from "../../../../public/movie.jpg"
import StarIcon from "@/components/icon/star"
import { SortIcon } from "@/components/icon/sort"

export default function Home() {
  const [currentPage, setCurrentPage] = useState(5)
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const totalPages = 10

  const getPageNumbers = () => {
    const pages = []
    const delta = 1
    const left = Math.max(2, currentPage - delta)
    const right = Math.min(totalPages - 1, currentPage + delta)

    pages.push(1)

    if (left > 2) pages.push("left-ellipsis")
    for (let i = left; i <= right; i++) {
      pages.push(i)
    }
    if (right < totalPages - 1) pages.push("right-ellipsis")
    if (totalPages > 1) pages.push(totalPages)
    return pages
  }

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div className="container bg-[#0c1012] py-2 px-4">
      <div className="grid grid-cols-10 gap-4 pt-4">
        <div className="col-span-10 lg:col-span-7 mb-5">
          <div className="flex items-center justify-between flex-wrap">
            <span className="px-3 py-2 bg-[#7d9d14] text-white rounded-[3px]">DANH SÁCH ANIME BỘ</span>
            <div className="text-[13px] opacity-60 flex items-center justify-cente px-3 py-2 bg-[#2a2f31] rounded-[4px] cursor-pointer" onClick={() => { setIsOpenFilter(!isOpenFilter) }}>
              <SortIcon width="13px" height="13px" fill="#ffffff" className="me-1" />Lọc Anime
            </div>
          </div>
          <div className="text-[13px] bg-red-600 rounded-[9px] mx-4 mt-5 px-4 py-3">
            <p><strong>MẸO SỬ DỤNG:</strong>  Sử dụng chức năng <strong>Lọc Anime</strong> trên thanh công cụ để lọc những phim bạn đang cần xem chính xác nhất.</p>
          </div>
          <div className={`bg-[#2a2f31] w-full mt-4 min-h-[400px] ${isOpenFilter ? 'block' : 'hidden'}`}>
            a
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => goToPage(currentPage - 1)}
                  href="#"
                  className={`transition-colors py-2 rounded-[3px] mt-3
                    ${currentPage > 1 ? 'bg-[#1a1e20] hover:bg-none focus-none ring-none text-white' : 'hidden'}`}
                >
                </PaginationPrevious>
              </PaginationItem>
              {getPageNumbers().map((page, index) => (
                <PaginationItem key={index}>
                  {typeof page === "number" ? (
                    <PaginationLink
                      href="#"
                      onClick={() => goToPage(page)}
                      className={`
                        px-4 py-2 mx-1 mt-3 rounded-[3px] transition-colors
                        ${currentPage === page
                          ? 'bg-red-600 text-white'
                          : 'bg-[#1a1e20] text-gray-300'}
                      `}
                    >
                      {page}
                    </PaginationLink>
                  ) : (
                    <PaginationEllipsis className="text-gray-500" />
                  )}
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => goToPage(currentPage + 1)}
                  href="#"
                  className={`transition-colors py-2 rounded-[3px] mt-3
                    ${currentPage < totalPages ? 'bg-[#1a1e20] hover:bg-none focus-none ring-none text-white' : 'hidden'}`}
                >
                </PaginationNext>
              </PaginationItem>
            </PaginationContent>
          </Pagination>

          <div className="my-4">
            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-4 ">
              {Array.from({ length: 30 }).map((_, index) => (
                <div className="group col-span-1" key={index} >
                  <Link href="/phim/test" className="relative z-0 group" >
                    <Image src={img} alt="a" width={300} className="rounded-[3px]" />

                    <div className="flex items-center absolute z-10 top-0 left-0 ms-2 mt-1 bg-black/65 rounded-full px-3 py-2 justify-center mt-4">
                      <StarIcon size={11} color="#f5ed4a" />
                      <span className="text-[#f5ed4a] text-[11px]">9.6</span>
                    </div>

                    <div className="flex flex-col items-center absolute z-10 top-0 right-0 me-1 mt-3 bg-[#8e1a1e] gap-0 rounded-full w-[40px] h-[40px] justify-center me-3">
                      <span className="text-white text-[10px] mt-[5px]">TẬP</span>
                      <span className="text-white text-[12px] mb-[5px]">1177</span>
                    </div>
                    <div className="flex items-center justify-center absolute inset-0  bg-gradient-to-t from-black/60 to-transparent group-hover:bg-black/10 transition-all opacity-100 duration-300  group-hover:rounded-[1px] z-1">
                      <div className="w-[50px] h-[50px] rounded-full bg-black/50 border border-[2px] border-black flex items-center justify-center scale-0 group-hover:scale-100 transition-all duration-300">
                        <PlayIcon size={14} color="white" className="" />
                      </div>
                    </div>
                  </Link>
                  <div className="mt-3">
                    <p className="overflow-hidden text-center whitespace-nowrap text-ellipsis text-[14px] opacity-100 text-white group-hover:opacity-70">One Piece - Đảo Hải Tặc</p>
                    <p className="text-[12px] opacity-70 text-center">Lượt xem: 1,111,111</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => goToPage(currentPage - 1)}
                  href="#"
                  className={`transition-colors py-2 rounded-[3px] mt-3
                    ${currentPage > 1 ? 'bg-[#1a1e20] hover:bg-none focus-none ring-none text-white' : 'hidden'}`}
                >
                </PaginationPrevious>
              </PaginationItem>
              {getPageNumbers().map((page, index) => (
                <PaginationItem key={index}>
                  {typeof page === "number" ? (
                    <PaginationLink
                      href="#"
                      onClick={() => goToPage(page)}
                      className={`
                        px-4 py-2 mx-1 mt-3 rounded-[3px] transition-colors
                        ${currentPage === page
                          ? 'bg-red-600 text-white'
                          : 'bg-[#1a1e20] text-gray-300'}
                      `}
                    >
                      {page}
                    </PaginationLink>
                  ) : (
                    <PaginationEllipsis className="text-gray-500" />
                  )}
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => goToPage(currentPage + 1)}
                  href="#"
                  className={`transition-colors py-2 rounded-[3px] mt-3
                    ${currentPage < totalPages ? 'bg-[#1a1e20] hover:bg-none focus-none ring-none text-white' : 'hidden'}`}
                >
                </PaginationNext>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <RightBar />
      </div>
    </div>
  )
}
