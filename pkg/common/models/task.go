package models

import "gorm.io/gorm"

type Task struct {
    gorm.Model
	Title      string `json:"title"`
	Description string  `json:"Description"`
}