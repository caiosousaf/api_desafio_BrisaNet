package models

import _"gorm.io/gorm"

type Team struct {
    ID_Team   		uint64 			`gorm:"primary_key" json:"id_team"`
	Name_Team      	string 			`json:"name_team"`
	ProjectID 		uint64 			`json:"projectId"`
	Project			Project 		`gorm:"constraint:OnUpadate:CASCADE,OnDelete:CASCADE" json:"project"`
}