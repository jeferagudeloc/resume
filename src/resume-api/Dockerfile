FROM golang:alpine3.14 AS build
LABEL maintainer="jeferagudeloc <jefersonagudeloc.com>"
WORKDIR /build
COPY . .
RUN apk add git
RUN go build -o app .

RUN mkdir -p /app/mocks
RUN chmod -R 777 /app/mocks
COPY ./internal/service/mocks /app/mocks

FROM golang:alpine3.14 AS run
LABEL maintainer="jeferagudeloc <jefersonagudeloc.com>"

RUN addgroup -g 1000 golang && adduser -u 1000 -S -G golang -D golang
USER golang

WORKDIR /app
COPY --from=build /build/app .
ENTRYPOINT ["./app"]

