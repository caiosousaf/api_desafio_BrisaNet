package models

import _"gorm.io/gorm"

type Task struct {
    ID_Task   			uint64 		`gorm:"primary_key" json:"id_task"`
	Title_Task      	string 		`json:"title_task"`
	Description_Task 	string  	`json:"description_task"`
	ProjectID 			uint 		`json:"projectId"`
	Project				Project 	`gorm:"constraint:OnUpadate:CASCADE,OnDelete:CASCADE" json:"project"`
}