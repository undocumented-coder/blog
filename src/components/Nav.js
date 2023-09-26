import Image from "next/image";

export default function Nav()
{
    return <>
        <nav className="flex flex-row align-center justify-end bg-red-500">
            <a className="px-3 py-1 font-bold" href="/blog">Blog</a>
            <a className="px-3 py-1 font-bold" href="/about">About</a>
        </nav>
    </>
}