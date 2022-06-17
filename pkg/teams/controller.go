package teams

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

    routes := r.Group("/teams")
    routes.POST("/", h.AddTeam)
    routes.GET("/", h.GetTeams)
    routes.GET("/:id", h.GetTeam)
    routes.PUT("/:id", h.UpdateTeam)
    routes.DELETE("/:id", h.DeleteTeam)
}