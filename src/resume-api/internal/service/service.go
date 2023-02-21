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

	jsonString, errFile := ioutil.ReadFile("/Users/jagudelo/projects/jeferagudeloc/resume/src/resume-api/internal/service/mocks/articles.json")
	if errFile != nil {
		fmt.Println(errFile)
	}

	articlesOutput := []models.Artycle{}
	json.Unmarshal([]byte(jsonString), &articlesOutput)
	fmt.Printf("Operation: %s", articlesOutput[0])

	return articlesOutput, nil
}
