/*let dataList = [{
    id:1,
    name:"khura",
    email:"khura12@gmail.com",
    country:"United State"
},
{
    id:2,
    name:"Andile Dindi",
    email:"dhhura15@gmail.com",
    country:"China"
}]
const loadData =()=>{
    localStorage.setItem("object",JSON.stringify(dataList));
    var data = document.querySelector("#data-table");
    var peopleData = JSON.parse(localStorage.getItem("object"));
    var items = "";
    peopleData.map(person =>(
        items +=`<tr>
            <td class="name">${person.name}</td>
            <td class="email">${person.email}</td>
            <td class="buttons">
               <button class="edit" onclick="edit(${person.id})"><i class="fa fa-edit"></i></button>
               <button class="delete" onclick="delet(this)"><i class="fa fa-trash" aria-hidden="true"></i></button>
            </td>
            <td class="country">${person.country}</td>
        </tr>`

    ))
    data.innerHTML = items;
}
const create=()=>{
    document.querySelector(".create-form").style.display ="flex";
    document.querySelector(".add-div").style.display ="none";

}
const addData =()=>{
    var name = document.querySelector("#name").value;
    var country = document.querySelector("#country").value;
    document.querySelector(".create-form").style.display ="none";
    document.querySelector(".add-div").style.display ="block";
    var email = document.querySelector("#email").value;
    var object = {id:3,
                 name:name,
                 email:email,
                 country:country
                }
    dataList.push(object);
    loadData();

}
const edit =(id)=>{
    
    document.querySelector(".update-form").style.display ="flex";
    document.querySelector(".add-div").style.display ="none";
    var obj = dataList.find(ele => ele.id === id);
    document.querySelector("#update-name").value = obj.name;
    document.querySelector("#update-email").value = obj.email;
    document.querySelector("#update-country").value = obj.country;
    document.querySelector("#id").value=obj.id;

}
const upDate =()=>{
     var name = document.querySelector("#update-name").value;
     var email = document.querySelector("#update-email").value;
     var country = document.querySelector("#update-country").value;
     var id = parseInt(document.querySelector("#id").value);
     var index = dataList.findIndex(ele=>ele.id===id);
     dataList[index] = {id,name,email,country};
     document.querySelector(".update-form").style.display ="none";
     document.querySelector(".add-div").style.display ="block";
     loadData()
}

const delet =(e)=>{
    e.parentElement.parentElement.remove();
}
 */
let data =[{
    id:1,
    name:"Khulekani",
    email:"123@mail.com",
    country:"USA"
},
{
    id:2,
    name:"Bongani",
    email:"bongz@mail.com",
    country:"China"
}]
const loadData =()=>{
    localStorage.setItem("object",JSON.stringify(data));
    var tableData = document.querySelector("#data-table");
    var object = localStorage.getItem("object");
    var objectData = JSON.parse(object);
    var elements ="";
    objectData.map(records=>(
        elements +=`<tr>
             <td class="name">${records.name}</td>
             <td class="email">${records.email}</td>
             <td class="country">${records.country}</td>
             <td class="buttons">
                  <button class="edit" onclick="edit(${records.id})"><i class="fa fa-edit"></i></button>
                  <button class="delete" onclick="delet(this)"><i class="fa fa-trash"></i></button>
             </td>
        </tr>`
    ))
    tableData.innerHTML = elements;
}
const create = ()=>{
    document.querySelector(".create-form").style.display ="flex";
    document.querySelector(".add-div").style.display ="none";
}
const addData =()=>{
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var country = document.querySelector("#country").value;
    var newObject ={id:3,name:name,email:email,country:country}
    document.querySelector(".create-form").style.display ="none";
    document.querySelector(".add-div").style.display ="block";
    data.push(newObject);
    loadData()
}
const edit =(id)=>{
    
    document.querySelector(".update-form").style.display ="flex";
    var obj = data.find(rec=>rec.id ===id);
    document.querySelector("#id").value=obj.id;
    document.querySelector("#update-name").value = obj.name;
    document.querySelector("#update-email").value = obj.email;
    document.querySelector("#update-country").value = obj.country;

}
const upDate =()=>{
    var  id = parseInt(document.querySelector("#id").value);
   var name = document.querySelector("#update-name").value;
   var email = document.querySelector("#update-email").value;
   var country = document.querySelector("#update-country").value;
   document.querySelector(".update-form").style.display ="none";
   document.querySelector(".add-div").style.display ="block";
   var index = data.findIndex(rec=>rec.id===id)
   data[index] = {id,name,email,country};
   loadData()
}
const delet =(e)=>{
   e.parentElement.parentElement.remove();
}