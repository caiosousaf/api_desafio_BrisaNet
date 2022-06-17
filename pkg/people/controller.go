package people

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

    routes := r.Group("/people")
    routes.POST("/", h.AddPerson)
    routes.GET("/", h.GetPeople)
    routes.GET("/:id", h.GetPerson)
    routes.PUT("/:id", h.UpdatePerson)
    routes.DELETE("/:id", h.DeletePerson)
}