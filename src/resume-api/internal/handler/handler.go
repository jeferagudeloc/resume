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
