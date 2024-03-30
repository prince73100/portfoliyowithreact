const itemscontent = [
    { title: "Weather App  | HTML, CSS, JavaScript |", description: "this is the give weather about city", img: "image/weatherscreenshot.png" },
    { title: "Expense Traker | React.js", description: "In this project user can track own buget.User also know history of expense", img: "image/expensetracer.png" },
    { title: "Myntra Clone | React.js, Redux, Node.js", description: "In this project user can track own buget.User also know history of expense", img: "image/myntraclone.png" },
    { title: "Text Analyzer | React.js", description: "Case converter is a versatile tool designed to facilitate text manipulation and analysis. It offers the functionality to seamlessly convert text between uppercase and lowercase format while providing detailed analysis of the text characteristics including character count and word count and more", img: "image/text-util.png" }

]
const Projectinfo = () => {
    return <>
        <div className="bg-slate-400">
            <center className="headingproject">
                <h1 className='text-4xl font-bold text-yellow-300'>MY PROJECT</h1>
            </center>
            <div className="project  mt-5">
                {itemscontent.map((item) => <div className="cardsitem ">
                    <div className="crdsimage">
                        <img src={item.img} alt="" />
                    </div>
                    <h1 className='font-bold my-3'>{item.title}</h1>
                    <i className="text-white">{item.description}</i>
                </div>)}

            </div>
        </div>
    </>
}

export default Projectinfo;

