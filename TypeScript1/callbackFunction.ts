function  addhandler(n1:number,n2:number,cb:(num:number)=>void)
{
    const result11=n1+n2;
    cb(result11);
}

addhandler(12,13,(result)=>
{
console.log(result);
});