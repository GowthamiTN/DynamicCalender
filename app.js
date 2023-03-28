const daysTag=document.querySelector(".days"),
currentDate=document.querySelector(".current-date"),
prevNextIcon=document.querySelectorAll(".icons span");
const test=document.querySelector(".events");
let date =new Date();

currYear=date.getFullYear(),
currMonth=date.getMonth();
day=date.getDate();
//console.log(date);
let todayDate = `${day-1}-${currMonth}-${currYear}`;
//console.log(todayDate);

let data=[
    {
    "name":"Disha",
    "date":"19-03-1998"
   },
    {
        "name":"Sandya",
        "date":"20-02-1998"
    },
        
    {
        "name":"Vikas",
        "date":"21-01-1998"
       },
    {
         "name":"Ajay",
        "date":"24-05-1998"
    },
    {
        "name":"Nayan",
       "date":"22-05-1998"
   },
   {
    "name":"Ayush",
   "date":"22-05-1998"
}
]


const months=["January","February","March","April","May","June","July","August","September","October","November","December"];

const renderCalnder=()=>{
    let firstDayofMonth=new Date(currYear,currMonth,1).getDay(),
    lastDateofMonth=new Date(currYear,currMonth + 1,0).getDate(),
    lastDayofMonth=new Date(currYear,currMonth,lastDateofMonth).getDay(),
    lastDateofLastMonth=new Date(currYear,currMonth,0).getDate();

    let liTag="";
    for(let i=firstDayofMonth;i>0;i--){
        liTag+=`<li class="inactive">${lastDateofLastMonth-i+1}</li>`;
       
    }
    for(let i=1;i<=lastDateofMonth;i++)
    {
        
        let isToday= i === date.getDate()&& currMonth === new Date().getMonth() && currYear === new Date().getFullYear()?"active":"valid";
        liTag+=`<li class="${isToday}">${i}</li>`     
         
    }
    for(let i=lastDayofMonth;i<6;i++){
        liTag+=`<li class="inactive">${i-lastDayofMonth+1}</li>`
        
    }
   
    currentDate.innerText=`${months[currMonth]} ${currYear}`;
    daysTag.innerHTML=liTag;
     
    for(let j=0;j<data.length;j++)
    {       
        let arr=data[j].date.split("-");
        if(currMonth==date.getMonth())
        {
            if(currMonth==arr[1]-1)
            {
                console.log(data[j].name);
                test.innerHTML=`${data[j].name}'s  birthday is on ${arr[0]} `;
            }
        }
        const list = daysTag.querySelectorAll(".valid");
        
        let k;
          for( k=0;k<list.length;k++){
          if(list[k].innerHTML==arr[0] && currMonth==arr[1]-1) {    
            list[k].style.setProperty('--w','#b645eb');
            list[k].style.setProperty('--color','white');  
          }
        } 
    }

    
}


renderCalnder();
prevNextIcon.forEach(icon=>{
    console.log("clicked");
    icon.addEventListener('click',()=>{
        test.innerHTML="";
        currMonth=icon.id=="prev"?currMonth-1:currMonth+1;
        if(currMonth<0 || currMonth>11)
        {
            date=new Date(currYear,currMonth,new Date().getDate());
            currYear=date.getFullYear();
            currMonth=date.getMonth();
        }
        else{
            date= new Date();
            for(let j=0;j<data.length;j++)
            {        
                let arr=data[j].date.split("-");
                //console.log(currMonth,currYear,currentDate,arr);
                if(currMonth==arr[1]-1)
                {
                    test.innerHTML+=`${data[j].name}'s  birthday is on ${arr[0]}`+ "<br />";
                } 
            }
                       
        }  
        renderCalnder();
    
    });
});