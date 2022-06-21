package tasks

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
)

type UpdateTaskRequestBody struct {
    Title  string  `json:"title"`
    Description string  `json:"Description"`
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

	task.Title = body.Title
    task.Description = body.Description

	h.DB.Save(&task)

	c.JSON(http.StatusOK, &task)
}