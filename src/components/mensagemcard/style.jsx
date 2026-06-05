
import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #FAFAFA; /* Um tom bem clarinho para dar contraste com o fundo bege */
  border-radius: 4px; /* Quase quadrado, mais sério */
  padding: 16px;
  width: 300px;
  box-shadow: 0 8px 24px rgba(37, 37, 40, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;
  border-bottom: 5px solid #E5AD4F; /* Uma linha Mostarda na base do card */

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(37, 37, 40, 0.2);
  }
`;

export const CardImagem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 2px;
`;

export const CategoriaTag = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #FAFAFA;
  background-color: #5B5C52; /* Fundo Verde Oliva */
  padding: 4px 10px;
  border-radius: 2px;
  font-weight: 700;
  width: fit-content;
`;

export const CardTitulo = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #252528; /* Cor Chumbo */
  margin: 0;
`;

export const AreaExpandida = styled.div`
  background-color: #E3C9A6; /* Fundo Bege para a área expandida */
  padding: 16px;
  border-radius: 2px;
  border-left: 3px solid #9B4423; /* Borda Ferrugem */
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const VersiculoTexto = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem;
  font-style: italic;
  color: #252528;
  margin: 0;
  line-height: 1.5;
`;

export const ReflexaoTexto = styled.p`
  font-size: 0.95rem;
  color: #5B5C52; /* Cor Verde Oliva */
  margin: 0;
  line-height: 1.6;
`;

export const BotaoAcao = styled.button`
  background-color: transparent;
  color: #9B4423; /* Cor Ferrugem */
  border: 1px solid #9B4423;
  padding: 12px;
  border-radius: 2px;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #9B4423; /* Fica Ferrugem ao passar o mouse */
    color: #FAFAFA;
  }
`;