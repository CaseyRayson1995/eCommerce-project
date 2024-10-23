// import React from "react";
// import { NavLink } from "react-router-dom";
// function NavBar() {
//     return (
//         <header>
            
//             <h1>Test</h1>

//             <nav>
//                 <NavLink
//                 to="/" className={({ isActive }) => isActive ? "active home-link" : "home-link"}>Home</NavLink>

//                 <NavLink
//                 to="/products/new" className={({ isActive }) => isActive ? "active list-link" : "list-link"}>New Form</NavLink>
//             </nav>

//         </header>

//     );
// }

// export default NavBar

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Styled components
const Header = styled.header`
    background-color: #282c34;
    padding: 20px;
    color: white;
    text-align: center;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 2rem;
`;

const Navigation = styled.nav`
    margin-top: 10px;
`;

const StyledNavLink = styled(NavLink)`
    color: #61dafb;
    text-decoration: none;
    margin: 0 15px;
    font-size: 1.2rem;

    &.active {
        font-weight: bold;
        color: #ffffff; /* Active link color */
    }

    &:hover {
        text-decoration: underline; /* Underline effect on hover */
    }
`;

function NavBar() {
    return (
        <Header>
            <Title>One Stop Shop</Title>
            <Navigation>
                <StyledNavLink to="/" end>
                    Home
                </StyledNavLink>
                <StyledNavLink to="/products/new">
                    New Form
                </StyledNavLink>
            </Navigation>
        </Header>
    );
}

export default NavBar;
