const Price = () => {
  const box = [
    {
      id: 1,
      heading: "Montly Subscription",
      price: "$29",
      pricedetails: "per month",
      para: "Full access for less than $1 a day",
    },
    {
      id: 2,
      headpart: "Why US",
      paragraph:
        "Tutorials by industry experts peer & expert code review Coding exercises Access to our GitHub rerepos Community forum Flashcard decks  New videos every week",
    },
  ];
  return (
    <div className="w-[40rem] m-auto my-[10rem]  shadow-2xl">
      <div className=" bg-white w-[40rem] rounded-t-xl shadow-2xl pb-10 font-karla pt-10">
        <div className="w-[530px] mx-10 ">
          <h1 className="font-[700] text-2xl  text-[#2AB2AF]">
            Join Our Community
          </h1>
          <p className="font-[700] text-lg text-[#C0DF34] mt-5 ">
            30-days, hassle-free money back guarantee
          </p>
          <p className="text-[#98A6BD] font-[400] text-[16px] mt-2">
            Gain access to our full library of tutorials along with expert code
            reviews perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
      </div>
      <div className="flex w-[40rem] text-[#E5EFF5] shadow-2xl font-karla  ">
        {box?.map((boxes, index) => (
          <div
            key={boxes?.id}
            className={`w-[40rem] ${
              index === 0
                ? "bg-[#209f9d] w-[20rem] p-10 rounded-bl-2xl"
                : index === 1
                ? "bg-[#3dbab8] w-[20rem] p-10 pt-5 rounded-br-2xl "
                : 0
            }`}>
            <div className=" ">
              <h1 className="text-[18px] font-[700]">{boxes?.heading}</h1>
              <div className="flex mt-4  gap-3">
                <p className=" text-3xl">{boxes?.price}</p>
                <p className="my-auto font-[400] text-[#cbd6de]">
                  {boxes?.pricedetails}
                </p>
              </div>
              <p className="mt-1 font-[500] text-[16px]">{boxes?.para}</p>
            </div>
            {/* <button>r jedbbed</button> */}
            <div className="">
              <h1 className="font-[700]">{boxes?.headpart}</h1>
              <p className="mt-5 w-[13rem] font-[400] text-[#cbd6de] text-[16px]">
                {boxes?.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
