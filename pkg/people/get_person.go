package people

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
)

func (h handler) GetPerson(c *gin.Context) {
    id := c.Param("id")

    var person models.Person

    if result := h.DB.First(&person, id); result.Error != nil {
        c.AbortWithError(http.StatusNotFound, result.Error)
        return
    }

    c.JSON(http.StatusOK, &person)
}