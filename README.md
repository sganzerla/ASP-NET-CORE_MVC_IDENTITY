# Introducao-ASP_NET_CORE-Identity

//cria projeto mvc Entity com Identity Individual com login de email e senha em base local

dotnet new mvc --auth Individual --use-local-db --


//cria banco

dotnet databse update


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

