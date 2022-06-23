package models

import _"gorm.io/gorm"

type Person struct {
    ID_Person          uint64         `gorm:"primary_key" json:"id_person"`
    Name_Person    	string         `json:"name_person"`
    Profissao 	string         `json:"profissao"`
    TeamID      uint           `json:"teamId"`
    Team		Team    `gorm:"constraint:OnUpadate:CASCADE,OnDelete:CASCADE" json:"team"`
    TaskID      uint           `json:"taskId"`
    Task        Task    `gorm:"constraint:OnUpadate:CASCADE,OnDelete:CASCADE" json:"task"`
}