package models

import "gorm.io/gorm"

type Team struct {
    gorm.Model
	Name      string `json:"name"`
	ID_task  uint `gorm:"foreignkey" json:"id_task"`
}