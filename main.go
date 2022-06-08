package main

import (
    "net/http"

    "github.com/gin-gonic/gin"
)

// projeto represents data about a record projeto.
type projeto struct {
    ID     string  `json:"id"`
    Title  string  `json:"title"`
    Description string  `json:"Description"`
}

type pessoa struct {
    ID     string  `json:"id"`
    Nome  string  `json:"nome"`
    Id_Profissao string  `json:"profissao"`
}

// projetos slice to seed record projeto data.
var projetos = []projeto{
    {ID: "1", Title: "Blue Train", Description: "talvez de certo"},
    {ID: "2", Title: "Jeru", Description: "talvez de certo"},
    {ID: "3", Title: "Sarah Vaughan and Clifford Brown", Description: "talvez de certo"},
}

var pessoas = []pessoa{
    {ID: "1", Nome: "Bruno de Calcinha", Id_Profissao: "45"},
    {ID: "2", Nome: "Pedro Pelado", Id_Profissao: "12"},
    {ID: "3", Nome: "Caio de Sunga", Id_Profissao: "13"},
}

func main() {
    router := gin.Default()
    router.GET("/projetos", getprojetos)
    router.GET("/projetos/:id", getprojetoByID)
    router.POST("/projetos", postprojetos)

    router.GET("/pessoas", getPessoas)
    router.GET("/pessoas/:id", getpessoaByID)
    router.POST("/pessoas", postpessoas)

    router.Run("localhost:8080")
}

// getprojetos responds with the list of all projetos as JSON.
func getprojetos(c *gin.Context) {
    c.IndentedJSON(http.StatusOK, projetos)
}

func getPessoas(c *gin.Context) {
    c.IndentedJSON(http.StatusOK, pessoas)
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

// getprojetoByID locates the projeto whose ID value matches the id
// parameter sent by the client, then returns that projeto as a response.
func getprojetoByID(c *gin.Context) {
    id := c.Param("id")

    // Loop through the list of projetos, looking for
    // an projeto whose ID value matches the parameter.
    for _, a := range projetos {
        if a.ID == id {
            c.IndentedJSON(http.StatusOK, a)
            return
        }
    }
    c.IndentedJSON(http.StatusNotFound, gin.H{"message": "projeto not found"})
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

func getpessoaByID(c *gin.Context) {
    id := c.Param("id")

    // Loop through the list of pessoas, looking for
    // an pessoa whose ID value matches the parameter.
    for _, a := range pessoas {
        if a.ID == id {
            c.IndentedJSON(http.StatusOK, a)
            return
        }
    }
    c.IndentedJSON(http.StatusNotFound, gin.H{"message": "pessoa not found"})
}