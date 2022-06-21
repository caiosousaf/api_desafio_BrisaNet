package models

import _"gorm.io/gorm"

type Team struct {
    ID_team   string `gorm:"primary_key" json:"id_team"`
	Name      string `json:"name"`
	ID_project uint `gorm:"foreignkey" json:"id_project"`
	ID_person  uint `gorm:"foreignkey" json:"id_person"`
}