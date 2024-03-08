import int1 from '../assets/int1.png';
import int2 from '../assets/int2.jpg';
import int3 from '../assets/int3.png';
import int4 from '../assets/int4.jpg';
import int5 from '../assets/int5.webp';
import int6 from '../assets/int6.jpeg';
import ext1 from '../assets/ext1.jpg';
import ext2 from '../assets/ext2.jpg';
import ext3 from '../assets/ext3.jpeg';
import ext4 from '../assets/ext4.jpg';
import ext5 from '../assets/ext5.jpg';
import ext6 from '../assets/ext6.jpg';
import './style.css';
export default function Gallery(){
    var a=35180;
    var b=2444;
    var c=26;
    const config = {
        header :"WELCOME TO OUR GALLERY: ",
        line1 :"Hours Of Works: ",
        line2 :"Projects Completed: ",
        line3 :"Years Of Experiance: "
    }
    
    return(
        <section id = "GallerySection">
        <div>
        <h1 className = 'GdivStyle'>{config.header}</h1>
        <p>{config.line1}{a}<br/>{config.line2}{b}<br/>{config.line3}{c}</p>
        </div>
        <p className = 'GpStyle'>Interior Wall Designs:</p>
   <img src={int1} className = 'GImgStyle' alt="Gallery"/>
    <img src={int2} className = 'GImgStyle' alt="Gallery"/>
    <img src= {int3} className = 'GImgStyle'alt="Gallery"/>
    <img src= {int4} className = 'GImgStyle' alt="Gallery"/>
    <img src={int5} className = 'GImgStyle' alt="Gallery"/>
    <img src={int6} className = 'GImgStyle' alt="Gallery"/>
    <p className = 'GpStyle'>Exterior Wall Designs:</p>
    <img src={ext1} className = 'GImgStyle'alt="Gallery"/>
    <img src={ext3} className = 'GImgStyle' alt="Gallery"/>
    <img src={ext2} className = 'GImgStyle' alt="Gallery"/>
    <img src={ext4} className = 'GImgStyle' alt="Gallery"/>
    <img src={ext5} className = 'GImgStyle'alt="Gallery"/>
    <img src={ext6} className = 'GImgStyle'alt="Gallery"/>
        </section>
    )
}

