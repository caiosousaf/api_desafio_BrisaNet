  # Desafio API -  ETAPA 2
  
Sistema criado para cadastrar projetos e equipes, um projeto possui uma equipe e tem tarefas dentro, onde os membros
da equipe podem se atribuir.

## Detalhes

- Utilizando Go e gin, React e PostgreSQL
- Disponível em(HEROKU): 
- Swagger: (ainda não finalizado)
<div style="display: inline_block"><br>
<img align="center" alt="miguel-Golang" height="60" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" />
<img align="center" alt="miguel-React" height="60" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
<img align="center" alt="miguel-PostgreSQL" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
          
</div>


## Membros:
<div>-<a href="https://github.com/caiosousaf"> Caio Sousa:</a>  Desenvolvimento dos metódos GET, POST, PUT e DELETE, mais conexão com o Banco de dados, desenvolvimento do swagger.</div>
<div>-<a href="https://github.com/PedroMiguel7"> Pedro Miguel:</a>  Desenvolvimento dos metódos GET, POST, PUT e DELETE, </div> 
<div>-<a href="https://github.com/dayannebugarim"> Dayanne Bugarim:</a> Desenvolvimento do FrontEnd</div>


## Andamento do projeto

| Funcionalidade         | Estado |
| ------------- |:-------------:|
| Manter equipe      | ✔️❤️ |
| Manter projeto      | ✔️❤️ |
| Associar equipe a projeto | ✔️❤️ | 
| Criar tarefa no projeto | ✔️❤️ | 
| Atribuir tarefa | ✔️❤️ | 
| Utilizar algum SGBD (PostgreSQL/MySQL) | ✔️❤️ |
| Implementar frontend (Angular/Vue/React) | X |
| Testes e2e com Cypress | X |

### APLICAÇÕES

 URI : 1011
 package main

import (
   "fmt"
)


func main() {
   var raio float64
   
   fmt.Scan(&raio)
   pi := 3.14159
   calculaRaio := raio * raio * raio

   valorFinal := (4/3.0) * pi * calculaRaio

   fmt.Printf("VOLUME = %.3f\n",valorFinal)

}

URI : 1012

package main

import (
   "bytes"
   "fmt"
)

type slice struct {
   tok []float64
}

func (s *slice) Scan(state fmt.ScanState, verb rune) error {
   tok, err := state.Token(false, func(r rune) bool { return r != '\n' })
   if err != nil { return err }
   if _, _, err := state.ReadRune(); err != nil {
      if len(tok) == 0 {
         panic(err)
      }
   }
   b := bytes.NewReader(tok)
   for {
      var d float64
      _, err := fmt.Fscan(b, &d)
      if err != nil { break }
      s.tok = append(s.tok, d)
   }
   return nil
}

func main() {

   var area slice

   fmt.Scan(&area)

   pi := 3.14159
   areaTriangulo := (area.tok[0] * area.tok[2])/2
   areaCirculo := pi * (area.tok[2] * area.tok[2])
   areaTrapezio := (area.tok[0] + area.tok[1]) * area.tok[2]/2
   areaRetangulo := area.tok[0] * area.tok[1]
   areaQuadrado := area.tok[1] * area.tok[1]

   fmt.Printf("TRIANGULO: %.3f\n", areaTriangulo)
   fmt.Printf("CIRCULO: %.3f\n", areaCirculo)
   fmt.Printf("TRAPEZIO: %.3f\n", areaTrapezio)
   fmt.Printf("QUADRADO: %.3f\n", areaQuadrado)
   fmt.Printf("RETANGULO: %.3f\n", areaRetangulo)
}

*URI:1013*
package main

import (
	"bytes"
	"fmt"
	"math"
)

type slice struct {
   tok []float64
}

func (s *slice) Scan(state fmt.ScanState, verb rune) error {
   tok, err := state.Token(false, func(r rune) bool { return r != '\n' })
   if err != nil { return err }
   if _, _, err := state.ReadRune(); err != nil {
      if len(tok) == 0 {
         panic(err)
      }
   }
   b := bytes.NewReader(tok)
   for {
      var d float64
      _, err := fmt.Fscan(b, &d)
      if err != nil { break }
      s.tok = append(s.tok, d)
   }
   return nil
}

