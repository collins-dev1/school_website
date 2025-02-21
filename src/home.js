import school_pic from "./asset/school_picture1.jpeg";
import school_pic1 from "./asset/school_picture2.jpeg";
import school_pic2 from "./asset/school_picture3.jpeg";
import line from "./asset/line.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Home = () => {
    return (
        <main>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={school_pic} class="d-block w-100" alt="..." />
                        <div class="carousel-caption">
                            <h5 className="display-5" style={{
                                color: "#FFF605",
                                fontWeight: "bold",

                            }}>A good education is a foundation for better future</h5>
                            <p>A community with high expectation and high academic achievement.</p>
                            <button>Get Started</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={school_pic1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption">
                            <h5 className="display-5" style={{
                                color: "#FFF605",
                                fontWeight: "bold",

                            }}>A good education is a foundation for better future</h5>
                            <p>A community with high expectation and high academic achievement.</p>
                            <button>Get Started</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={school_pic2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption">
                            <h5 className="display-5" style={{
                                color: "#FFF605",
                                fontWeight: "bold",

                            }}>A good education is a foundation for better future</h5>
                            <p>A community with high expectation and high academic achievement.</p>
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* Total section */}
            <div className="total">
                <div>
                    <h5>250+</h5>
                    <p>Total Courses</p>
                </div>
                <div>
                    <h5>300+</h5>
                    <p>Total Instractor</p>
                </div>
                <div>
                    <h5>35k+</h5>
                    <p>Total Students</p>
                </div>
                <div>
                    <h5>42k+</h5>
                    <p>Total Seat</p>
                </div>
            </div>

            {/* Working process section */}
            <div className="working">
                <div className="working-text">
                    <h3>Working Process and Benefits</h3>
                    <img src={line} />
                </div>
                <div className="working-container">
                    <Link>
                        <div>
                            <div className="search"><i className="ri-search-line"></i></div>
                            <h6>Find Course</h6>
                        </div>
                    </Link>
                    <Link>
                        <div>
                            <div className="book"><i class="ri-add-circle-fill"></i></div>
                            <h6>Book Seat</h6>
                        </div>
                    </Link>
                    <Link>
                        <div>
                            <div className="award"><i class="ri-medal-2-line"></i></div>
                            <h6>Find Course</h6>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Home;