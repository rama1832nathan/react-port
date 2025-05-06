
import SpotlightCard from "../blocks/SpotlightCard/SpotlightCard";

function Cards({logo,position,comp_name,date,role,link}) {
  return (
    <div className="max-w-sm  mx-auto my-6 bg-navy border-powder border-2 shadow-lg rounded-2xl p-6 transform hover:scale-105 hover:cursor-pointer transition-all duration-300 font-poppins"
>
      {/* <img src={logo} alt="" className="w-16 h-16 mb-4 rounded-full" /> */}
      {/* <img src={logo} alt="" /> */}
      <h2 className="text-xl font-semibold text-lorange mb-2"> {position}</h2>
      <p className="text-white mb-5"><span className="font-medium">{comp_name}</span></p>
      <p className="text-white mb-5"><span className="font-medium"></span> {date}</p>
      <p className="text-white mb-10"><span className="font-medium"></span> {role}</p>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border-lorange border-2 text-white px-4 py-2 rounded-lg hover:bg-lorange
        hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 font-bold"
      >
        View Project
      </a>
    </div>
  );
  // return (
  //   <>
  //     {/* <div className="flex min-h-screen items-center justify-center "> */}
  //       <SpotlightCard
  //         className="h-[500px] w-[300px] sm:h-[500px] sm:w-[300px] md:h-[560px] md:w-[350px] lg:h-[600px] lg:w-[350px] cursor-pointer bg-gradient-to-b from-gray-800 via-gray-900 to-black border-lorange border-3 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-500 text-[10px] sm:text-[10px] md:text-[13px] lg:text-[14px]"
  //       >



  //       <div className="text-white p-8 text-justify font-poppins capitalize">
  //             <h1 className="text-center">{position}</h1>
  //             <h1 className="text-center mt-2">{comp_name}</h1>
  //             <h1 className="text-center mt-2">{date}</h1>
  //             <h1 className="mt-4 font-bold">{role}</h1>
  //       </div>

  //       <div className="">
  //         <a href={link} target="_blank" className="flex justify-center w-[100%]" >
  //         <button className="text-white border-2 font-poppins p-3 w-[80%] rounded-4xl hover:cursor-pointer hover:border-black hover:bg-amber-50 hover:text-black hover:font-bold transition-all duration-700 capitalize">click me</button></a>
  //       </div>
  //       </SpotlightCard>
  //     {/* </div> */}
  //   </>
  // );
}

export default Cards;
