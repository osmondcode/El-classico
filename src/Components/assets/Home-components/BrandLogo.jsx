import logoOne from "../../Images/BENTLEY.png";
import logoTwo from "../../Images/ROLLS ROYCE.png";
import logoThree from "../../Images/AUDI.png";
import logoFour from "../../Images/BMW.png";
import logoFive from "../../Images/MERCEDES.png";
import logoSix from "../../Images/LAMBORGHINI.png";
import logoSeven from "../../Images/TESLA.png";
import logoEight from "../../Images/BUGATTI.png";
import logoNine from "../../Images/MCLAREN.png";
import logoTen from "../../Images/HYUNDAI.png";
import logoEleven from "../../Images/PORSCHE.png";
import logoTwelve from "../../Images/FERRARI.png";
import logoThirteen from "../../Images/TOYOTA.png";
import logoFourteen from "../../Images/JAGUAR.png";
import logoFifTeen from "../../Images/MASERATTI.png";

const BrandLogo = () => {
  const Brands = [
    {
      id: 1,
      name: "Bentley",
      logo: logoOne,
    },
    {
      id: 2,
      name: "Rolls Royce",
      logo: logoTwo,
    },
    {
      id: 3,
      name: "Audi",
      logo: logoThree,
    },
    {
      id: 4,
      name: "BMW",
      logo: logoFour,
    },
    {
      id: 5,
      name: "Mercedes Benz",
      logo: logoFive,
    },
    {
      id: 6,
      name: "Lamborghini",
      logo: logoSix,
    },
    {
      id: 7,
      name: "Tesla",
      logo: logoSeven,
    },
    {
      id: 8,
      name: "Bugatti",
      logo: logoEight,
    },
    {
      id: 9,
      name: "McLaren",
      logo: logoNine,
    },
    {
      id: 10,
      name: "Hyundai",
      logo: logoTen,
    },
    {
      id: 11,
      name: "Porsche",
      logo: logoEleven,
    },
    {
      id: 12,
      name: "Ferrari",
      logo: logoTwelve,
    },
    {
      id: 13,
      name: "Toyota",
      logo: logoThirteen,
    },
    {
      id: 14,
      name: "Jaguar",
      logo: logoFourteen,
    },
    {
      id: 15,
      name: "Maserati",
      logo: logoFifTeen,
    },
  ];
  return (
    <section className="w-full flex flex-col items-center justify-start gap-[10px]">
      {/* <div className="w-full flex flex-wrap items-center justify-center gap-2">
        {Brands.map((brand, i) => (
          <div
            key={i}
            className="w-fit h-[40px] flex items-center justify-center gap-2 border-[1.5px] border-[#777] rounded-[12px] text-[--dark] px-3"
          >
            <h4>{brand.name}</h4>
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-w-[70px] max-h-[30px]"
            />
          </div>
        ))}
      </div> */}

      <marquee direction="left" className="py-1">
        <div className="w-full flex gap-2">
          {Brands.map((brand, i) => (
            <div
              key={i}
              className="w-fit h-[40px] flex items-center justify-center gap-2 border-[1.5px] border-[#777] rounded-[12px] px-3"
            >
              <h4>{brand.name}</h4>
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-[70px] max-h-[30px]"
              />
            </div>
          ))}
        </div>
      </marquee>

      <marquee direction="right" className="py-1">
        <div className="w-full flex gap-2">
          {Brands.map((brand, i) => (
            <div
              key={i}
              className="w-fit h-[40px] flex items-center justify-center gap-2 border-[1.5px] border-[#777] rounded-[12px] px-3"
            >
              <h4>{brand.name}</h4>
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-[70px] max-h-[30px]"
              />
            </div>
          ))}
        </div>
      </marquee>
    </section>
  );
};
export default BrandLogo;
