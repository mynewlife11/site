import styled from "styled-components";

const Container = styled.div`
  width: 1160px;
  height: 500px;
  margin: 0 auto;
  margin-top: 310px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;

const ListItem = styled("li")`
    margin: 10px;
`


const About = () => {
  return (
    <Container id="about">
        <h1>About</h1>

        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "80%", marginBottom: "20px"}}>
            <p style={{width: "45%"}}>Welcome to the elfbar website! We specialize in the production and sale of disposable electronic cigarettes, and we take pride in helping people quit smoking. But we don't stop there, and we want to explore new opportunities in the crypto sphere.</p>
            <p style={{width: "45%"}}>We believe that the technology of unbreakable blockchains and non-fungible tokens (NFTs) opens up new horizons for businesses, and we want to pursue this path. Therefore, we are launching the sale of our NFTs on the Solana network, so our customers can get a unique product and become part of our ecosystem.</p>
        </div>

        <p style={{width: "45%", marginTop: "60px"}}>We invite you to join us on this journey. Our company always strives to be at the forefront of innovation, and we are confident that NFTs open up new possibilities for us and our customers.</p>
    </Container>
  )
}

export default About;



  
  

