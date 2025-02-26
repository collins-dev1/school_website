import school_building from "./asset/school_building.jpeg";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-pic">
                <div className="contact-text">
                    <h1 className="display-5">Contact Us</h1>
                    <p>Have questions or need assistance? Get in touch with us! We're here to help and look forward to hearing from you.</p>
                </div>
            </div>
            <div>
                <div>
                    <img src={school_building} />
                </div>
                <div>
                    <div>
                        <h1>Contact Us</h1>
                        <p>Your "Contact Us" header text should be clear, inviting, and professional. It sets the tone for how visitors reach out to you. Here’s a short description:

                            "Have questions or need assistance? Get in touch with us! We're here to help and look forward to hearing from you."

                            Let me know if you want something more formal, friendly, or tailored to your business </p>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;