package handler

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"

	"com.tech.jagudelo.resume/internal/models"
)

func NewController(service service) *Controller {
	return &Controller{service: service}
}

type Controller struct {
	service service
}

type service interface {
	GetArticles() ([]models.Artycle, error)
	GetProjects() ([]models.Project, error)
	GetContainers() ([]models.Container, error)
}

func (ctrl *Controller) GetArticles(w http.ResponseWriter, r *http.Request) {
	helloMessage, err := ctrl.service.GetArticles()

	if err != nil {
		fmt.Errorf("Error getting hello world: %v", err)
	} else {
		w.Header().Set("Content-Type", "application/json")
		responseBuffer := new(bytes.Buffer)
		json.NewEncoder(responseBuffer).Encode(helloMessage)
		w.Write(responseBuffer.Bytes())
	}

}

func (ctrl *Controller) GetContainers(w http.ResponseWriter, r *http.Request) {
	helloMessage, err := ctrl.service.GetContainers()

	if err != nil {
		fmt.Errorf("Error getting hello world: %v", err)
	} else {
		w.Header().Set("Content-Type", "application/json")
		responseBuffer := new(bytes.Buffer)
		json.NewEncoder(responseBuffer).Encode(helloMessage)
		w.Write(responseBuffer.Bytes())
	}

}

func (ctrl *Controller) GetProjects(w http.ResponseWriter, r *http.Request) {
	helloMessage, err := ctrl.service.GetProjects()

	if err != nil {
		fmt.Errorf("Error getting hello world: %v", err)
	} else {
		w.Header().Set("Content-Type", "application/json")
		responseBuffer := new(bytes.Buffer)
		json.NewEncoder(responseBuffer).Encode(helloMessage)
		w.Write(responseBuffer.Bytes())
	}

}
