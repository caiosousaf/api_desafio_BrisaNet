package tasks

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
)

type UpdateTaskRequestBody struct {
    Title_Task          string          `json:"title_task"`
    Description_Task    string          `json:"description_task"`
    Project		        models.Project 	`gorm:"constraint:OnUpadate:CASCADE,OnDelete:CASCADE" json:"project"`
}

func (h handler) UpdateTask(c *gin.Context) {
	id := c.Param("id")
    body := UpdateTaskRequestBody{}

	// getting request's body
	if err := c.BindJSON(&body); err != nil {
        c.AbortWithError(http.StatusBadRequest, err)
        return
    }

	var task models.Task

	if result := h.DB.First(&task, id); result.Error != nil {
        c.AbortWithError(http.StatusNotFound, result.Error)
        return
    }

	task.Title_Task = body.Title_Task
    task.Description_Task = body.Description_Task
    task.Project = body.Project

	h.DB.Save(&task)

	c.JSON(http.StatusOK, &task)
}