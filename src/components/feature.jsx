import "../style/feature.css";

const Feature=()=>{
    return(<div className="feature">
        <div className="feature1">
            <h1>Our Featured Services</h1>
            <p>Discover the range of services provided by FliqaIndia</p>
        </div>
        <div className="feature2">
            <div className="feature3">
                <img src="./src/img/img8.svg" alt="photo" /><br />
                <span className="few1">Pre Wedding Photoshoot</span>
                <hr />
                <span className="few2"><strong>Starting at</strong> 25,000 (One Day)</span>
                <div><button>Know more</button></div>
            </div>
            <div className="feature3">
                <img src="./src/img/img9.svg" alt="photo" />
                <span className="few1">Wedding Photoshoot</span>
                <hr />
                <span className="few2"><strong>Starting at</strong> 65,000 (Two days )</span>
                <div><button>Know more</button></div>
            </div>
            <div className="feature3">
                <img src="./src/img/img10.svg" alt="photo" />
                <span className="few1">Portfolio Shoot</span>
                <hr />
                <span className="few2"><strong>Starting at</strong> 25,000 (Standard price for 6-8 hours)</span>
                <div><button className="few3">Know more</button></div>
            </div>
            <div className="feature3">
                <img src="./src/img/img11.svg" alt="photo" />
                <span className="few1">Birthday Baby Folio</span>
                <hr />
                <span className="few2"><strong>Starting at</strong> 15,000 (One days)</span>
                <div><button>Know more</button></div>
            </div>
        </div>
        </div>
    );
};
export default Feature;











