package service

import (
	"encoding/json"
	"fmt"
	"io/ioutil"

	"com.tech.jagudelo.resume/internal/models"
)

type Service struct {
}

func NewService() *Service {
	return &Service{}
}

func (bff *Service) GetArticles() ([]models.Artycle, error) {

	jsonString, errFile := ioutil.ReadFile("/usr/src/app/mocks/articles.json")
	if errFile != nil {
		fmt.Println(errFile)
	}

	articlesOutput := []models.Artycle{}
	json.Unmarshal([]byte(jsonString), &articlesOutput)

	return articlesOutput, nil
}

func (bff *Service) GetProjects() ([]models.Project, error) {
	fmt.Println("GetProjects")
	jsonString, errFile := ioutil.ReadFile("/usr/src/app/mocks/portfolio.json")
	if errFile != nil {
		fmt.Println(errFile)
	}

	projectsOutput := []models.Project{}
	json.Unmarshal([]byte(jsonString), &projectsOutput)

	fmt.Println(len(projectsOutput))
	fmt.Println(len(projectsOutput))
	fmt.Println(len(projectsOutput))

	return projectsOutput, nil
}
