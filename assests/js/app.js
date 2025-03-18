//[Random Password Generater]
let Alpha="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let special="!@#$%&*()<>?\/"
let digit="1234567890"
let Generate2=[]
let Generate3=[]
for(let i=0;i<5;i++){
    Generate2[i]=Alpha[Math.floor((Math.random()*51)+1)]
}
for(let i=5;i<10;i++){
    Generate2[i]=special[Math.floor((Math.random()*14)+1)]
}
for(let i=10;i<15;i++){
    Generate2[i]=digit[Math.floor((Math.random()*9)+1)]
}
for(let j=0;j<=15;j++){
    Generate3[j]=Generate2[Math.floor((Math.random()*15)+1)]
}
console.log("Generated Password Is : " + Generate3.join(""))