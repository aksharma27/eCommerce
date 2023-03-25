import React from 'react'
import "../style/user.css";





const CartItem = (props) => {
    return (
        <div style={{ float: "right", marginLeft: "-15%", width: "15%", marginRight: "130px" }}>
            <div className="cart section">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg>
                <p>
                    {props.cartItems}
                    <hr />
                </p>
            </div>
            <div className="saved section">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                </svg>
                <p>
                    {props.savedItems}
                    <hr />
                </p>
            </div>
            <div className="orders section">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-box-seam-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461L10.404 2Z" />
                </svg>
                <p>
                    {props.orderedItems}
                    <hr />
                </p>
            </div>
        </div>
    )
}

const User = () => {
    return (
        <>
            <div className="hero" style={{ width: "100%" }}>
                <div style={{ padding: "1%" }} className="bar">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </a>
                </div>
                <div style={{ height: "350px", backgroundColor: "#404040", color: "#fff", paddingLeft: "60px", padding: "10px" }} className="hero-main">
                    <div className="containers" style={{ marginLeft: "50px" }}>
                        <span><h2>Profile Card</h2></span>
                        <img src={"https://avatars.githubusercontent.com/u/83135634?v=4"} alt="user.png" height="191px" width="195px" style={{ borderRadius: "50%", marginTop: "20px" }} />
                        <CartItem cartItems="19" orderedItems="5" savedItems="30" />
                        <div className="user-info" style={{ marginTop: "20px" }}>
                            <h1>User Name</h1>
                            <span style={{ lineHeight: '2.5' }}>uid-0-1</span>
                        </div>
                    </div>
                </div>

                <div className="account" style={{ paddingTop: "3%", paddingLeft: "3%" }}>
                    <h1>Your Account</h1>

                    <div className="cards">
                        <div className="col1">
                            <div className="address" style={{ backgroundColor: "#D9D9D9", padding: "10px 0 10px 0", width: "25%", border: "2px solid black" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#C36835" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 r0 1 0 6z" />
                                </svg>
                                <h3>Your Address
                                </h3>
                            </div>
                            <div className="security" style={{ backgroundColor: "#D9D9D9", width: "25%", padding: "10px 0 10px 0", border: "2px solid black" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-unlock-fill" viewBox="0 0 16 16">
                                    <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z" />
                                </svg>
                                <h3>Password & Security</h3>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="payment" style={{ backgroundColor: "#D9D9D9", width: "25%", padding: "10px 0 10px 0", border: "2px solid black" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#6EA8EC" class="bi bi-credit-card-2-back-fill" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z" />
                                </svg>
                                <h3>Payment Options</h3>
                            </div>
                            <div className="contact" style={{ backgroundColor: "#D9D9D9", width: "25%", padding: "10px 0 10px 0", border: "2px solid black" }}>
                                <div style={{ backgroundColor: "#75ADBF", borderRadius: "50%", height: "60px", width: "60px" }} >
                                    <svg className='headphone' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#1A2E10" class="bi bi-headset" viewBox="0 0 16 16">
                                        <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                                    </svg>
                                    <h3 style={{ width: "100%" }}>Contact us</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


export default User;
