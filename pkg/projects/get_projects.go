package projetos

import (
	"net/http"

	"github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
	"github.com/gin-gonic/gin"
)

func (h handler) GetProjects(c *gin.Context) {
	var projetos []models.Projeto

	if result := h.DB.Find(&projetos); result.Error != nil {
		c.AbortWithError(http.StatusNotFound, result.Error)
		return
	}
	
	c.JSON(http.StatusOK, &projetos)
}
