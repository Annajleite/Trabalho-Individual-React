import { mensagensBiblicas } from "../../data/dados";
import { MensagemCard } from "../../components/MensagemCard";
import { HomeContainer, HeaderContainer, TituloPrincipal, Subtitulo, GridMensagens } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <TituloPrincipal>Emunah</TituloPrincipal>
        <Subtitulo>Uma pausa no seu dia para lembrar do amor de Jesus.</Subtitulo>
      </HeaderContainer>

      <GridMensagens>
        {mensagensBiblicas.map((mensagem) => (
          <MensagemCard key={mensagem.id} item={mensagem} />
        ))}
      </GridMensagens>
    </HomeContainer>
  );
}