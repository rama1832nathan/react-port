
import SpotlightCard from "../blocks/SpotlightCard/SpotlightCard";

function Cards({logo,position,comp_name,date,role,link}) {

  return (
    <>
      {/* <div className="flex min-h-screen items-center justify-center "> */}
        <SpotlightCard
          className="h-[500px] w-[300px] sm:h-[500px] sm:w-[300px] md:h-[560px] md:w-[350px] lg:h-[600px] lg:w-[350px] cursor-pointer bg-charcoal border-amber-500 border-4 text-[10px] sm:text-[10px] md:text-[13px] lg:text-[14px]"
        >
        <img className="h-[150px] sm:h-[150px] md:h-[200px] lg-[250px] w-[100%]" src={logo} alt="" />


        <div className="text-white p-8 text-justify font-poppins capitalize">
              <h1 className="text-center">{position}</h1>
              <h1 className="text-center mt-2">{comp_name}</h1>
              <h1 className="text-center mt-2">{date}</h1>
              <h1 className="mt-4">{role}</h1>
        </div>

        <div className="">
          <a href={link} target="_blank" className="flex justify-center w-[100%]" >
          <button className="text-white border-2 font-poppins p-3 w-[80%] rounded-4xl hover:cursor-pointer hover:border-black hover:bg-amber-50 hover:text-black hover:font-bold transition-all duration-700 capitalize">click me</button></a>
        </div>
        </SpotlightCard>
      {/* </div> */}
    </>
  );
}

export default Cards;
