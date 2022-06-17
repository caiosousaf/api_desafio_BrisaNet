package projects

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
)

type AddProjectRequestBody struct {
    Title  string  `json:"title"`
    Description string  `json:"Description"`
}

func (h handler) AddProject(c *gin.Context) {
    body := AddProjectRequestBody{}

    // getting request's body
    if err := c.BindJSON(&body); err != nil {
        c.AbortWithError(http.StatusBadRequest, err)
        return
    }

    var project models.Project

    project.Title = body.Title
    project.Description = body.Description

    if result := h.DB.Create(&project); result.Error != nil {
        c.AbortWithError(http.StatusNotFound, result.Error)
        return
    }

    c.JSON(http.StatusCreated, &project)
}