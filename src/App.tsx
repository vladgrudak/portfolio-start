import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import styled from "styled-components";
import photo from "./assets/img/my-photo.webp"
import {Majors} from "./layout/sections/majors/Majors";


function App() {
    return (
        <div className="App">
            <StyledHeaderMainWrapper>
                <Header />
                <Main />
            </StyledHeaderMainWrapper>
            <Majors />

        </div>
    );
}

const StyledHeaderMainWrapper = styled.div`
    min-height: 743px;
    background-color: rgba(213, 232, 255, 0.95);
    background-image: url("${photo}");
    background-repeat: no-repeat;
    background-position: 100%;
    `

export default App;