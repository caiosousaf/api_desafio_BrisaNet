package models

import "gorm.io/gorm"

type Project struct {
    gorm.Model
    Title  string  `json:"title"`
    Description string  `json:"Description"`
}