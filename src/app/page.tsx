

export default function Home() {
  return (
    <div
      className='flex flex-col justify-center h-screen w-screen items-center gap-8'
    >
      <div className="text-6xl">
      Portfolio
      </div>
      <div 
        className="relative w-96"
      >
        <div className="absolute w-full h-full top-0 left-0 "></div>
      <iframe src="https://embed.lottiefiles.com/animation/134469"
      className="w-full h-96"
      ></iframe>
      </div>
      <a href="https://twitter.com/SamarpitSantoki" className="text-2xl">
      @samarpit_santoki
      </a>
      
    </div>
  )
}
