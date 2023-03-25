import styled from 'styled-components';

export const Section = styled('div')<any>`
  width: calc(100% - 64px);
  height: calc(100vh - 192px);
  padding: 70px 0;

  @media only screen and (max-width: 768px) {
    height: auto;
    padding-top: 150px;
  }

  @media only screen and (max-width: 450px) {
    width:auto;
    padding: 32px 0;
  }
`
export const Container = styled('div')<any>`
margin: 0 auto;
justify-content: center;
border-radius: 16px;
background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 150%;
  max-width: 1360px;
  margin-right: auto;
  margin-left: 26px;
  padding: 0 32px;
  display: flex;
  flex-direction: row;
  gap: 70px;
  
  @media only screen and (max-width: 1024px) {
    gap: 48px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 450px) {
    padding: 0 16px;
    width: auto;
  }
`;
export const Column = styled('div')<any>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 64px;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 450px) {
    gap: 32px;
  }
`;
export const MintCount = styled('h3')`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  text-transform: uppercase;
  color: var(--white);
`;
