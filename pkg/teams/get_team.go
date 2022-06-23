package equipes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	//"github.com/caiosousaf/api_desafio_BrisaNet/pkg/common/models"
)

type Team struct{
	Id_equipe 			uint `json:"id_equipe"`
	Nome_Equipe       string `json:"nome_equipe"`
}

func (h handler) GetTeam(c *gin.Context) {
	id := c.Param("id")

	var equipe Team

	if result := h.DB.First(&equipe, id); result.Error != nil {
		c.AbortWithError(http.StatusNotFound, result.Error)
		return
	}

	c.JSON(http.StatusOK, &equipe)
}