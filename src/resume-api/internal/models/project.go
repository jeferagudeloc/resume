package models

type Project struct {
	Title         string        `json:"title"`
	Description   string        `json:"description"`
	ProjectDetail ProjectDetail `json:"projectDetail"`
	InitialDate   string        `json:"initialDate"`
	FinishDate    string        `json:"finishDate"`
	CompanyID     string        `json:"companyId"`
	ImageId       string        `json:"imageId"`
}

type ProjectDetail struct {
	TechnicalDescription string   `json:"technicalDescription"`
	TechIDList           []string `json:"techIdList"`
}
