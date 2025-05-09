export class Fila {
    capacidade: number;
    inicio: number;
    fim: number;
    arr: (string | null)[];

    constructor(capacidade: number) {
        this.capacidade = capacidade;
        this.inicio = 0;
        this.fim = 0;
        this.arr = new Array(this.capacidade);
    }

    private incrementar(cont: number) {
        return (cont + 1) % this.capacidade;
    }

    enqueue(valor: string) {
        this.arr[this.fim] = valor;
        this.fim = this.incrementar(this.fim);

        console.log(this.arr);
    }

    dequeue(): string {
        const temp = this.arr[this.inicio];
        if(temp === null) throw new Error("Fila Vazia!");
        
        this.arr[this.inicio] = null;
        this.inicio = this.incrementar(this.inicio);
        
        console.log(this.arr);
        return temp;
    }
}