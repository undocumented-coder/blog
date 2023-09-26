import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Gallery from '@/components/Gallery'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <>
    <div className="w-full h-full flex flex-col">
      <Nav/>
      <h1 className="text-green-500 font-light text-center text-[50px]">Welcome to the <b className="text-red-500 font-bold underline underline-offset-[1rem]">NSA</b> security blog.</h1>
      <p className="text-center font-light italic pt-2">| A research blog written by some teenager who probably knows what they are doing, but at the same time probably not.</p>
      <Gallery/>
    </div>
  </>
}