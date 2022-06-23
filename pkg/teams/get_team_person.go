package teams

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type Persons struct {
	NameTeam 	string `json:"nameTeam"`
	NamePeople 	string `json:"namePeople"`
	DescriptionPeople 	string `json:"descriptionPeople"`
}

func (h handler) GetTeamPerson (c *gin.Context) {
	id := c.Param("id")

	var persons []Persons

	if persons := h.DB.Raw("select eq.nameteam, pe.namepeople, pe.descriptionpeople from teams as eq inner join people as pe on eq.id_team = pe.team_id where eq.id_team = ?", id).Scan(&persons); persons.Error != nil {
		c.AbortWithError(http.StatusNotFound, persons.Error)
		return
	}

	c.JSON(http.StatusOK, &persons)
}