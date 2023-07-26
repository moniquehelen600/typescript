import PromptSync from "prompt-sync";// importa o pacote promt-sync
import { exercicioUm, exercicioDois, exercicioTres, 
    exercicioQuatro, exercicioCinco, exercicioSeis, exercicioSete, exercicioOito, exercicioNove, exercicioDez,} from "./exercicios";

const prompt = PromptSync() //chama a fucao promt que permite que o usuario digite 

// do-while e uma estrutura de repeticao comforme sua condicao for verdeira continua executando

//number ou string
let exercicio:number

do {
    exercicio = parseInt(prompt("Digite um numero de 1 a 6: "))

    switch (exercicio) {
        case 1:
            exercicioUm()
            break;

        case 2:
            exercicioDois()
            break;
        case 3:
            exercicioTres()
            break;
        case 4:
            exercicioQuatro()
            break;
        case 5:
            exercicioCinco()
            break;
        case 6:
            exercicioSeis()
            break;
        case 7:
            exercicioSete()
            break;
        case 8:
            exercicioOito()
            break;
        case 9:
            exercicioNove()
            break;
        case 10:
            exercicioDez()
            break;
        default:
            console.log("Digite um numero de 1 a 10: ");
            break;
    }

} while (exercicio);
