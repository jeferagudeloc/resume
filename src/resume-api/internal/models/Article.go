package models

type Artycle struct {
	Title       string   `json:"title"`
	Description string   `json:"description"`
	PubDate     string   `json:"pubDate"`
	Link        string   `json:"link"`
	Image       string   `json:"image"`
	TechIdList  []string `json:"techIdList"`
}
