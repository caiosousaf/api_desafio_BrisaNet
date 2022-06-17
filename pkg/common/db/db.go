package db

import (
    "log"

    "github.com/caiosousaf/go-gin-api-medium/pkg/common/models"
    "gorm.io/driver/postgres"
    "gorm.io/gorm"
)

func Init(url string) *gorm.DB {
    db, err := gorm.Open(postgres.Open(url), &gorm.Config{})

    if err != nil {
        log.Fatalln(err)
    }

    db.AutoMigrate(&models.Person{})
    db.AutoMigrate(&models.Project{})
    db.AutoMigrate(&models.Team{})
    return db
}