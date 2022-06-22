package models

import _"gorm.io/gorm"

type Team struct {
    ID   		uint64 	`gorm:"primary_key" json:"id"`
	Name      	string 	`json:"name"`
	ID_project 	uint64 	`json:"-"`
	Project		Project `gorm:"foreignkey:ProjectID:constraint:onUpadate:CASCADE,onDelete:CASCADE" json:"project"`
}