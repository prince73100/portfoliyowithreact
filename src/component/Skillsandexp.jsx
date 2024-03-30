
const skillImage = [
    { img: "image/htmllogo.png" },
    { img: "image/csslogo.png" },
    { img: "image/jslogo.png" },
    { img: "image/reactlogo.png" },
    { img: "image/nodelogo.png" },
    { img: "image/expresslogo.png" },
    { img: "image/mongologo.png" },
    { img: "image/javalogo.png" },

]

const Skillsandexp = () => {
    return <>
        <center className="my-10">
            <h1 className="text-4xl font-bold"><span className="text-yellow-300">Skills</span> And <span className="text-yellow-300">Internship</span></h1>
        </center>
        <center className="mainskillset w-10/12 mx-12">
            <div className="mainSkill">
                <div className="firstmainskills">
                    {skillImage.map(image => <div className="subfirstmainskills my-4">
                        <img src={image.img} alt="" className="htmllogo" />
                    </div>)}

                </div>
                <div className="secondmainskills my-4 text-justify">
                    <div>
                        <i>Jul 2023 - Aug 2023</i>
                        <h1><b><i>TEACHNOOK</i></b></h1>
                        <h1><b>Web Development Internship</b></h1>
                        <p>Training on web development (HTML, CSS, JavaScript,React.js, Node.Js, MySQL)</p><br />
                        <b><i>Project</i></b><br />
                        <i>Expense Tracker is a web application developed using
                            React.js, a popular JavaScript library for building user
                            interfaces. The purpose of the Expense Tracker project is to
                            help users keep track of their expenses, manage their
                            budgets, and analyser their spending habits.
                        </i>
                    </div><br /><br />
                    <div>
                        <i>Jan 2024 - March 2024</i>
                        <h1><b><i>Internshala</i></b></h1>
                        <h1><b>Data Science</b></h1>
                        <p>Training in data Science (Python, Pandas, Data analytics, and Machine Learning concepts)</p><br />
                    </div>
                </div>
            </div>
        </center>
    </>
}

export default Skillsandexp;