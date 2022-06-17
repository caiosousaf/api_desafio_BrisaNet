package projects

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
)

func (h handler) DeleteProject(c *gin.Context) {
    id := c.Param("id")

    var project models.Project

    if result := h.DB.First(&project, id); result.Error != nil {
        c.AbortWithError(http.StatusNotFound, result.Error)
        return
    }

    h.DB.Delete(&project)

    c.Status(http.StatusOK)
}