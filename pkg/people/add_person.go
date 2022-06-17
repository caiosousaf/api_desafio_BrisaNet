package people

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
)

type AddPersonRequestBody struct {
    Name    	string `json:"name"`
    Profissao 	string `json:"profissao"`
}

func (h handler) AddPerson(c *gin.Context) {
    body := AddPersonRequestBody{}

    // getting request's body
    if err := c.BindJSON(&body); err != nil {
        c.AbortWithError(http.StatusBadRequest, err)
        return
    }

    var person models.Person

    person.Name = body.Name
    person.Profissao = body.Profissao

    if result := h.DB.Create(&person); result.Error != nil {
        c.AbortWithError(http.StatusNotFound, result.Error)
        return
    }

    c.JSON(http.StatusCreated, &person)
}