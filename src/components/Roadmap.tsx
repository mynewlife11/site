import styled from "styled-components";

const Container = styled.div`
  width: 1160px;
  height: 600px;
  margin: 0 auto;
  margin-top: 100px;
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

const Roadmap = () => {
    return (
        <Container id="roadmap">
            <h1>Roadmap</h1>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "80%", marginBottom: "20px"}}>
            <p style={{width: "45%"}}>We are confident that our NFTs are just the beginning of our journey in the crypto sphere. We want to continue to evolve and explore new opportunities for blockchain.
                </p>
                <p style={{width: "45%"}}>In the near future, we plan to expand our product line by launching applications for mobile and desktop devices. These applications will provide our customers with new ways to use our products, as well as access to exclusive features.
                </p>
                </div>

                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "80%", marginBottom: "20px"}}>
                <p style={{width: "45%"}}>We are also working on creating an NFT exchange for our customers. We want our customers to be able to easily and conveniently trade their NFTs and access new unique items created by our company and other artists.

                </p>
                <p style={{width: "45%"}}>We don't stop at what we have achieved and always look for new opportunities for our customers. We are confident that our company will continue to grow and develop, becoming a leader in the crypto sphere and providing our customers with the most innovative products and services.
                </p>
                </div>

                <p style={{width: "45%", marginTop: "40px"}}>Thank you for choosing elfbar! We hope you become part of our ecosystem and enjoy our products and unique opportunities. Follow our news to stay up to date with all the changes and updates!</p>
        </Container>
    )
}

export default Roadmap;