package models

import _"gorm.io/gorm"

type Project struct {
    ID          uint64  `gorm:"primary_key" json:"id"`
    Title       string  `json:"title"`
    Description string  `json:"Description"`
}