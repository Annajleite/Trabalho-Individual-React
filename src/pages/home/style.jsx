import styled from "styled-components";

export const HomeContainer = styled.main`
  min-height: 100vh;
  background-color: #E3C9A6; /* Fundo Bege da paleta */
  padding: 60px 20px;
`;

export const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TituloPrincipal = styled.h1`
  font-family: 'Playfair Display', serif;
  color: #9B4423; /* Cor Ferrugem/Terracota */
  font-size: 4.5rem;
  margin: 0;
  font-weight: 700;
  letter-spacing: -1px;
`;

export const Subtitulo = styled.h2`
  color: #5B5C52; /* Cor Verde Oliva/Musgo */
  font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  margin: 0;
  font-weight: 400;
  font-style: italic;
  letter-spacing: 1px;
`;

export const GridMensagens = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
`;