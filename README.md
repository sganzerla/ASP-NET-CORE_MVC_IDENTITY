 <h3>Originalmente de ASP.NET Core: Aprendendo do zero ao avançado (v 1.1 e 2.0) de <br>  Stephany Henrique de Almeida Batista </h3>
<br>
//Necessário ter instalado:
<ul>
 <li>
 .Net Core SDK 2.2 https://dotnet.microsoft.com/download/dotnet-core/2.2
</li>
 <li>
  MS SQL Server https://www.microsoft.com/pt-br/sql-server/sql-server-downloads
</li>
 <li>
 Visual Studio Code https://code.visualstudio.com/ ou  Visual Studio https://visualstudio.microsoft.com/pt-br/
</li>
</ul>
<p>
//cria projeto mvc Entity com Identity Individual com login de email e senha em base local <br>
"dotnet new mvc --auth Individual --use-local-db--"
</p><p>
//cria banco
"dotnet database update"
</p><p>
//instala ferramenta p gerar os codigos ocultos<br>
"dotnet tool install -g dotnet-aspnet-codegenerator"
</p><p>
//add pacote da ferramenta p gerar codidos ocultos<br>
"dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design"
</p><p>
//exibe o código fonte da pagemodel register<br>
"dotnet aspnet-codegenerator identity -dc modulo5.Data.ApplicationDbContext --files Account.Register"
</p><p>
//lista os arquivos do identity <br>
 "dotnet aspnet-codegenerator identity --listFiles --force"
 </p><p>
//exibe o código fonte da pagemodel login permitindo sua customização<br>
"dotnet aspnet-codegenerator identity -dc modulo5.Data.ApplicationDbContext --files Account.Login"
</p><p>
//instalar yarn https://yarnpkg.com/pt-BR/docs/install#windows-stable<br>
//necessário ter antes node.js https://nodejs.org/en/ instalado
</p><p>
//add gerenciador de pacotes yarn no projeto<br>
"npm install -g yarn"
</p><p>
//yarn init e cria arquivo package.json<br>
"yarn init"
</p><p>
//instalando jquery no projeto pelo yarn<br>
"yarn add jquery"
</p><p>
//atualizando bibliotecas pelo yarn<br>
"yarn upgrade jquery"
</p><p>
//removendo bibliotecas<br>
"yarn remove jquery"
</p><p>
//instalando dependências <br>
"yarn install"
</p><p>
//instalando automatizador de tarefas Gulp <br>
"yarn add gulp"
</p><p>
//adicionando pacotes do gulp<br>
"yarn add gulp-concat" | "yarn add gulp-cssmin" | "yarn add gulp-uncss" | "yarn gulp browser-sync"
</p><p>
// executando tarefas com gulp <br>
"yarn gulp nometarefa"
</p>
