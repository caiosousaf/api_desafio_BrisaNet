package models

import _"gorm.io/gorm"

type Project struct {
    ID_Project              uint64  `gorm:"primary_key" json:"id_project"`
    Title_Project           string  `json:"title_project"`
    Description_Project     string  `json:"description_project"`
}