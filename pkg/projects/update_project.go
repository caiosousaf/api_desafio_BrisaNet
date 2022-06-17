package projects

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
)

type UpdateProjectRequestBody struct {
    Title  string  `json:"title"`
    Description string  `json:"Description"`
}

func (h handler) UpdateProject(c *gin.Context) {
    id := c.Param("id")
    body := UpdateProjectRequestBody{}

    // getting request's body
    if err := c.BindJSON(&body); err != nil {
        c.AbortWithError(http.StatusBadRequest, err)
        return
    }

    var project models.Project

    if result := h.DB.First(&project, id); result.Error != nil {
        c.AbortWithError(http.StatusNotFound, result.Error)
        return
    }

    project.Title = body.Title
	project.Description = body.Description

    h.DB.Save(&project)

    c.JSON(http.StatusOK, &project)
}