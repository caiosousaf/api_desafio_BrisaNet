package models

import _"gorm.io/gorm"

type Person struct {
    ID_person   string `gorm:"primary_key" json:"id_person"`
    Name    	string `json:"name"`
    Profissao 	string `json:"profissao"`
    ID_team  uint `gorm:"foreignkey" json:"id_team"`
    ID_task  uint `gorm:"foreignkey" json:"id_task"`
}