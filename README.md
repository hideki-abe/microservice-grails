# microservice-grails
Aplicação de microserviço de um CRUD de vagas para a aplicação Linketinder.

# ZG-Hero Project trilha (K3-T4): Grails Framework
  O desenvolvimento da aplicação teve como objetivo fazer o CRUD de vagas para a aplicação do <a href="https://github.com/hideki-abe/angular-spring-linketinder">Linketinder</a>
  
<h2>Frontend</h2>

O Frontend foi dividido nos seguintes módulos: 

  - cadastro(de empresas e candidatos)
  - competencia
  - inicial(contém o componente da página inicial)
  - perfil(de empresas e candidatos)
  - vaga
  
Para o microserviço de Vagas, as outras funcionalidades estão desabilitadas e os endpoints utilizados foram: 
  - http://*/candidato/perfil (Requisição GET para as Vagas)
  - http://*/empresa/cagastro (Requisição POST para as Vagas)
  
Obs.: A aplicação está sem a lógica de relacionamento das Vagas com as Empresas, pois precisa da aplicação completa para pegar o id da empresa no localhost, para que haja a relação na tabela de vaga.

<h3>Executando o projeto Angular</h3>

  Para executar o projeto Angular, abra o arquivo no caminho "frontend/view-linketinder" e execute o seguinte comando: "ng serve". Após isso, abra no navegador 
  o localhost na porta de execução.
  

<h2>Backend</h2>

O Backend está em um microserviço Grails com a entidade de Vaga, sua View e Controller apenas.

<h3>Executando o projeto Grails</h3>

  Para executar o projeto Grails, abra o projeto no caminho "crud-vagas" e execute o comando: grails run-app.
