import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="pt-[150px]">
      <div className="w-[220px] h-[220px] bg-secondary bg-opacity-15 -ml-1 rounded-tr-lg rounded-br-lg" />
      <div className="flex flex-col gap-8 md:flex-row py-6 px-4 md:px-10 ml-2 md:ml-[50px] rounded-lg bg-white shadow-lg -mt-[170px] md:pl-[40px]">
        <div className="w-full md:w-9/12 flex flex-col gap-y-6 items-start">
          <h2 className=" text-[25px] md:text-[30px] lg:text-[40px] md:leading-[45px] capitalize">
            Transforming Lives Through Education and Support. Empowering
            Children and Widows
          </h2>
          <p>
            Join us in breaking the barriers of poverty through education and in
            supporting the journey of resilience and independence for widows.
            Together, we can create a world where everyone has the opportunity
            to thrive.
          </p>
          <button className="bg-secondary text-white py-3 px-10 uppercase text-[20px] rounded-md border-2 border-secondary hover:bg-transparent hover:text-black transition hover:border-secondary w-full md:w-max">
            Donate Now
          </button>
        </div>
        <div className="md:w-6/12 md:-mt-[140px]">
          <div className="relative w-full h-[520px]">
            <Image src="/h.png" alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
