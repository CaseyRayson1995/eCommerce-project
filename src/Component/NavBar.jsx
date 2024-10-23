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

import React, { useState } from "react";
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
    display: flex;
    justify-content: center;
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

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const DropdownButton = styled.button`
    background: none;
    color: inherit;
    font: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    }
`;

const DropdownContent = styled.div`
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    background-color: #282c34;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
`;

const DropdownLink = styled(NavLink)`
    color: #61dafb;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
        background-color: #ffffff;
        color: #282c34;
    }

    &.active {
        font-weight: bold;
        color: #ffffff; /* Active link color */
    }
`;

function NavBar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

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

                
                <DropdownContainer>
                    <DropdownButton onClick={toggleDropdown}>
                        Inventory
                    </DropdownButton>
                    <DropdownContent isOpen={isDropdownOpen}>
                        <DropdownLink to="/products?type=jewelry">jewelry</DropdownLink>
                        <DropdownLink to="/products?type=shirt">shirts</DropdownLink>
                        <DropdownLink to="/products?type=pants">Pants</DropdownLink>
                    </DropdownContent>
                </DropdownContainer>
            </Navigation>
        </Header>
    );
}

export default NavBar;

