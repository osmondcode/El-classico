const ScrollSec = () => {
  return (
    <section className="w-full h-fit my-10 mt-[120px] flex items-center justify-center">
      <div className="w-[95%] flex items-center justify-center overflow-hidden  ">
        <marquee className="w-full">
          <span className="w-full flex items-center justify-between gap-5 text-[17px]%">
            <p>El-clasico Foundation</p>
            <p>Beyond100</p>
            <p>People and expertise</p>
            <p>History and heritage</p>
            <p>Motorsport</p>
            <p>Factory tour</p>
            <p>El-clasico News</p>
          </span>
        </marquee>
      </div>
    </section>
  );
};
export default ScrollSec;
