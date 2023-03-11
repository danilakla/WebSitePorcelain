import {makeAutoObservable} from "mobx";

class Store{
    products=[];
    fullPrice;
    count=0;
    constructor(props) {
       makeAutoObservable(this)
        this.fullPrice=0;
    }

    incrCount(){
        console.log(this.count)
        this.count+=1;
    }
    dicrCount(){
this.count=0;
    }
    addProduct(item){
        console.log('2')
        this.products.push(item)
    this.fullPrice+=item.price;
    }
    delete(){
        this.products=[]
        this.fullPrice=0;
    }



}
export default  new Store();