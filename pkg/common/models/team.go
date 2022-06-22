package models

import _"gorm.io/gorm"

type Team struct {
    ID   		uint64 			`gorm:"primary_key" json:"id"`
	Name      	string 			`json:"name"`
	ProjectID 	uint64 			`json:"projectid"`
	Project		Project 	`gorm:"constraint:OnUpadate:CASCADE,OnDelete:CASCADE" json:"project"`
}