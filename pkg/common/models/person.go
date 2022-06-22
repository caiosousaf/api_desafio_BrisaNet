package models

import _"gorm.io/gorm"

type Person struct {
    ID          uint64         `gorm:"primary_key" json:"id"`
    Name    	string         `json:"name"`
    Profissao 	string         `json:"profissao"`
    TeamID      uint           `json:"teamid"`
    Team		Team    `gorm:"constraint:OnUpadate:CASCADE,OnDelete:CASCADE" json:"team"`
    TaskID      uint           `json:"taskid"`
    Task        Task    `gorm:"constraint:OnUpadate:CASCADE,OnDelete:CASCADE" json:"task"`
}