import "./App.css";

function App() {
    return <>
        <nav>
            <div className="logo"><img src="/images/logo.png" alt="logo" /></div>
            <ul>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
            <button>Login</button>
        </nav>

        <div className="container">
            <div className="left">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="btn">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>

                <div className="shop">
                    <div>Also Available On</div>
                    <img src="/images/amazon.png" alt="amazon" />
                    <img src="/images/flipkart.png" alt="flipkart" />
                </div>
            </div>
            <div className="right">
                <img src="/images/shoe.png" alt="shoe" />
            </div>
        </div>
    </>
}

export default App