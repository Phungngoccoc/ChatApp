"use client";

export default function BackButton() {
    return (
        <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition cursor-pointer"
        >
            Trang trước
        </button>
    );
}