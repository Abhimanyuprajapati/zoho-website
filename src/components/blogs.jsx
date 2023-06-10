import "../style/Blogs.css";

const Blogs=()=>{
    return(<div className="blogs">
           <div className="blogs1">
                <span>
                    <h1>Our Blogs</h1>
                </span>
                <span><p>Check out our Latest Blog</p></span>
           </div>
           <div className="blogs2">
                <div  className="blogs3">
                    <img src="./src/img/img14.svg" alt="photo" />
                </div>
                <div  className="blogs3">
                    <img src="./src/img/img15.svg" alt="photo" />
                </div>
                <div className="blogs5">
                    <div className="blogs6">
                        <div  className="blogs7">
                            <span>Trending Now</span>
                            <span>View All</span>
                        </div>
                       <div className="blogs8">
                       <img src="./src/img/img16.svg" alt="photo" />
                        <p>
                            <b className="para">Creative Industries are on the verge of depletion due to COVID-19</b> 
                            <h6> In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact</h6> 
                        </p>
                       </div>

                        <div className="blogs8">
                        <img src="./src/img/img17.svg" alt="photo" />
                        <p>
                            <b className="para">Photography: Expectations vs. Reality</b> 
                            <h6> Most of the time without any hands-on experience in photography, professional and advanced photography actually</h6> 
                        </p>
                        </div>

                       <div className="blogs8">
                       <img src="./src/img/img18.svg" alt="photo" />
                        <p>
                            <b className="para">Wedding Photography at Goa</b> 
                            <h6> Wedding Photography in Goa If not, every couple when they make their list of Pre-wedding shoot </h6> 
                        </p>
                       </div>

                    </div>
                </div>
           </div>
        </div>
    )
};
export default Blogs;



