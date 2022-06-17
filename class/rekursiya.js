function f(text="",n){
    if (n==0)
    {
        return ""
    }
    return text+f(text,n-1)
}
console.log(f("ab",3));