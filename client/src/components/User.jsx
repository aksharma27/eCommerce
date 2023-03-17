import React from 'react'
import "../style/user.css";

const User = () => {
    return (
        <>
            <div className="hero">
                <div style={{ padding: "1%" }} className="bar">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </a>
                </div>
                <div style={{ height: "350px", width: "100%", backgroundColor: "#404040", color: "#fff", paddingLeft: "30px", padding: "10px" }} className="hero-main">
                    <div className="containers" style={{ marginLeft: "20px" }}>
                        <span><h2>Profile Card</h2></span>
                        <img src={"https://avatars.githubusercontent.com/u/83135634?v=4"} alt="user.png" height="151px" width="150px" style={{ borderRadius: "50%", marginTop: "20px" }} />
                        <div className="user-info" style={{ marginTop: "20px" }}>
                            <h1>User Name</h1>
                            <span style={{ lineHeight: '2.5' }}>uid</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default User;
