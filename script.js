let num = +prompt('Son Kiriting ')


while(isNaN(num)){
    num = +prompt('Sizga son kiriting deyildi!!! ')
}
 
while(num == 0){
    num = +prompt(' Obbo Sizga son kiriting deyildiku!! ')
}

alert('Siz kiritgan son: ' +num)


let number = +prompt (' Son kiriting biz esa darajaga oshiriberamiz :) ')

let degree = +prompt ('Endi esa Darajani kiriting!')

let answer = 1

for (let i = 0; i < degree; i++ ){
     answer = answer * number
}   

alert( 'Togri javob: ' +answer);

while(isNaN(number)){
    num = +prompt('Sizga son kiriting deyildi!!! ')
}

let son = +prompt('siz son kiriting biz juft yoki toqligini aniqlab beramiz')

if(son % 2 === 0){
    alert('siz juft son kiritdingiz '+ son)
} else if(son % 2===1){
    alert('siz toq son kiritdingiz ' +son)
}else {
    alert('siz sondan boshqa narsa kiritdingiz')
}

