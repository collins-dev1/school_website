import school_pic from "./asset/school_picture1.jpeg";
import school_pic1 from "./asset/school_picture2.jpeg";
import school_pic2 from "./asset/school_picture3.jpeg";


const Header = () => {
    return (
        <div>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={school_pic} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
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
                    </div>
                    <div class="carousel-item">
                        <img src={school_pic2} class="d-block w-100" alt="..." />
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
        </div>
    );
}

export default Header;