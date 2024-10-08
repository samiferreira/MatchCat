#Landing Page para Adoção de Gatos FIV+ e FeLV+ 😻
Este projeto visa conectar gatos FIV+ e FeLV+ com lares amorosos através de uma landing page informativa e acolhedora. 
A página apresenta informações sobre essas condições, desmistificando o tema e incentivando a adoção responsável.

Tecnologias Utilizadas:

#Frontend:

React: 18.3.1,
Vite: 5.4.1
Axios: Para realizar requisições HTTP à API.

#Backend:
Node.js: v16.20.2
Express.js: v4.20.0

#Sobre a aplicação:

Navbar: Menu de navegação com o titulo
![image](https://github.com/user-attachments/assets/afd687eb-593b-4206-b1f6-2698e850ca43)


Seção de Apresentação: Conteúdo que descreve a missão da página e a importância da adoção de gatos FIV+ e FeLV+.

![image](https://github.com/user-attachments/assets/0434a4b2-74cb-4783-9582-5811bc153e36)



Cards de Gatos: Galeria com fotos e informações individuais de cada gato disponível para adoção.
![image](https://github.com/user-attachments/assets/009b9c9d-b650-47a7-aa3e-96e5c4afe49e)


Modal "Adotar": Botão em cada card que abre um modal solicitando as informaçoes do usuario que deseja adotar.
![image](https://github.com/user-attachments/assets/055bac65-c5da-4c3e-9897-06cd1ce25438)


Depoimentos: Seção inspiradora com relatos de pessoas que adotaram gatos FIV+ e FeLV+, mostrando a beleza da experiência.
![image](https://github.com/user-attachments/assets/4f6d336d-092a-4a8e-8cb4-d6863d9c9993)



Footer: Contém informações de contato da ONG, links para redes sociais e políticas de privacidade.
![image](https://github.com/user-attachments/assets/0b4dc267-58f1-48d7-a4e8-8b405ba28dbb)


Passo a Passo para Execução do Projeto:

1. Configuração do Ambiente:

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

Clone os repositórios do frontend e do backend:
git clone https://github.com/samiferreira/Fiv-Felv-Cats.git
https://github.com/samiferreira/MatchCat

Acesse as pastas dos projetos:
cd frontend-adocao-gatos
cd Fiv-Felv-Cats

Instale as dependências em ambos os projetos:
npm install

2. Configuração do Backend:
certifique que o cors para o back 
e o axios para o front estejam instalados. 

CORS: Configure o CORS no arquivo server.js do backend para permitir requisições vindas do seu frontend.
import cors from "cors"

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
ou um ctrl click no link da porta no terminal

Repositório da API:
Backend: https://github.com/samiferreira/Fiv-Felv-Cats

publicação da aplicação no linkedin https://www.linkedin.com/posts/samira-ferreira-887a081a0_frontend-backend-sobre-activity-7244045180956295168-t3Z8?utm_source=share&utm_medium=member_desktop
