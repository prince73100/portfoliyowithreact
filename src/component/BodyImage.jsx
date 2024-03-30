import images from '../assets/princeprof.png';
import { MdAttachment } from "react-icons/md";
const BodyImage = () => {
    return <>
        <div className='backimage'>
            <center className="heading my-4">
                <h1 className='text-4xl font-bold text-yellow-300'>About Me</h1>
            </center>
            <div className='bodyImage'>
                <div className="image">
                    <img src={images} alt="" className='rounded-2xl' width={350} />
                </div>
                <div className="paragraph rounded-2xl" style={{  width:'350px' }}>
                    <p className='text-white'>Hey, I am <span className='text-yellow-300'>Prince Prajapati</span>, a passionate software developer from Lucknow,Uttar Pradesh, with wide variety of skill in design, frontend and backend development. I love building crazy stuffs and you can always find me learning new things. I believe in minimalism and team work.</p><br />
                    <b className='text-yellow-300'>Education-</b>
                    <p className='text-white'>B.Tech Computer Science and Engineering.
                        Shri Ramswaroop Memorial University,Lucknow. CGPA 7.75</p>
                </div>
            </div>
            <center>
                <button className='btn'><a href="image/princeNauReu.pdf">Resume </a><span><MdAttachment /></span></button>
            </center>
        </div>
    </>
}

export default BodyImage