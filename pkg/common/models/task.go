package models

import _"gorm.io/gorm"

type Task struct {
    ID_task   string `gorm:"primary_key" json:"id_task"`
	Title      string `json:"title"`
	Description string  `json:"Description"`
	ID_project uint `gorm:"foreignkey" json:"id_project"`
}
