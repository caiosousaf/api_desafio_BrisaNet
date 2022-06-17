package projects

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
)

func (h handler) GetProjects(c *gin.Context) {
    var projects []models.Project

    if result := h.DB.Find(&projects); result.Error != nil {
        c.AbortWithError(http.StatusNotFound, result.Error)
        return
    }

    c.JSON(http.StatusOK, &projects)
}