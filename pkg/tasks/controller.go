package tasks

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type handler struct {
	DB *gorm.DB
}

func RegisterRoutes(r *gin.Engine, db *gorm.DB) {
	h := &handler{
		DB: db,
	}

	routes := r.Group("/tasks")
	routes.POST("/", h.AddTask)
	routes.GET("/", h.GetTasks)
	routes.GET("/:id", h.GetTask)
	routes.PUT("/:id", h.UpdateTask)
	routes.DELETE("/:id", h.DeleteTask)
}