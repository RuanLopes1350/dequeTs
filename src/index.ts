import { Fila } from "./class/filas";
import { Deque } from "./class/deques";

let fila = new Fila(5);

for(let i = 5; i >= 0; i--) {
    console.log("Inserido A");
    fila.enqueue("A");
    console.log("Inserido B");
    fila.enqueue("B");
    console.log("Inserido C");
    fila.enqueue("C");

    console.log("Removido:", fila.dequeue());
    console.log("Removido:", fila.dequeue());
    console.log("Removido:", fila.dequeue());
}

const inteiros = new Deque<number>(4)


inteiros.addFirst(10)
inteiros.addLast(20)
inteiros.addLast(30)
inteiros.addFirst(50)
console.log(inteiros.removeFirst())

console.log(inteiros.removeFirst())
console.log(inteiros.removeLast())


console.log(inteiros.size())
console.log(inteiros.capacity())