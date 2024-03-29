import { TfiEmail } from "react-icons/tfi";
import { MdSendToMobile } from "react-icons/md";

const socialImage=[
    {img:"image/githublogo.png",link:"https://github.com/prince73100"},
    {img:"image/linkedinlogo.png",link:"https://www.linkedin.com/in/prince-prajapati-266325242/"},
    {img:"image/leetcodes.png",link:"https://leetcode.com/princepjng85/"},
    
]
const Contact = () => {
    return <>
        <footer className="footer">
            <center className="lettalk">
                <h1 className="text-4xl font-bold mt-10">let's <i className="text-yellow-300">talk</i></h1>
            </center>
            <center className="grid grid-cols-2 mt-10">
                <div className="email bg-slate-200 rounded">
                    <span className="mt-4"><TfiEmail /></span>
                    <h1 className="py-2">princepjng85@gmail.com</h1>
                </div>
                <div className="mobnumber bg-slate-200 rounded">
                    <span className="mt-4"><MdSendToMobile /></span>
                    <h1 className="py-2">+91 7310070056</h1>
                </div>
            </center>
            <center className="">
                <div className="findme">
                    <h1 className="text-4xl font-bold mt-10">Find <span className="text-yellow-300"><i> me</i></span></h1>
                </div>
                <div className="sociallink">
                    {socialImage.map(image=><a href={image.link}><img src={image.img} alt="" /></a>)}
                </div>
                <div className="rights mt-12">
                    <i>2024 Prince</i>
                    <p>All rights reserved</p>
                </div>
            </center>
        </footer>
    </>
}

export default Contact;