export class Deque<T> {
    back:number;
    front:number;
    max_size:number;
    array:(T | undefined)[];
    amount:number;

    constructor(max_size:number){
        this.max_size = max_size;
        this.back = 0;
        this.front = (max_size+1)%max_size;
        this.array = new Array(this.max_size);
        this.amount = 0;
    }
    
    
    addFirst(item:T){
        if(this.array[this.back] == undefined){
            this.array[this.back] = item
            this.back = (this.max_size+this.back-1)%this.max_size
            this.amount += 1
            return
        }
        console.log(`O Array está cheio!`)
    }
    addLast(item:T){
        if(this.array[this.front] == undefined){
            this.array[this.front] = item
            this.front = (this.front+1) % this.max_size
            this.amount +=1
            return
        }
        console.log(`O Array está cheio!`)
    }
    removeFirst(): T | undefined{
        let i:number = (this.back+1) % this.max_size
        if(this.array[i] != undefined){
            const item = this.array[i]
            this.array[i] = undefined
            this.back = (this.back+1) % this.max_size
            this.amount -=1
            return item
        }
        console.log(`Não há nada para ser removido`)
        return undefined
        
    }
    removeLast(): T | undefined{
        let i:number = (this.max_size+this.front-1)%this.max_size
        if(this.array[i] != undefined){
            const item = this.array[i]
            this.array[i] = undefined
            this.front = (this.max_size+this.front-1)%this.max_size
            this.amount -=1
            return item
        }
        console.log(`Não há nada para ser removido`)
        return undefined
    }
    peekFirst(): T | undefined{
        let i:number = (this.front+1) % this.max_size
        return this.array[i]
    }
    peekLast(): T | undefined{
        let i:number = (this.max_size+this.back-1)%this.max_size
        return this.array[i]
    }
    size(): number{
        return this.amount
    }
    capacity(): number{
        return this.max_size
    }
}
