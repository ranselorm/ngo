import Image from "next/image";

const About = () => {
  return (
    <section className="px-4 md:px-10 md:pt-[150px] mt-[80px] md:-mt-[20px]">
      <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-6/12">
          <article className="flex flex-col gap-y-6">
            {/* <h4 className="uppercase font-bold text-[12px]">Get to know us</h4> */}
            <h2 className="text-[28px] my-3">About Us</h2>
            <p>
              At
              <span className="ml-1 capitalize font-semibold">
                Vine living waters Ministries
              </span>
              , we are driven by a single goal: to make the world a better place
              through education and empowerment. Established with the vision
              <span className="ml-1 font-semibold">
                to create a lasting impact in the lives of widows and to foster
                educational growth
              </span>
              , our organization works tirelessly to provide resources and
              support for those in need.
            </p>
            <p>
              Our mission is twofold: Firstly, we focus on providing quality
              education to underprivileged children and adults, believing
              education is a key to a better future and breaking the cycle of
              poverty.
            </p>
            <p>
              Secondly, we dedicate ourselves to supporting widows, offering
              financial aid, skill development, and psychological support to
              help them regain independence and live with dignity after the loss
              of a spouse
            </p>
            <button className="bg-secondary text-white py-2.5 px-8 uppercase text-[18px] rounded-md border-2 border-secondary hover:bg-transparent hover:text-black transition hover:border-secondary w-full md:w-max hidden md:flex">
              Contact Us
            </button>
          </article>
          {/* <div className="flex">
            <div>
              <h2 className="font-bold">Our Vison</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                ratione, explicabo non, reiciendis sit ab nesciunt earum
                possimus quidem officiis laborum tenetur nostrum debitis at
                temporibus vitae consequatur, asperiores reprehenderit?
              </p>
            </div>
            <div>
              <h2 className="font-bold">Our Mission</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                ratione, explicabo non, reiciendis sit ab nesciunt earum
                possimus quidem officiis laborum tenetur nostrum debitis at
                temporibus vitae consequatur, asperiores reprehenderit?
              </p>
            </div>
          </div> */}
        </div>
        <div className="w-full md:w-6/12 flex justify-center">
          <div className="relative w-full md:w-8/12 h-[500px] rounded-lg overflow-hidden">
            <Image src="/woman.png" alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
