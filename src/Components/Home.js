import { React } from 'react'
import SlickSlider from "./SlickSlider";
import HomeAbout from "./HomeAbout";
import Blogs from "./Blogs";
import Backdrop from './Backdrop'

const Home = () => {

    return (
        <div>
            <Backdrop />
            <SlickSlider />
            <HomeAbout />
            <div className="container">
                <div className=" py-5 row">
                    <Blogs />
                </div>
            </div>
        </div>
    )
}

export default Home