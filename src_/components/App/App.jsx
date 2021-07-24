
import { Container } from '../Container/container'
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import { Gallery } from "../Gallery/Gallery";
import { CompanyList } from "../CompanyList/CompanyList";



const App = () => {
    return (
    <>
    <Container>
    <Header />
    <Hero />
    <Gallery />
    <CompanyList/>
    </Container>    
    </>
    );
}
export default App;