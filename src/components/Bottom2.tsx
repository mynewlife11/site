import styled from "styled-components";

const Container = styled.div`
background-image: url('/bottom2.png');
background-repeat: repeat;
background-size: 100% 100%;
height: 90px;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
width: 100%;
margin-top: 600px;
color: #333;

@media only screen and (max-width: 450px) {
  top: 16px;
}
`;





const Bottom = () => {
    return (
        <Container id="bottom">
            <h4>Copyright © 2023 SMOKING FROGS. All rights reserved.</h4>
        </Container>
    )
}

export default Bottom;