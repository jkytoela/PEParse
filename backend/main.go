package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func upload(c *gin.Context) {
	_, header, err := c.Request.FormFile("file")
	if err != nil {
		c.String(http.StatusBadRequest, fmt.Sprintf("file err : %s", err.Error()))
		return
	}

	filename := header.Filename

	fmt.Println(filename)
}

func main() {
	r := gin.Default()
	r.POST("/upload", upload)
	r.Run()
}
