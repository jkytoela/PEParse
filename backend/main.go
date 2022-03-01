package main

import (
	"bytes"
	"fmt"
	"io"
	"net/http"

	"github.com/gin-gonic/gin"
	peparser "github.com/saferwall/pe"
)

func upload(c *gin.Context) {
	file, _, err := c.Request.FormFile("file")
	if err != nil {
		c.String(http.StatusBadRequest, fmt.Sprintf("File error: %s", err.Error()))
		return
	}

	buf := bytes.NewBuffer(nil)

	if _, err := io.Copy(buf, file); err != nil {
		c.String(http.StatusInternalServerError, fmt.Sprintf("Copy error: %s", err.Error()))
		return
	}

	pe, err := peparser.NewBytes(buf.Bytes(), nil)
	if err != nil {
		c.String(http.StatusInternalServerError, fmt.Sprintf("Reading error: %s", err.Error()))
		return
	}

	err = pe.Parse()
	if err != nil {
		c.String(http.StatusInternalServerError, fmt.Sprintf("Parsing error: %s", err.Error()))
		return
	}

	c.JSON(http.StatusOK, pe)
}

func main() {
	r := gin.Default()
	r.POST("/upload", upload)
	r.Run("0.0.0.0:8080")
}
