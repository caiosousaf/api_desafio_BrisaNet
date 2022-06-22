package models

import _"gorm.io/gorm"

type Task struct {
    ID   		uint64 			`gorm:"primary_key" json:"id"`
	Title      	string 			`json:"title"`
	Description string  		`json:"Description"`
	ProjectID 	uint 			`json:"projectid"`
	Project		models.Project 	`gorm:"constraint:OnUpadate:CASCADE,OnDelete:CASCADE" json:"project"`
}