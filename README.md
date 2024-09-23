#Landing Page para Adoção de Gatos FIV+ e FeLV+ 😻
Este projeto visa conectar gatos FIV+ e FeLV+ com lares amorosos através de uma landing page informativa e acolhedora. 
A página apresenta informações sobre essas condições, desmistificando o tema e incentivando a adoção responsável.

Tecnologias Utilizadas:

#Frontend:

React: 18.3.1,
Vite: 5.4.1

#Backend:
Node.js: v16.20.2
Express.js: v4.20.0

#Sobre a aplicação:

Navbar: Menu de navegação com o titulo 
Seção de Apresentação: Conteúdo envolvente que descreve a missão da página e a importância da adoção de gatos FIV+ e FeLV+.
Cards de Gatos: Galeria com fotos e informações individuais de cada gato disponível para adoção.
Modal "Adotar": Botão em cada card que abre um modal solicitando as informaçoes do usuario que deseja adotar.
Depoimentos: Seção inspiradora com relatos de pessoas que adotaram gatos FIV+ e FeLV+, mostrando a beleza da experiência.
Footer: Contém informações de contato da ONG, links para redes sociais e políticas de privacidade.
Passo a Passo para Execução do Projeto:

1. Configuração do Ambiente:

Certifique-se de ter o Node.js e o npm instalados em sua máquina.
Clone os repositórios do frontend e do backend:
git clone https://github.com/seu-usuario/frontend-adocao-gatos.git
git clone https://github.com/samiferreira/Fiv-Felv-Cats.git
Acesse as pastas dos projetos:
cd frontend-adocao-gatos
cd Fiv-Felv-Cats
Instale as dependências em ambos os projetos:
npm install
2. Configuração do Backend:

CORS: Configure o CORS no arquivo server.js do backend para permitir requisições vindas do seu frontend.
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173' // Substitua pela URL do seu frontend
}));
3. Inicializando o Projeto:

Inicie o servidor do backend:
npm run dev
Em um novo terminal, inicie o servidor do frontend:
npm run dev
4. Acesse a Aplicação:

Abra seu navegador e acesse http://localhost:5173 (ou a porta definida no seu projeto).
Repositório da API:

Backend: https://github.com/samiferreira/Fiv-Felv-Cats
