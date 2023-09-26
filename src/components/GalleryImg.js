import Image from "next/image";

export default function GalleryImg({src, alt, cap})
{
    return <div className="">
        <div className="grow flex flex-col justify-center">
            <Image className="" src={src || "INVALID"} alt={alt || "NO ALT"} width={400} height={1000}/>
            <h1 className="text-center w-full font-bold">{cap}</h1>
        </div>
    </div>
}