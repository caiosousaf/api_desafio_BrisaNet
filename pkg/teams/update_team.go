package teams

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
)

type UpdateTeamRequestBody struct {
	Name string	`json:"name"`
}

func (h handler) UpdateTeam(c *gin.Context) {
    id := c.Param("id")
    body := UpdateTeamRequestBody{}

    // getting request's body
    if err := c.BindJSON(&body); err != nil {
        c.AbortWithError(http.StatusBadRequest, err)
        return
    }

    var team models.Team

    if result := h.DB.First(&team, id); result.Error != nil {
        c.AbortWithError(http.StatusNotFound, result.Error)
        return
    }

    team.Name = body.Name


    h.DB.Save(&team)

    c.JSON(http.StatusOK, &team)
}