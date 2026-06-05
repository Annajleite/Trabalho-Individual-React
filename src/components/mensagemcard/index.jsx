
import { useState } from "react";
import { 
  CardContainer, CardImagem, CategoriaTag, 
  CardTitulo, AreaExpandida, VersiculoTexto, 
  ReflexaoTexto, BotaoAcao 
} from "./style";

export function MensagemCard({ item }) {
  // useState controla se a caixinha de texto está aberta ou fechada
  const [aberto, setAberto] = useState(false);

  return (
    <CardContainer>
      <CardImagem src={item.imagem} alt={item.titulo} />
      <CategoriaTag>{item.categoria}</CategoriaTag>
      <CardTitulo>{item.titulo}</CardTitulo>

      {aberto && (
        <AreaExpandida>
          <VersiculoTexto>{item.versiculo}</VersiculoTexto>
          <ReflexaoTexto>{item.detalhe}</ReflexaoTexto>
        </AreaExpandida>
      )}

      <BotaoAcao onClick={() => setAberto(!aberto)}>
        {aberto ? "Fechar reflexão" : "Meditar nessa mensagem ✨"}
      </BotaoAcao>
    </CardContainer>
  );
}