package models

import _"gorm.io/gorm"

type Task struct {
    ID   		uint64 	`gorm:"primary_key" json:"id"`
	Title      	string 	`json:"title"`
	Description string  `json:"Description"`
	ID_project 	uint 	`json:"-"`
	Project		Project `gorm:"foreignkey:ProjectID:constraint:onUpadate:CASCADE,onDelete:CASCADE" json:"project"`
}