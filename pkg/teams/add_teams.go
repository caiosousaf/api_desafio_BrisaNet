package equipes

import (
	"net/http"

	"github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
	"github.com/gin-gonic/gin"
)

type AddEquipeRequestBody struct {
	Nome_Equipe		string 			`json:"nome_equipe"`
}

func (h handler) AddTeam(c *gin.Context) {
	body := AddEquipeRequestBody{}

	// getting request's body
	if err := c.BindJSON(&body); err != nil {
		c.AbortWithError(http.StatusBadRequest, err)
		return
	}

	var equipe models.Equipe

	equipe.Nome_Equipe = body.Nome_Equipe

	if result := h.DB.Create(&equipe); result.Error != nil {
		c.AbortWithError(http.StatusNotFound, result.Error)
		return
	}

	c.JSON(http.StatusCreated, &equipe)
}