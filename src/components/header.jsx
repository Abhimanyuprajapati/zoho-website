import "/src/style/Header.css";

const Header=()=>{
    return (<header>
        <div className="header">
            <div className="logo">
                <li><img src="./src/img/img1.svg" alt="logo" /></li>
                <li>Home</li>
                <li>Service</li>
                <li>Portfolio</li>
                <li>Community</li>
                <li>Blog</li>
            </div>
            <div className="login">
                <button>Sign Up</button>
                <button>Sign In</button>
            </div>
        </div>
        <div className="headerImg">
            <img src="./src/img/img2.svg" alt="photo img" />
        </div>
    </header> 
    )
}
export default Header;