export class Book{
    constructor(
        public title:string,
        public author:string,
        public description:string,
        public price: number){}

    getJsonBase(){
        return {title:this.title,author:this.author,description:this.description,price:this.price}
    }

}