package pessoas

import (
	"net/http"

    "github.com/gin-gonic/gin"
    "github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
)

func (h handler) DeletePerson(c *gin.Context) {
	id := c.Param("id")

	var pessoa models.Pessoa

	if result := h.DB.First(&pessoa, id); result.Error != nil {
		c.AbortWithError(http.StatusNotFound, result.Error)
		return
	}

	h.DB.Delete(&pessoa)

	c.Status(http.StatusOK)
}