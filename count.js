
const c=()=>{
let co=document.getElementById("text").value.length

// alert(count)
// 1 way to calculate the word
//let co=document.getElementById("text").value.length

let word=document.getElementById("text").value

word=word.match(/\w+/g)   //aagar bus aise/\w/ likhe toh bus phele letter aayega isliye + plus ka sign join kr dege toh bus plela word aayega isliye group of word ka count krna h toh humlog ko G(g) v likhna hoga 
if(word==null)
{
document.getElementById("word").innerHTML="you have not written anything"
} 
word=word.length
//2 way to calculate the word

//let count=document.getElementById("text").value

//let word=count.split(" ").length
document.getElementById("some").innerHTML="total no. of character ="+co
document.getElementById("word").innerHTML="total no. of word ="+word

}
