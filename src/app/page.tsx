import PastWorkCard from '@/components/PastWorkCard'

export default function Home() {
  return (
    <div
      className="w-screen h-screen justify-center flex p-4 bg-gray-100"
    >

    <div
      className='max-w-xl flex flex-col  h-3/4 w-screen sm:justify-center sm:items-center gap-4'
    >
      <div className="text-6xl font-semibold">
      Samarpit Santoki
      </div>
      <div className="text-xl  sm:flex sm:flex-row  items-end gap-2">
      Full Stack Developer <p className="text-sm">( Software Engineer )</p>
      </div>
      <div className="text-3xl ">
      My Works
      </div>
      <PastWorkCard link="https://play.google.com/store/apps/details?id=com.samarpit.tales" title="Tales: Craft Your own Stories" />
      <PastWorkCard link="https://vpfinancials.in/" title="VP Financials" />
      <PastWorkCard link="https://www.rheadmaker.com/" title="RHeadMaker" />
      {/* <div 
        className="relative w-96"
      >
        <div className="absolute w-full h-full top-0 left-0 "></div>
      <iframe src="https://embed.lottiefiles.com/animation/134469"
      className="w-full h-96"
      ></iframe>
      </div> */}
      <div
        className='flex-grow'
      ></div>
      <a href="https://twitter.com/SamarpitSantoki" className="text-2xl">
      @samarpit_santoki
      </a>
      <a href="mailto:samarpit.santoki@gmail.com" className="text-2xl text-blue-400">
      Contact Me
      </a>
      
    </div>
    </div>
  )
}
