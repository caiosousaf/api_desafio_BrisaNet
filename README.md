# Desafio API 

Sistema criado para cadastrar projetos e equipes, um projeto possui uma equipe e tem tarefas dentro, onde os membros
da equipe podem se atribuir.

## Detalhes

- Utilizando Go e gin
- Disponível em(HEROKU): https://api-desafio-brisa.herokuapp.com
- Swagger: http://localhost:8080/swagger/index.html (ainda não finalizado)
- Frontend não implementado nessa primeira etapa
<div style="display: inline_block"><br>
<img align="center" alt="miguel-Golang" height="60" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" />
<img align="center" alt="miguel-Golang" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" />
</div>


## Membros:
<div>-<a href="https://github.com/caiosousaf"> Caio Sousa:</a>  Desenvolvimento dos metódos GET, POST, PUT e DELETE, e iniciado desenvolvimento do swagger e da documentação da API.</div>
<div>-<a href="https://github.com/PedroMiguel7"> Pedro Miguel:</a>  Desenvolvimento e atualização dos metódos GET, POST, PUT e DELETE, mais a atualização dos elementos projetos para associar mais de uma equipe, e pessoas para associar a mais de uma tarefa.</div> 
<div>-<a href="https://github.com/dayannebugarim"> Dayanne Bugarim:</a> Atualização dos metódos GET, POST, PUT e DELETE</div>


## Andamento do projeto

| Funcionalidade        | Estado |
| ------------- |:-------------:|
| Manter equipe      | ✔️❤️ |
| Manter projeto      | ✔️❤️ |
| Associar equipe a projeto | ✔️❤️ | 
| Criar tarefa no projeto | ✔️❤️ | 
| Atribuir tarefa | ✔️❤️ | 

### APLICAÇÕES

- PROJETOS:
 <div>GET:</div>
 <div>/projetos</div>
 <div>/projetos/:id/tarefas/projetos/:id</div>
 <div>/projetos/equipes/:id</div>
 <div>/projetos/equipes/:id/members</div>
 <div>/projetos/:id/equipes</div>
 <div>------------------------------------</div>
 <div> POST: </div>
 <div>/projetos</div>
 <div>/projetos/:id/tarefa</div>
 <div>------------------------------------</div>
 <div> PUT:</div>
 <div>/projetos/:id</div>
 <div>------------------------------------</div>
 <div>DELETE:</div>
 <div>/projetos/:id</div>
 <div>------------------------------------</div>
 <div>ㅤ </div>
 <div>ㅤ </div>
 
- EQUIPES: 
 <div>GET:</div>
 <div>/equipes</div>
 <div>/equipes/:id</div>
 <div>/equipes/member/:id</div>
 <div>------------------------------------</div>
 <div>POST:</div>
 <div>/equipes</div>
 <div>------------------------------------</div>
 <div>PUT:</div>
 <div>/equipes/:id</div>
 <div>------------------------------------</div>
 <div>DELETE:</div>
 <div>/equipes/:id</div>
 <div>------------------------------------</div>
 <div>ㅤ </div>
 <div>ㅤ </div>
 
- MEMBROS: 
 <div>GET:</div>
 <div>/pessoas</div>
 <div>/pessoas/:id</div>
 <div>/pessoas/:id/tarefas</div>
 <div>------------------------------------</div>
 <div>POST:</div>
 <div>/pessoas</div>
 <div>------------------------------------</div>
 <div>PUT:</div>
 <div>/pessoas/:id</div>
 <div>------------------------------------</div>
 <div>DELETE:</div>
 <div>/pessoas/:id</div>
 <div>------------------------------------</div>
 <div>ㅤ </div>
 <div>ㅤ </div>
 
- TAREFAS: 
 <div>GET:</div>
 <div>/tarefas</div>
 <div>/tarefas/:id</div>
 <div>/tarefas/:id/pessoas</div>
 <div>------------------------------------</div>
 <div>POST:</div>
 <div>/tarefas</div>
 <div>------------------------------------</div>
 <div>PUT:</div>
 <div>/tarefas/:id</div>
 <div>------------------------------------</div>
 <div>DELETE:</div>
 <div>/tarefas/:id</div>
 <div>------------------------------------</div>
