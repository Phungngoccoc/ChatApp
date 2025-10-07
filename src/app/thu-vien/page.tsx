import React from 'react'
import type {
    Metadata,
    // ResolvingMetadata
} from 'next'
import LibraryPage from '@/app/thu-vien/library'

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    {
        // params,
        // searchParams
    }: Props,
    // parent: ResolvingMetadata
): Promise<Metadata> {
    // const { id } = await params

    // const product = await fetch(`https://.../${id}`).then((res) => res.json())

    // const previousImages = (await parent).openGraph?.images || []

    return {
        title: "Thư viện - AnimeVietSub",
        // openGraph: {
        //     images: ['/some-specific-page-image.jpg', ...previousImages],
        // },
    }
}

export default function page() {
    return (
        <LibraryPage />
    )
}
