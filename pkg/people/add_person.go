package people

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
)

type AddPersonRequestBody struct {
    Name_Person    	string     `json:"name_person"`
    Profissao 	    string     `json:"profissao"`
    Team		models.Team    `gorm:"constraint:OnUpadate:CASCADE,OnDelete:CASCADE" json:"team"`
    Task        models.Task    `gorm:"constraint:OnUpadate:CASCADE,OnDelete:CASCADE" json:"task"`
}

func (h handler) AddPerson(c *gin.Context) {
    body := AddPersonRequestBody{}

    // getting request's body
    if err := c.BindJSON(&body); err != nil {
        c.AbortWithError(http.StatusBadRequest, err)
        return
    }

    var person models.Person

    person.Name_Person = body.Name_Person
    person.Profissao = body.Profissao
    person.Team = body.Team
    person.Task = body.Task

    if result := h.DB.Create(&person); result.Error != nil {
        c.AbortWithError(http.StatusNotFound, result.Error)
        return
    }

    c.JSON(http.StatusCreated, &person)
}