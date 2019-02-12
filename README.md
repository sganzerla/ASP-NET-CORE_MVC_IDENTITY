# Introducao-ASP_NET_CORE-Identity

//Necessário ter instalado:

A)  .Net Core SDK 2.2 https://dotnet.microsoft.com/download/dotnet-core/2.2

B)  MS SQL Server https://www.microsoft.com/pt-br/sql-server/sql-server-downloads

C)  Visual Studio Code https://code.visualstudio.com/ ou  Visual Studio https://visualstudio.microsoft.com/pt-br/

//cria projeto mvc Entity com Identity Individual com login de email e senha em base local

dotnet new mvc --auth Individual --use-local-db --


//cria banco

dotnet database update


//instala ferramenta p gerar os codigos ocultos

dotnet tool install -g dotnet-aspnet-codegenerator


//add pacote da ferramenta p gerar codidos ocultos

dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design


//exibe o código fonte da pagemodel register

dotnet aspnet-codegenerator identity -dc modulo5.Data.ApplicationDbContext --files Account.Register


//lista os arquivos do identity 

 dotnet aspnet-codegenerator identity --listFiles --force
 
 
//exibe o código fonte da pagemodel login permitindo sua customização

dotnet aspnet-codegenerator identity -dc modulo5.Data.ApplicationDbContext --files Account.Login

//instalar yarn https://yarnpkg.com/pt-BR/docs/install#windows-stable
//necessário ter antes node.js https://nodejs.org/en/ instalado

//add gerenciador de pacotes yarn no projeto

npm install -g yarn


//yarn init e cria arquivo package.json

yarn init


//instalando jquery no projeto pelo yarn

yarn add jquery


//atualizando bibliotecas pelo yarn

yarn upgrade jquery


//removendo bibliotecas

yarn remove jquery


//instalando dependências 

yarn install