func main() {

   var maior slice
   fmt.Scan(&maior)

   maiorAB := (maior.tok[0] + maior.tok[1] + math.Abs(maior.tok[0] - maior.tok[1]))/2
   maiorN := (maiorAB + maior.tok[2] + math.Abs(maiorAB - maior.tok[2]))/2

   fmt.Printf("%v eh o maior\n", maiorN)

}

*URI:1015*
package main

import (
	"bytes"
	"fmt"
	"math"
)

type slice struct {
   tok []float64
}

func (s *slice) Scan(state fmt.ScanState, verb rune) error {
   tok, err := state.Token(false, func(r rune) bool { return r != '\n' })
   if err != nil { return err }
   if _, _, err := state.ReadRune(); err != nil {
      if len(tok) == 0 {
         panic(err)
      }
   }
   b := bytes.NewReader(tok)
   for {
      var d float64
      _, err := fmt.Fscan(b, &d)
      if err != nil { break }
      s.tok = append(s.tok, d)
   }
   return nil
}

func main() {

   var primeiraLinha slice
   var segundaLinha slice
   fmt.Scan(&primeiraLinha)
   fmt.Scan(&segundaLinha)
   segundoLado := segundaLinha.tok[1] - primeiraLinha.tok[1]
   segundoQuadrado := segundoLado * segundoLado
   primeiroLado := segundaLinha.tok[0] - primeiraLinha.tok[0]
   primeiroQuadrado := primeiroLado * primeiroLado
   distancia :=  + math.Sqrt(primeiroQuadrado + segundoQuadrado)

   fmt.Printf("%.4f\n", distancia)
   


}

*URI:1017*
package main

import (
	
	"fmt"
	
)

var horas, kmHr float64

func main() {
   fmt.Scan(&horas)
   fmt.Scan(&kmHr)
   distanciaTotal := kmHr * horas
   consumo := 12.0
   quantidadeLitros := distanciaTotal / consumo
   fmt.Printf("%.3f\n", quantidadeLitros)
}

*URI:1018*
package main

import (
	
	"fmt"
	
)

var notas100, notas50, notas20, notas10, notas5, notas2, notas1 int

func main() {
   var quantidadeTotal int
   fmt.Scan(&quantidadeTotal)
   quantidadeinicial := quantidadeTotal
   controlador := 0

   for i := 0; controlador <= 0 ; i++ {
      if quantidadeTotal - 100 >= 0 {
         notas100 += 1
         quantidadeTotal -= 100
      } else if quantidadeTotal - 50 >= 0 {
         notas50 += 1
         quantidadeTotal -= 50
      } else if quantidadeTotal - 20 >= 0 {
         notas20 += 1
         quantidadeTotal -= 20
      } else if quantidadeTotal - 10 >= 0 {
         notas10 += 1
         quantidadeTotal -= 10
      } else if quantidadeTotal - 5 >= 0 {
         notas5 += 1
         quantidadeTotal -= 5
      } else if quantidadeTotal - 2 >= 0 {
         notas2 += 1
         quantidadeTotal -= 2
      } else if quantidadeTotal - 1 >= 0 {
         notas1 += 1
         quantidadeTotal -= 1
      } else {
         controlador += 1
      }
      
   }

   fmt.Printf("%d\n", quantidadeinicial)
   fmt.Printf("%d nota(s) de R$ 100,00\n", notas100)
   fmt.Printf("%d nota(s) de R$ 50,00\n", notas50)
   fmt.Printf("%d nota(s) de R$ 20,00\n", notas20)
   fmt.Printf("%d nota(s) de R$ 10,00\n", notas10)
   fmt.Printf("%d nota(s) de R$ 5,00\n", notas5)
   fmt.Printf("%d nota(s) de R$ 2,00\n", notas2)
   fmt.Printf("%d nota(s) de R$ 1,00\n", notas1)
}