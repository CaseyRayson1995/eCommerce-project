import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

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
    align-items: center;
`;

const StyledNavLink = styled(NavLink)`
    color: #61dafb;
    text-decoration: none;
    margin: 0 15px;
    font-size: 1.2rem;

    &.active {
        font-weight: bold;
        color: #ffffff;
    }

    &:hover {
        text-decoration: underline;
    }
`;

const Dropdown = styled.div`
    position: relative;
    display: inline-block;

    &:hover .dropdown-content {
        display: block;
    }
`;

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #282c34;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;

    a {
        color: #61dafb;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    a:hover {
        background-color: #333;
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

                <Dropdown>
                    <StyledNavLink as="span">Products</StyledNavLink>
                    <DropdownContent className="dropdown-content">
                        <Link to="/products?type=jewelry">See All Jewelry</Link>
                        <Link to="/products?type=shirt">See All Shirts</Link>
                        <Link to="/products?type=pants">See All Pants</Link>
                    </DropdownContent>
                </Dropdown>
            </Navigation>
        
        </Header>
    );
}

export default NavBar;