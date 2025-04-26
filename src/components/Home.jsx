function Home() {

  return (
    <div className='flex flex-col justify-center items-center'>
      <img
        src="/tamagotchi.gif"
        alt="About animation"
        className="w-[153px] h-[183px] sm:h-[367px] sm:w-[306px]"
      />
      <h1 className="font-handjet text-soft sm:text-8xl text-5xl">
        Hi, I'm <span className="text-purple font-semibold">Jesica</span>
      </h1>


  <div>
    <div className="bg-eggplant w-28 h-12 sm:w-[200px] sm:h-[96px] border-soft border-8 flex justify-center items-center rounded-2xl">
      <span className="font-handjet text-soft sm:text-4xl text-2xl">
        Jesica
      </span>
    </div>

    <div className="bg-eggplant w-80 h-20 sm:w-[668px] sm:h-[120px] border-soft border-8 rounded-2xl sm:mt-[-20px] mt-[-10px] flex items-center">
      <p className="font-chakra text-soft sm:text-2xl text-[10px] ml-4 border-r-2 border-soft whitespace-nowrap overflow-hidden tracking-[2px] animate-typing">
        "A passionate designer and developer ^-^."
      </p>
    </div>
  </div>
    </div>
  );
}

export default Home;
