import Image from "next/image";

const WeDo = () => {
  return (
    <section className="px-4 md:px-10 mt-[100px] py-[50px] mb-[100px]">
      <div>
        <div className="md:w-7/12 mx-auto text-center mb-10">
          <h4 className="text-[25px]">What We Do</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elil.</p>
        </div>

        <div className="w-full flex flex-wrap flex-col md:flex-row justify-center items-center gap-y-10 gap-x-6">
          <article className="md:w-[350px] rounded-md overflow-hidden shadow-md flex flex-col gap-4">
            <div className="relative w-full h-[250px]">
              <Image src="/h.png" alt="" fill className="object-cover" />
            </div>
            <div className="px-3 pb-5">
              <h4 className="font-bold mb-2 text-[23px]">
                Educational Programs
              </h4>
              <p>
                We offer scholarships and learning resources to underprivileged
                children and adults, aiming to provide accessible and quality
                education.
              </p>
            </div>
          </article>
          <article className="md:w-[350px] rounded-md overflow-hidden shadow-md flex flex-col gap-4">
            <div className="relative w-full h-[250px]">
              <Image src="/woman.png" alt="" fill className="object-cover" />
            </div>
            <div className="px-3 pb-5">
              <h4 className="font-bold mb-2 text-[23px]">Support for Widows</h4>
              <p>
                We provide financial aid, skill-building workshops, and
                emotional support to widows, helping them achieve independence
                and emotional well-being.
              </p>
            </div>
          </article>
          <article className="md:w-[350px] rounded-md overflow-hidden shadow-md flex flex-col gap-4">
            <div className="relative w-full h-[250px]">
              <Image src="/h.png" alt="" fill className="object-cover" />
            </div>
            <div className="px-3 pb-5">
              <h4 className="font-bold mb-2 text-[23px]">
                Awareness Campaigns
              </h4>
              <p>
                We conduct campaigns to raise awareness about education's
                importance and widows' challenges, advocating for supportive
                policies.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WeDo;
