package models

type Task struct {
    ID_task        uint `gorm:"primarykey" json:"id_task"`
	Title      string `json:"title"`
	Description string  `json:"Description"`
}
