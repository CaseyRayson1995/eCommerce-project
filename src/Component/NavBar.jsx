import React from "react";
import { useNavigate } from "react-router-dom";
function NavBar() {
    const navigate = useNavigate(); 

    return (
        <nav style={navStyle}>
            <h1>My App</h1>
            <div style={buttonContainerStyle}>
                <button onClick={() => navigate("/productList")}>
                    Home
                </button>
                <button onClick={() => navigate("/ProductForm")}>
                    Form
                </button>
            </div>
        </nav>
    );
}


