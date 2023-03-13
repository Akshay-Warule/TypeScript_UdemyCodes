class DataStorage<T extends number| string| boolean>{ 
    //object not allow only string number, boolean allow
    private data:T[]=[];

    additem(item:T)
    {
        this.data.push(item);
    }

    removeItem(item:T)
    {
        if(this.data.indexOf(item)==-1)
        {return;}
        this.data.splice(this.data.indexOf(item),1)
    }
    

    getitem(){
        return [...this.data];
    }
}

const textStorage=new DataStorage<string>();
textStorage.additem("mahesh");
textStorage.additem("barat");

textStorage.removeItem("mahesh");
console.log(textStorage.getitem());

// const objectstorage=new DataStorage<object>();

// objectstorage.additem({name:'Akshay'});
// objectstorage.additem({name:"gagan"});
// objectstorage.additem({name:"shyam"});

// objectstorage.removeItem({name:"Ram"});//this is not presnt in Datastorage then what happen

// console.log(objectstorage.getitem());
// // {name: 'Akshay'} 
// // {name: 'gagan'}
// //if object is not present then it wil remove last object for that add if condition in removeitem and
// // fot that we have to store object in diffrent variable like

// const maxObj={name:"loka"}
// objectstorage.additem(maxObj)

// const maxObj2={name:"lokesh"}
// objectstorage.additem(maxObj2)

// objectstorage.removeItem(maxObj2);
// console.log(objectstorage.getitem())


