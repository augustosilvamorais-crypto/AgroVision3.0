const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
sidebar.classList.toggle("active");
});

const ctx = document.getElementById("safraChart");

if(ctx){

new Chart(ctx,{

type:'line',

data:{

labels:[
'Jan',
'Fev',
'Mar',
'Abr',
'Mai',
'Jun'
],

datasets:[{

label:'Produtividade',

data:[
65,
72,
81,
79,
88,
95
],

borderColor:'#00ff99',

backgroundColor:'rgba(0,255,153,.15)',

fill:true,

tension:0.4

}]

},

options:{

responsive:true,

plugins:{
legend:{
labels:{
color:'white'
}
}
},

scales:{

x:{
ticks:{
color:'white'
}
},

y:{
ticks:{
color:'white'
}
}

}

}

});

}
