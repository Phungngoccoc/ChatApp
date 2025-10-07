'use client'
import { SortIcon } from '@/components/icon/sort'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Image from 'next/image'
import React, { useState } from 'react'
import img from "../../../public/movie_2.jpg"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import StarIcons from '@/components/icon/star-full'

const genres = [
    "Action", "Adventure", "Boys Love", "Cartoon", "Comedy", "Dementia", "Demons", "Drama", "Ecchi",
    "Fantasy", "Game", "Harem", "Historical", "Horror", "Josei", "Kids", "Live Action", "Magic",
    "Martial Arts", "Mecha", "Military", "Music", "Mystery", "Parody", "Police", "Psychological",
    "Romance", "Samurai", "School", "Sci-Fi", "Seinen", "Shoujo", "Shoujo Ai", "Shounen",
    "Shounen Ai", "Slice of Life", "Space", "Sports", "Super Power", "Supernatural", "Suspense",
    "Thriller", "Tokusatsu", "Vampire", "Yaoi", "Yuri",
];

export default function LibraryPage() {
    const [currentPage, setCurrentPage] = useState(5)
    const [isOpenFilter, setIsOpenFilter] = useState(false)
    const totalPages = 10
    const alphabetButtons = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));
    const allButtons = ['0-9', ...alphabetButtons];

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
                <div className="col-span-full mb-5">
                    <div className="flex items-center sm:justify-between justify-center flex-wrap gap-3">
                        <span className="px-3 py-2 bg-[#7d9d14] text-white rounded-[3px]">DANH SÁCH ANIME BỘ</span>
                        <div className="text-[13px] opacity-60 flex items-center justify-cente px-3 py-2 bg-[#2a2f31] rounded-[4px] cursor-pointer" onClick={() => { setIsOpenFilter(!isOpenFilter) }}>
                            <SortIcon width="13px" height="13px" fill="#ffffff" className="me-1" />Lọc Anime
                        </div>
                    </div>
                    <div className="text-[13px] bg-red-600 rounded-[9px] mx-4 mt-5 px-4 py-3">
                        <p><strong>MẸO SỬ DỤNG:</strong>  Sử dụng chức năng <strong>Lọc Anime</strong> trên thanh công cụ để lọc những phim bạn đang cần xem chính xác nhất.</p>
                    </div>
                    <div className={`bg-[#2a2f31] w-full mt-4 grid grid-cols-5 ${isOpenFilter ? 'block' : 'hidden'}`}>
                        <div className="col-span-full pt-4 px-3 text-[12px] grid grid-cols-2 gap-x-2 mb-3">
                            <div className="col-span-full">
                                <span className="text-[#0397D6] text-[18px]">Thể loại</span>
                                <div className="border border-white p-3 my-2">
                                    <RadioGroup defaultValue="Action" className="flex flex-wrap gap-3">
                                        {genres.map((genre) => {
                                            const id = genre.toLowerCase().replace(/\s+/g, "-");
                                            return (
                                                <div key={id} className="flex items-center space-x-2">
                                                    <RadioGroupItem value={genre} id={id} />
                                                    <Label htmlFor={id} className="text-[12px] opacity-60">
                                                        {genre}
                                                    </Label>
                                                </div>
                                            );
                                        })}
                                    </RadioGroup>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-full border-t py-2 flex items-center justify-center py-5">
                            <Button className="bg-red-600 py-3 px-4 rounded-[5px] flex items-center justify-center">Lọc Anime</Button>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-10 items-center justify-center">
                        {allButtons.map((char) => (
                            <Button
                                key={char}
                                className={`px-4 py-2 text-white rounded hover:bg-[#2a2f31] text-[14px] cursor-pointer ${char === '0-9' ? 'bg-[#7d9d14]' : 'bg-[#2a2f31]'}`}
                            >
                                {char}
                            </Button>
                        ))}
                    </div>
                    <div className='mt-4 overflow-x-auto'>
                        <table className="table-auto w-full border border-gray-300 text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-3 py-2 text-center">#</th>
                                    <th className="border px-3 py-2 text-left" colSpan={2}>40 Kết quả</th>
                                    <th className="border px-3 py-2 text-left align-left">Năm</th>
                                    <th className="border px-3 py-2 text-left align-left">Status</th>
                                    <th className="border px-3 py-2 text-left align-left">Thể loại</th>
                                    <th className="border px-3 py-2 text-left align-left" >Đánh giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 40 }).map((_, index) => (
                                    <tr key={index} className="even:bg-white odd:bg-gray-50">
                                        <td className="border px-1 py-2 text-center">{index + 1}</td>
                                        <td className="border p-2 w-[50px] align-left min-w-[40px]">
                                            <Image src={img} alt="anime" className="max-w-[40px] h-auto" />
                                        </td>
                                        <td className="border px-3 py-2 align-left overflow-hidden whitespace-nowrap text-ellipsis">Bí Mật Của Phù Thủy Tĩnh Lặng</td>
                                        <td className="border px-3 py-2 align-left">2025</td>
                                        <td className="border px-3 py-2 align-left">Full</td>
                                        <td className="border px-3 py-2 align-left">Fantasy</td>
                                        <td className="border px-3 py-2 align-left">
                                            <div className='flex items-center text-[#ffc107]'>
                                                <StarIcons className='me-1' /> 9.5
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
            </div>
        </div>
    )
}