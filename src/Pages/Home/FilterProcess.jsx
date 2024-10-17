function FilterProcess() {
  return (
    <div className="bg-[#3284BC]">
      <div className=" w-full container  py-8  ">
        <div className=" flex flex-col  gap-8 overflow-hidden">
          <div className=" mx-auto">
            <h1 className="sm:text-4xl text-2xl font-bold text-white text-center">
              RO Filtration Process
            </h1>
            <div className=" pt-8">
              <p className=" text-justify text-white">
                Reverse osmosis is the best option to Purify/Filter Water,
                whereas filtering is is a water purification process that uses a
                partially permeable membrane to remove ions, unwanted molecules
                and larger particles from drinking water. RO covers a larger
                spectrum of contaminant removal. Under the process, the
                molecules are forced to pass through a semi-permeable membrane
                in order to form a less concentrated solution. Since the pore
                size of the RO membrane is 0.0005 microns it only allows pure
                water to pass through it. The purification process is capable of
                removing any kind of impurities starting from dissolved
                solids/salts to bacteria, virus and heavy metals as well.
              </p>
            </div>
          </div>
          <div className="relative w-full ">
            <img
              src="https://s3-alpha-sig.figma.com/img/3c41/ce79/e6d702ee11499049d546983fe5220dd5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n6b8qh0xQ58dQWo3EpazrHxDTkU3HmawesM4YxtL8D3-ZPZ7lXEXbW49lK9LeJbGbSFFm6TXGwEMLIFDPZ6KbYbGKEQV3sEMHk~gcdQQaE1cnJvuqHXS8HskMIHMkGsG2pnc0dFkgAl8g9p1jGKxuaxscoWnnecq3HEej1hz2oh9P3t4yjis9W5pe1tt0hm3g~KJP5TFlvLZEj~dXnSalgcyXAiLNYns7O3q4WIpxATLo4HkzJDiUp6K7HKDI~A80FPutXxtHt0psW4kcDbNiGWZ6Xer1375xOwSZ8sH84l9uVVGO8nGcqjBMVC~shccWYk1ZsMBtN2eNwIz-Qkpow__"
              className="w-full  object-cover shrink-0 sm:rounded-[65px] md:rounded-[65px] lg:rounded-[65px] rounded-2xl  h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterProcess;
