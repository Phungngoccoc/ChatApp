import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import BackButton from "@/components/back-btn";

export const metadata: Metadata = {
    title: "404 - Page Not Found",
    description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
    return (
        <html>
            <body className="!bg-[#222426]">
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4 !bg-[#222426] text-white">
                    <Image
                        src="http://i.imgur.com/MGfBgxQ.png"
                        alt="not-found"
                        width={500}
                        height={200}
                        className="mb-6"
                    />
                    <h1 className="text-4xl font-bold mb-2">Whoops...</h1>
                    <p className="text-lg mb-6 max-w-lg">
                        Xin lỗi, trang bạn truy cập không có hoặc đã bị xóa trước đó.
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="/"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Trang chủ
                        </Link>

                        <BackButton />
                    </div>
                </div>
            </body>
        </html>
    );
}
