package main

import (
    "os"
	"github.com/caiosousaf/api_desafio_BrisaNet/pkg/people"
    "github.com/caiosousaf/api_desafio_BrisaNet/pkg/teams"
    "github.com/caiosousaf/api_desafio_BrisaNet/pkg/projects"
    "github.com/caiosousaf/api_desafio_BrisaNet/pkg/tasks"
	
	"github.com/caiosousaf/api_desafio_BrisaNet/pkg/common/db"
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

func main() {
    viper.SetConfigFile("./pkg/common/envs/.env")
    viper.ReadInConfig()

    port := os.Getenv("PORT")
    dbUrl := viper.Get("DB_URL").(string)

    r := gin.Default()
    h := db.Init(dbUrl)

    
    pessoas.RegisterRoutes(r, h)
    projetos.RegisterRoutes(r, h)
    equipes.RegisterRoutes(r, h)
    tasks.RegisterRoutes(r, h)
    // register more routes here

    r.Run(":"+port)
}
// URI
// package main

// import (
//    "bytes"
//    "fmt"
// )

// type slice struct {
//    tok []float64
// }

// func (s *slice) Scan(state fmt.ScanState, verb rune) error {
//    tok, err := state.Token(false, func(r rune) bool { return r != '\n' })
//    if err != nil { return err }
//    if _, _, err := state.ReadRune(); err != nil {
//       if len(tok) == 0 {
//          panic(err)
//       }
//    }
//    b := bytes.NewReader(tok)
//    for {
//       var d float64
//       _, err := fmt.Fscan(b, &d)
//       if err != nil { break }
//       s.tok = append(s.tok, d)
//    }
//    return nil
// }

// func main() {
//    var s slice
//    var f slice
//    fmt.Scan(&s)
//    fmt.Scan(&f)
//    vPeca1 := s.tok[1] * s.tok[2]
//    vPeca2 := f.tok[1] * f.tok[2]
//    ValorTotal := vPeca1 + vPeca2
//    fmt.Printf("VALOR A PAGAR: R$ %.2f\n",ValorTotal)

// }