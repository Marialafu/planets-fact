import Header from "../../components/header/Header";
import HomeBody from "../../components/home-body/HomeBody";
import MobileMenu from "../../components/mobile-menu/MobileMenu";

const Home = ({openMenu, setOpenMenu}) => {
    return (
    <>
    <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
    {openMenu && <MobileMenu /> }
    <HomeBody />
    
    </>
    )
};

export default Home;
