import graduated from "./asset/graduated_student.jpeg";

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="about-pic">
                <div className="about-text">
                <h1 className="display-5">About Us</h1>
                <p>Our school is dedicated to providing a nurturing learning environment that fosters academic success, creativity, and character development.</p>
                </div>
            </div>
            <div className="container">
            <div className="about-second">
                <div>
                    <div className="card">
                        <h4>Who we are</h4>
                        <p>loxveyuvxgjevxveveyxvyuevxcy</p>
                    </div>
                </div>
                <div>
                    <img src={graduated}/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default AboutUs;