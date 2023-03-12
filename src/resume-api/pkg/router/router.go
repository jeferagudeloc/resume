package router

import (
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

type Controller interface {
	GetArticles(w http.ResponseWriter, r *http.Request)
	GetProjects(w http.ResponseWriter, r *http.Request)
	GetContainers(w http.ResponseWriter, r *http.Request)
}

func RegisterRouter(ctrl Controller) http.Handler {

	r := mux.NewRouter()

	enableCORS(r)
	r.HandleFunc("/articles", ctrl.GetArticles).Methods(http.MethodGet)
	r.HandleFunc("/projects", ctrl.GetProjects).Methods(http.MethodGet)
	r.HandleFunc("/containers", ctrl.GetContainers).Methods(http.MethodGet)
	return r
}

func enableCORS(router *mux.Router) {
	router.PathPrefix("/").HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
	}).Methods(http.MethodOptions)
	router.Use(middlewareCors)
}

func middlewareCors(next http.Handler) http.Handler {
	return http.HandlerFunc(
		func(w http.ResponseWriter, req *http.Request) {
			w.Header().Set("Access-Control-Allow-Origin", "*")
			w.Header().Set("Access-Control-Allow-Credentials", "true")
			w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
			localEnv := os.Getenv("LOCAL_ENV")
			if localEnv == "true" {
				w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding")
			} else {
				w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding")
			}

			if req.Method == "OPTIONS" {
				w.Header().Set("Content-Type", "application/json")
				w.WriteHeader(http.StatusOK)
				return
			}

			next.ServeHTTP(w, req)
		})
}
