package projetos

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
)

func (h handler) GetProject(c *gin.Context) {
	id := c.Param("id")

	var projeto models.Projeto

	if result := h.DB.First(&projeto, id); result.Error != nil {
		c.AbortWithError(http.StatusNotFound, result.Error)
		return
	}
	c.JSON(http.StatusOK, &projeto)
}