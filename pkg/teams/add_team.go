package teams

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
)

type AddTeamRequestBody struct {
	Name_Team string `json:"name_team"`
    Project		models.Project 	`gorm:"constraint:OnUpadate:CASCADE,OnDelete:CASCADE" json:"project"`
}

func (h handler) AddTeam(c *gin.Context) {
    body := AddTeamRequestBody{}

    // getting request's body
    if err := c.BindJSON(&body); err != nil {
        c.AbortWithError(http.StatusBadRequest, err)
        return
    }

    var team models.Team

    team.Name_Team = body.Name_Team
    team.Project = body.Project

    if result := h.DB.Create(&team); result.Error != nil {
        c.AbortWithError(http.StatusNotFound, result.Error)
        return
    }

    c.JSON(http.StatusCreated, &team)
}