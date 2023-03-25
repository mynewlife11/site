import styled from "styled-components";

const Container = styled.div`
  width: 1160px;
  height: 450px;
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

const Utility = () => {
    return (
        <Container id="utility">
            <h1>Utility</h1>
            
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "80%", marginBottom: "20px"}}>
            <p style={{width: "45%"}}>By purchasing our NFTs, you become the owner of a unique item that can bring you not only pleasure but also practical benefits.
                </p>
                <p style={{width: "45%"}}>Owners of our NFTs receive a set of items with our company branding, including a t-shirt and a sweatshirt. The set also includes disposable electronic cigarettes, which will allow you to enjoy the taste and aroma without harming your health.
                </p>
                </div>

                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "80%", marginBottom: "20px"}}>
                <p style={{width: "45%"}}>In the near future, we are launching a p2e game from our partners, and owners of our NFTs will receive a drop set with valuable prizes and rare items in the game.
                </p>
                <p style={{width: "45%"}}>But that's not all. We are working on creating even more gifts and opportunities for our most loyal customers. Follow our social media to stay up to date with the news!
                </p>
                </div>

           
        </Container>

        )
    }
    


export default Utility;