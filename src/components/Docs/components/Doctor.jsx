import './Doctor.css'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
 function Doctor(){
    return (
        <div className="boxes">
            <div className="box1">
                <h1>Dr.Alex Star </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eligendi ad officiis fugiat quia, accusamus doloribus alias voluptas debitis incidunt.</p>
                <div className="stars"> <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
            </div>
            <div className="box2">
                <h1>Dr.Jhonny Sins</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eligendi ad officiis fugiat quia, accusamus doloribus alias voluptas debitis incidunt.</p>
                <div className="stars"> <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
            </div>
            <div className="box3">
                <h1>Dr.Lana Rhodes</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eligendi ad officiis fugiat quia, accusamus doloribus alias voluptas debitis incidunt.</p>
                <div className="stars"> <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
            </div>
            <div className="box4">
                <h1>Dr.Mia Malkova</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eligendi ad officiis fugiat quia, accusamus doloribus alias voluptas debitis incidunt.</p>
                <div className="stars"> <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></div>
            </div>

         <button className="booking">Book Your Schedule</button>

        </div>

    )
 }
 export default Doctor;