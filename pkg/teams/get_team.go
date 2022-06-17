package teams

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
)

func (h handler) GetTeam(c *gin.Context) {
    id := c.Param("id")

    var team models.Team

    if result := h.DB.First(&team, id); result.Error != nil {
        c.AbortWithError(http.StatusNotFound, result.Error)
        return
    }

    c.JSON(http.StatusOK, &team)
}