import './style.css';
import webimg from '../assets/webimage.jpg';
import jkimg from '../assets/jk.jpg';
export default function Home(){
return(
    <section id = 'HomeSection'>
    
 <div id="container">
     <div id="bann">
     <img src={webimg} alt="WebImage"/>
     </div>
     <div id="content1"><h4 className="heading">Welcome !</h4>
        <p classNameName="p1">Painting Protects Walls</p>
    <p classNameName="para1"> Painting preserves the interior and exterior surfaces through its protective coat. Painting your home will slow down the wear and tear process and protect your walls from the damaging effects of extreme weather effects All this is possible if done via a professional painter so we heartly welcome you</p>
    </div>
     <div id="content2"><h5 className="heading">Our Services !</h5>
        <ul type="sphere" className="p2">
            <li>Wall Textures</li>
            <li>Wallpapers</li>
            <li>Water Proofing</li>
            <li>Wood Finishes</li>
            <li>Custom Interior Painting</li>
            <li>High-End Exterior Painting</li>
            </ul>
     </div>
   <div id="content3">
         <h6 className="heading">Why Choose Us !</h6>
 <ul type="sphere" className="p3">
            <li>Trained Professionals</li>
            <li>Technical Site Evaluation</li>
            <li>Personalized Colour Consultation</li>
            <li>Stringent Safety Protocal</li>
            <li>Supervised Painting</li>
            <li>Highly Advanced Tools</li>
            </ul>
        </div>
        <div id="bottom1">
            <h7 className="heading">New Look Of The Walls !</h7>
            <dl>
                <dt className="r1"><b>Residential</b></dt>
                <dd className="d1">Expect the best when you hire our team of experts for your residential painting needs. The Painting Company has built our stellar reputation on providing unmatched excellent service and superior results with our painting options. We utilize the latest technology and techniques in the painting industry to give our clients the best quality painting service available for their home.</dd>
                <dt className="r2"><b>Commercial</b></dt>
                <dd className="d2">How your business appears at a glance is a vital component of your brand. Old, worn paint or outdated colors can detract from the professionalism of your company. Our team of commercial painting experts at The Painting Company can help you keep your business looking great inside and out to ensure you make a positive, lasting impression on your customers.</dd>
                </dl>
        </div>
        <div id="bottom2">
            <h8 className="heading">Latest Projects</h8>
            <p className="c">   Creating Accent Walls</p>
            <img src={jkimg} alt='jkimhg'/>
        </div>
 </div>
        <div id="footer">
            <p>Designed by SIVA</p>
        </div>
    </section>
    
)
}