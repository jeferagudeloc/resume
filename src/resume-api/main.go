package main

import (
	"log"
	"net/http"
	"time"

	"com.tech.jagudelo.resume/internal/handler"
	"com.tech.jagudelo.resume/internal/service"
	"com.tech.jagudelo.resume/pkg/router"
	"github.com/joho/godotenv"
	"github.com/rs/cors"
)

func main() {
	godotenv.Load()

	cors := cors.New(cors.Options{
		AllowedOrigins:     []string{"*"},
		AllowedHeaders:     []string{"Content-Type", "Content-Length", "Accept-Encoding", "X-CSRF-Token", "Authorization", "Access-Control-Allow-Origin"},
		AllowedMethods:     []string{"GET", "PATCH", "POST", "PUT", "OPTIONS", "DELETE"},
		OptionsPassthrough: true,
	})

	service := service.NewService()

	srv := &http.Server{
		Handler:      cors.Handler(router.RegisterRouter(handler.NewController(service))),
		Addr:         ":" + "8080",
		WriteTimeout: 1 * time.Minute,
		ReadTimeout:  1 * time.Minute,
	}

	errServ := srv.ListenAndServe()
	if errServ != nil {
		log.Fatal(errServ)
	}

}
