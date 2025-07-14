const itemscontent = [
  {
    title: "Weather App  | HTML, CSS, JavaScript |",
    description: "this is the give weather about city",
    img: "image/realState.png",
  },
  {
    title: "Expense Traker | React.js",
    description:
      "In this project user can track own buget.User also know history of expense",
    img: "image/sahibot.png",
  },
  {
    title: "Myntra Clone | React.js, Redux, Node.js",
    description:
      "In this project user can track own buget.User also know history of expense",
    img: "image/salonApp.png",
  },
  {
    title: "Text Analyzer | React.js",
    description:
      "Case converter is a versatile tool designed to facilitate text manipulation and analysis. It offers the functionality to seamlessly convert text between uppercase and lowercase format while providing detailed analysis of the text characteristics including character count and word count and more",
    img: "image/caseconvertor.png",
  },
];
const Projectinfo = () => {
  return (
    <>
      <div className="bg-slate-400">
        <h1 className="text-4xl font-bold text-yellow-300  text-center py-5">
          MY PROJECT
        </h1>
        <div className="flex justify-center">
          <div className="w-11/12 lg:flex lg:justify-evenly lg:flex-wrap lg:gap-y-10 lg:gap-x-5 md:flex md:justify-evenly md:flex-wrap md:gap-y-10 md:gap-x-5 mt-5">
            {itemscontent.map((item, index) => (
              <div className="lg:w-1/3 md:w-1/3" key={index}>
                <div className="bg-rose-500 w-full">
                  <img src={item.img} alt="" className="w-full" />
                </div>
                <h1 className="font-bold my-3">{item.title}</h1>
                <i className="text-white">{item.description}</i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectinfo;
