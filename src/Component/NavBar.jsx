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


            </Navigation>
        </Header>
    );
}

export default NavBar;

