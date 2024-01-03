const JoinUs = () => {
  return (
    <section className="-mt-[220px] md:-mt-[190px] mb-[80px] py-4 bg-secondary md:w-8/12 mx-auto rounded-lg">
      <div className="px-4 md:px-10">
        <div className="flex flex-col md:flex-row gap-y-6 items-center justify-center">
          <article className=" w-full md:w-9/12 px-6">
            <h2 className="text-[25px] uppercase">Join Us</h2>
            <p>
              Educate the underprivileged, support widows, and drive lasting
              change through your active involvement.
            </p>
          </article>
          <div className=" w-full md:w-3/12 flex justify-center">
            <button className="bg-white text-black py-2.5 px-8 uppercase text-[18px] rounded-md transition w-full flex justify-center ">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
