package projects

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
)

type AddProjectRequestBody struct {
    Title_Project       string  `json:"title_project"`
    Description_Project string  `json:"description_project"`
}

func (h handler) AddProject(c *gin.Context) {
    body := AddProjectRequestBody{}

    // getting request's body
    if err := c.BindJSON(&body); err != nil {
        c.AbortWithError(http.StatusBadRequest, err)
        return
    }

    var project models.Project

    project.Title_Project = body.Title_Project
    project.Description_Project = body.Description_Project

    if result := h.DB.Create(&project); result.Error != nil {
        c.AbortWithError(http.StatusNotFound, result.Error)
        return
    }

    c.JSON(http.StatusCreated, &project)
}