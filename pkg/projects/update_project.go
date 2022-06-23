package projects

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
)

type UpdateProjectRequestBody struct {
    Title_Project       string  `json:"title_project"`
    Description_Project string  `json:"description_project"`
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

    project.Title_Project = body.Title_Project
	project.Description_Project = body.Description_Project

    h.DB.Save(&project)

    c.JSON(http.StatusOK, &project)
}