package models

import _"gorm.io/gorm"

type Project struct {
    ID_project   string `gorm:"primary_key" json:"id_project"`
    Title  string  `json:"title"`
    Description string  `json:"Description"`
    ID_team  uint `gorm:"foreignkey" json:"id_team"`
    ID_task uint `gorm:"foreignkey" json:"id_task"`
}