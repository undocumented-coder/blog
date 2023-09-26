import GalleryImg from "./GalleryImg";

export default function Gallery()
{
    return <>
        <div className="w-screen h-screen grow gallery flex flex-row justify-center items-center gap=5">
            <GalleryImg cap="Everyday" src="/assets/fucksociety.jpg"/>
            <GalleryImg cap="Only at night" src="/assets/greenhacker.avif"/>
            <GalleryImg cap="Good show" src="/assets/robot.jpg"/>
        </div>
    </>
}