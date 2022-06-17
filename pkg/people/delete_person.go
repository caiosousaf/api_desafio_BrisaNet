package people

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
)

func (h handler) DeletePerson(c *gin.Context) {
    id := c.Param("id")

    var person models.Person

    if result := h.DB.First(&person, id); result.Error != nil {
        c.AbortWithError(http.StatusNotFound, result.Error)
        return
    }

    h.DB.Delete(&person)

    c.Status(http.StatusOK)
}