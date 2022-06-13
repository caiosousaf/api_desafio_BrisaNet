package main

import (
	"net/http"

	docs "TESTE/docs"
	"github.com/gin-gonic/gin"
	swaggerfiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

// projeto represents data about a record projeto.
type projeto struct {
	ID_Projeto  string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"Description"`
	IDequipe    string `json:"equipe"`
}

type pessoa struct {
	ID_Pessoa string `json:"id"`
	Nome      string `json:"nome"`
	Profissao string `json:"profissao"`
	ID_Equipe string `json:"equipe"`
}

type equipe struct {
	Nome      string `json:"nome"`
	ID_Equipe string `json:"id"`
}

type tarefa struct {
	ID_Tarefa   string `json:"id"`
	Nome        string `json:"nome"`
	Description string `json:"description"`
	ID_Project  string `json:"ID_Projeto"`
	ID_Equipe   string `json:"ID_Equipe"`
	Tempo       string `json:"tempo"`
}

// projetos slice to seed record projeto data.
var projetos = []projeto{
	{ID_Projeto: "1", Title: "Central de Relacionamento", Description: "Sugestões", IDequipe: "1"},
	{ID_Projeto: "2", Title: "Jeru", Description: "talvez de certo", IDequipe: "2"},
	{ID_Projeto: "3", Title: "Sarah Vaughan and Clifford Brown", Description: "talvez de certo", IDequipe: "3"},
}

var pessoas = []pessoa{
	{ID_Pessoa: "1", Nome: "Bruno", Profissao: "Dev-Ops", ID_Equipe: "1"},
	{ID_Pessoa: "2", Nome: "Pedro", Profissao: "Back-End", ID_Equipe: "1"},
	{ID_Pessoa: "3", Nome: "Caio", Profissao: "Front-End", ID_Equipe: "1"},
}

var equipes = []equipe{
	{ID_Equipe: "1", Nome: "Komanda"},
	{ID_Equipe: "2", Nome: "DevsCariri"},
	{ID_Equipe: "3", Nome: "Kariri Inovação"},
}

var tarefas = []tarefa{
	{ID_Tarefa: "1", Nome: "Criação de API REST", Description: "Utilizar GO LANG com Gin", ID_Project: "1", ID_Equipe: "", Tempo: ""},
	{ID_Tarefa: "2", Nome: "Teste", Description: "Apenas Teste", ID_Project: "1", ID_Equipe: "", Tempo: ""},
	{ID_Tarefa: "3", Nome: "Teste", Description: "Apenas Teste", ID_Project: "1", ID_Equipe: "", Tempo: ""},
	{ID_Tarefa: "4", Nome: "Teste", Description: "Apenas Teste", ID_Project: "1", ID_Equipe: "", Tempo: ""},
	{ID_Tarefa: "5", Nome: "Teste", Description: "Apenas Teste", ID_Project: "1", ID_Equipe: "", Tempo: ""},
}

func main() {
	router := gin.Default()
	docs.SwaggerInfo.BasePath = "/"
	v1 := router.Group("/")
	{
		eg := v1.Group("/projetos")
		{
			eg.GET("/", getprojetos)
			eg.GET("/:id", getprojetoByID)
			eg.GET("/:id/tarefas", getTarefasByProject)
			eg.POST("/", postprojetos)
			eg.PUT("/:id", editProjetoById)
			eg.DELETE("/:id", deleteProjetoById)
			eg.GET("/equipes/:id", getEquipeByID)
			eg.GET("/equipes/:id/members", getMembersInEquipeByID)
			eg.POST("/:id/tarefas", postTarefaProjeto)

		}
	}

	router.GET("/tarefas", getTarefas)
	router.GET("/tarefas/:id", getTarefaByID)
	router.POST("/tarefas", postTarefas)
	router.PUT("/tarefas/:id", editTarefaById)
	router.DELETE("/tarefas/:id", deleteTarefaById)

	router.GET("/equipes", getEquipes)
	router.GET("/equipes/:id", getEquipeByID)
	router.GET("/equipes/member/:id", getMemberByID)
	router.POST("/equipes", postEquipes)
	router.DELETE("/equipes/:id", deleteEquipeById)
	router.PUT("/equipes/:id", updateEquipeById)

	router.GET("/pessoas", getPessoas)
	router.GET("/pessoas/:id", getpessoaByID)
	router.POST("/pessoas", postpessoas)
	router.DELETE("/pessoas/:id", deletePessoaById)
	router.PUT("/pessoas/:id", updatePessoaById)

	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerfiles.Handler))
	router.Run(":8080")
}

// @BasePath /

// Get Projects
// @Summary Get All Projects
// @Produce json
// @Success 200 {array} projeto
// @Router /projetos/ [get]
func getprojetos(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, projetos)
}

func getPessoas(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, pessoas)
}

func getEquipes(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, equipes)
}

func getTarefas(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, tarefas)
}

// postprojetos adds an projeto from JSON received in the request body.
func postprojetos(c *gin.Context) {
	var newprojeto projeto

	// Call BindJSON to bind the received JSON to
	// newprojeto.
	if err := c.BindJSON(&newprojeto); err != nil {
		return
	}

	// Add the new projeto to the slice.
	projetos = append(projetos, newprojeto)
	c.IndentedJSON(http.StatusCreated, newprojeto)
}



// @BasePath /
// Get projeto By ID
// @Summary Get Projeto By ID
// @Param        id   path      string  true  "Projeto ID"
// @Produce json
// @Success 200 {object} projeto
// @Router /projetos/{id} [get]
func getprojetoByID(c *gin.Context) {
	id := c.Param("id")
	for _, a := range projetos {
		if a.ID_Projeto == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "projeto not found"})
}


// Delete a project from the list of projects by ID
func deleteProjetoById(c *gin.Context) {
	id := c.Param("id")
	for i, a := range projetos {
		if a.ID_Projeto == id {
			projetos = append(projetos[:i], projetos[i+1:]...)
			return
		}
	}
}

// Edit a project from the project list by ID
func editProjetoById(c *gin.Context) {
	id := c.Param("id")
	for i := range projetos {
		if projetos[i].ID_Projeto == id {
			c.BindJSON(&projetos[i])
			c.IndentedJSON(http.StatusOK, projetos[i])
			return
		}
	}
}

func postpessoas(c *gin.Context) {
	var newpessoa pessoa

	// Call BindJSON to bind the received JSON to
	// newpessoa.
	if err := c.BindJSON(&newpessoa); err != nil {
		return
	}

	// Add the new pessoa to the slice.
	pessoas = append(pessoas, newpessoa)
	c.IndentedJSON(http.StatusCreated, newpessoa)
}

func postEquipes(c *gin.Context) {
	var newequipe equipe
	// Call BindJSON to bind the received JSON to newpessoa
	if err := c.BindJSON(&newequipe); err != nil {
		return
	}
	// Add the new pessoa to the slice.
	equipes = append(equipes, newequipe)
	c.IndentedJSON(http.StatusCreated, newequipe)
}

func deleteEquipeById(c *gin.Context) {
	id := c.Param("id")
	for i, a := range equipes {
		if a.ID_Equipe == id {
			equipes = append(equipes[:i], equipes[i+1:]...)
			return
		}
	}
}

func updateEquipeById(c *gin.Context) {
	id := c.Param("id")
	for i := range equipes {
		if equipes[i].ID_Equipe == id {
			c.BindJSON(&equipes[i])
			c.IndentedJSON(http.StatusOK, equipes[i])
			return
		}
	}
}

func getpessoaByID(c *gin.Context) {
	id := c.Param("id")

	/* Loop through the list of pessoas, looking for
	   an pessoa whose ID value matches the parameter.*/
	for _, a := range pessoas {
		if a.ID_Pessoa == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "pessoa not found"})
}

func getMemberByID(c *gin.Context) {
	id := c.Param("id")

	/* Loop through the list of pessoas, looking for
	   an pessoa whose ID value matches the parameter.*/
	for _, a := range pessoas {
		if a.ID_Pessoa == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Member not found"})
}

func getEquipeByID(c *gin.Context) {
	id := c.Param("id")
	for _, a := range equipes {
		if a.ID_Equipe == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Equipe not found"})
}

// shows the members of a team by id on the screen
func getMembersInEquipeByID(c *gin.Context) {
	id := c.Param("id")
	for _, a := range equipes {
		if a.ID_Equipe == id {
			for _, b := range pessoas {
				if b.ID_Equipe == a.ID_Equipe {
					c.IndentedJSON(http.StatusOK, b)
				}
			}
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "equipe not found"})
}

// Delete a person from the list of people by Id
func deletePessoaById(c *gin.Context) {
	id := c.Param("id")
	for i, a := range pessoas {
		if a.ID_Pessoa == id {
			pessoas = append(pessoas[:i], pessoas[i+1:]...)
			return
		}
	}
}

// edit a person from a list of people via id
func updatePessoaById(c *gin.Context) {
	id := c.Param("id")
	for i := range pessoas {
		if pessoas[i].ID_Pessoa == id {
			c.BindJSON(&pessoas[i])
			c.IndentedJSON(http.StatusOK, pessoas[i])
			return
		}
	}
}

func getTarefaByID(c *gin.Context) {
	id := c.Param("id")
	for _, a := range tarefas {
		if a.ID_Tarefa == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Tarefa not found"})
}

func postTarefas(c *gin.Context) {
	var newtarefa tarefa

	// Call BindJSON to bind the received JSON to
	// newpessoa.
	if err := c.BindJSON(&newtarefa); err != nil {
		return
	}

	// Add the new pessoa to the slice.
	tarefas = append(tarefas, newtarefa)
	c.IndentedJSON(http.StatusCreated, newtarefa)
}

func editTarefaById(c *gin.Context) {
	id := c.Param("id")
	for i := range tarefas {
		if tarefas[i].ID_Tarefa == id {
			c.BindJSON(&tarefas[i])
			c.IndentedJSON(http.StatusOK, tarefas[i])
			return
		}
	}
}

// // Delete a tarefa from the list of tarefas by Id

func deleteTarefaById(c *gin.Context) {
	id := c.Param("id")
	for i, a := range tarefas {
		if a.ID_Tarefa == id {
			tarefas = append(tarefas[:i], tarefas[i+1:]...)
			return
		}
	}
}

func getTarefasByProject(c *gin.Context) {
	id := c.Param("id")
	count := 0
	for _, a := range tarefas {
		if a.ID_Project == id {
			c.IndentedJSON(http.StatusOK, a)
			count += 1
		}
	}
	if count > 0 {
		return
	} else {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "tarefa not found"})
	}
}

// function publish a task in a given project

func postTarefaProjeto(c *gin.Context) {
	id := c.Param("id")
	count := 0
	for _, a := range projetos {
		if a.ID_Projeto == id {
			var newtarefa tarefa
			// Call BindJSON to bind the received JSON to new tarefa

			if err := c.BindJSON(&newtarefa); err != nil {
				return
			}

			// Add the new Tarefa to the slice by Project.
			tarefas = append(tarefas, newtarefa)
			c.IndentedJSON(http.StatusCreated, newtarefa)
			return
		}
	}
	if count > 0 {
		return
	} else {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "tarefa not found"})
	}
}
