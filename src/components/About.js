import './style.css';
import aboutimg from '../assets/about.jpeg';
export default function About() {
    return (
        <section id ='AboutSection'>
            <h1>About Us:</h1>
            <img src={aboutimg} className='AboutImg' alt="AboutImg" />
            <p className='AboutSubHeaders'><b>What You Need to Know About The Painting Company:</b></p>
            <p> We want to do more than just paint your home or business. It is our goal to provide a level of service that goes above and beyond the norm in our industry. Our customers keep coming back to us for a reason – we live up to our promises and treat our customers as we would want to be treated.

                What you need to know about us is that we care about our customers and our reputation. We have built our clientele by providing exceptional service since 2001 and we have now expanded our services beyond the Arizona border to Las Vegas due to the quality and integrity we provide. These attributes include:

                Trustworthiness. We are bonded, licensed, and insured with reliable employees.
                Consistency. Our strategic processes allow us to consistently provide quality workmanship with every project we complete.
                Commitment. We guarantee our customer’s satisfaction – our crew foreman will ensure you are satisfied before we consider a job completed. We also offer 3, 5, and 10-year warranties.
                Value. Our prices are competitive and with our extended warranties, you can be sure you get the most value for your investment.
            </p>
            <p className='AboutSubHeaders'><b>Get to Know The Painting Company:</b></p>
            <p>Whether you need new paint in your kitchen or own a warehouse that needs exterior paint, we are your trusted source for quality workmanship. Get to know us by calling to get an estimate the next time you are planning a new painting project.

            </p>
        </section>
    )
}