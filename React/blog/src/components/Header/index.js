import logosvg from '../../svg/logo.svg';
const Header = () => {
    return (
        <>
            <header>
                <div className="logo border">
                    <img src={logosvg} alt="logo" />
                </div>
                <div className="search"></div>
                <div className="menu"></div>
            </header>
        </>
    );
};
export default Header;