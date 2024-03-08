import './style.css';
import HomeImg from '../assets/home.jpg';
export default function Contact() {
    return (
        <section id = 'ContactSection'>
            <div className='Contactdiv'>
                <img src={HomeImg} className='ContactImg' alt="ContactImg"/>
                <form name="Contact our Company">
                    <b> Enter Your Details and Comments:</b>
                    <br /><br />
                    <b>Name: </b> <input type="text" name="name" /><br />
                    <br />
                    <b>Gender: </b>
                    <input type="radio" name="gender" />Male
                    <input type="radio" name="gender" />female
                    <input type="radio" name="gender" />others
                    <br /><br />
                    <b>Address: </b><textarea rows="2" cols="20"></textarea><br />
                    <br />
                    <b>E-mail: </b> <input type="email" name="email" /> <br /><br />

                    <b>Contact: </b>
                    <input type="number" name="phone number" /> <br />
                    <br />
                    <b>Type: </b>
                    <input type="checkbox" name="paint" />Painting
                    <input type="checkbox" name="paint" />Repair Works
                    <input type="checkbox" name="paint" />Designing<br /><br />
                    <b>Comments: </b><textarea rows="2" cols="20"></textarea>
                    <input type="submit" />
                    <input type="reset" />
                    <br /><br />
                    <p><b>Our Address: </b></p>
                    <p>xxx,
                        yyy,
                        zzz,
                        10th street,
                        chennai-600028.</p>
                    <p><b>Contact Numbers: </b></p>
                    <li>9999988888</li>
                    <li>9999977777</li>


                </form>
            </div>
        </section>
    )
}