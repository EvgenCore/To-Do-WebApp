const filterPersonal = document.querySelector("#filterPersonal")
const filterWork = document.querySelector("#filterWork")
const filterCleaning = document.querySelector("#filterCleaning")
const filterShopping = document.querySelector("#filterShopping")
const filterCoding = document.querySelector("#filterCoding")
const filterHealth = document.querySelector("#filterHealth")
const filterAll = document.querySelector("#filterAll")


function displayDate(){
    let date = new Date;
    date = date.toString().split(" ")
    document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3]
}


/* =============================================================================== */


/* create item */
document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item")
    let tag = document.querySelector("#tag")
    createItem(item,tag)

})

function createItem(item,tag) {
    let arr = []
    let itemObject = {
        item: item.value,
        tag: tag.value
    }
    if(taskfromLS ){
        arr.push(...taskfromLS,itemObject)
        location.reload();
        return localStorage.setItem("items", JSON.stringify(arr))
        
    }
    arr.push(itemObject)
    localStorage.setItem("items", JSON.stringify(arr))
    location.reload();
   
}
/* create item */
/* =============================================================================== */


let taskfromLS= JSON.parse(localStorage.getItem("items"))

/* =============================================================================== */





/* display items + display filtered items */
function displayAllItems(){
    let items = "";
    for(let i = 0; i < taskfromLS.length; i++){
        let task = Object.values(taskfromLS[i]) 
        items += `  <div class="item">
                        <div class="input-controller">
                            <p class="toDoTag">${task[1]}</p>                                                        
                            <div class="toDoMainDiv">
                                <textarea disabled class='mainText'>${task[0]}</textarea>
                                <div class="edit-controller">
                                    <div><i class="fa-solid fa-check deleteBtn" title="done"></i></div>  
                                    <div><i class="fa-solid fa-pen-to-square editBtn" title="edit"></i></div>
                                </div>
                            </div>
                        </div>
                        <div class="update-controller" style="display:none">
                            <button class="saveBtn">Save</button>
                            <button class="cancelBtn">Cancel</button>
                        </div>
                    </div>`      
    }
 
    filterPersonal.addEventListener("click", ()=>{
        items = ""
        for(let i = 0; i < taskfromLS.length; i++){
            let task =Object.values(taskfromLS[i])
            if(task[1]=="personal")
            items += `  <div class="item" id="">
                            <div class="input-controller">
                                <p class="toDoTag">${task[1]}</p>                                                          
                                <div class="toDoMainDiv">
                                    <textarea disabled class='mainText'>${task[0]}</textarea>
                                    <div class="edit-controller">
                                        <div><i class="fa-solid fa-check deleteBtn" title="done"></i></div>  
                                        <div><i class="fa-solid fa-pen-to-square editBtn" title="edit"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="update-controller" style="display:none">
                                <button class="saveBtn">Save</button>
                                <button class="cancelBtn">Cancel</button>
                            </div>
                        </div>`             
        }
        document.querySelector(".to-do-list").innerHTML = items

        activateDelete()
        activateEdit()
        activateSave()
        activateCancel()
    })

    /* =========================== */

    filterWork.addEventListener("click", ()=>{
        items = ""
        for(let i = 0; i < taskfromLS.length; i++){
            let task =Object.values(taskfromLS[i])
            if(task[1]=="work")
            items += `  <div class="item" id="">
                            <div class="input-controller">
                                <p class="toDoTag">${task[1]}</p>                                                          
                                <div class="toDoMainDiv">
                                    <textarea disabled class='mainText'>${task[0]}</textarea>
                                    <div class="edit-controller">
                                        <div><i class="fa-solid fa-check deleteBtn" title="done"></i></div>  
                                        <div><i class="fa-solid fa-pen-to-square editBtn" title="edit"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="update-controller" style="display:none">
                                <button class="saveBtn">Save</button>
                                <button class="cancelBtn">Cancel</button>
                            </div>
                        </div>`            
        }
        document.querySelector(".to-do-list").innerHTML = items

        activateDelete()
        activateEdit()
        activateSave()
        activateCancel()
    })

    /* =========================== */
    
    filterCleaning.addEventListener("click", ()=>{
        items = ""
        for(let i = 0; i < taskfromLS.length; i++){
            let task =Object.values(taskfromLS[i])
            if(task[1]=="cleaning")
            items += `  <div class="item" id="">
                            <div class="input-controller">
                                <p class="toDoTag">${task[1]}</p>                                                          
                                <div class="toDoMainDiv">
                                    <textarea disabled class='mainText'>${task[0]}</textarea>
                                    <div class="edit-controller">
                                        <div><i class="fa-solid fa-check deleteBtn" title="done"></i></div>  
                                        <div><i class="fa-solid fa-pen-to-square editBtn" title="edit"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="update-controller" style="display:none">
                                <button class="saveBtn">Save</button>
                                <button class="cancelBtn">Cancel</button>
                            </div>
                        </div>`            
        }
        document.querySelector(".to-do-list").innerHTML = items

        activateDelete()
        activateEdit()
        activateSave()
        activateCancel()
    })

    /* =========================== */

    filterShopping.addEventListener("click", ()=>{
        items = ""
        for(let i = 0; i < taskfromLS.length; i++){
            let task =Object.values(taskfromLS[i])
            if(task[1]=="shopping")
            items += `  <div class="item" id="">
                            <div class="input-controller">
                                <p class="toDoTag">${task[1]}</p>                                                          
                                <div class="toDoMainDiv">
                                    <textarea disabled class='mainText'>${task[0]}</textarea>
                                    <div class="edit-controller">
                                        <div><i class="fa-solid fa-check deleteBtn" title="done"></i></div>  
                                        <div><i class="fa-solid fa-pen-to-square editBtn" title="edit"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="update-controller" style="display:none">
                                <button class="saveBtn">Save</button>
                                <button class="cancelBtn">Cancel</button>
                            </div>
                        </div>`     
        }
        document.querySelector(".to-do-list").innerHTML = items

        activateDelete()
        activateEdit()
        activateSave()
        activateCancel()
    })

    /* =========================== */

    filterCoding.addEventListener("click", ()=>{
        items = ""
        for(let i = 0; i < taskfromLS.length; i++){
            let task =Object.values(taskfromLS[i])
            if(task[1]=="coding")
            items += `  <div class="item" id="">
                            <div class="input-controller">
                                <p class="toDoTag">${task[1]}</p>                                                          
                                <div class="toDoMainDiv">
                                    <textarea disabled class='mainText'>${task[0]}</textarea>
                                    <div class="edit-controller">
                                        <div><i class="fa-solid fa-check deleteBtn" title="done"></i></div>  
                                        <div><i class="fa-solid fa-pen-to-square editBtn" title="edit"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="update-controller" style="display:none">
                                <button class="saveBtn">Save</button>
                                <button class="cancelBtn">Cancel</button>
                            </div>
                        </div>`          
        }
        document.querySelector(".to-do-list").innerHTML = items

        activateDelete()
        activateEdit()
        activateSave()
        activateCancel()
    })

    /* =========================== */

    filterHealth.addEventListener("click", ()=>{
        items = ""
        for(let i = 0; i < taskfromLS.length; i++){
            let task =Object.values(taskfromLS[i])
            if(task[1]=="health")
            items += `  <div class="item" id="">
                            <div class="input-controller">
                                <p class="toDoTag">${task[1]}</p>                                                          
                                <div class="toDoMainDiv">
                                    <textarea disabled class='mainText'>${task[0]}</textarea>
                                    <div class="edit-controller">
                                        <div><i class="fa-solid fa-check deleteBtn" title="done"></i></div>  
                                        <div><i class="fa-solid fa-pen-to-square editBtn" title="edit"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="update-controller" style="display:none">
                                <button class="saveBtn">Save</button>
                                <button class="cancelBtn">Cancel</button>
                            </div>
                        </div>`           
        }
        document.querySelector(".to-do-list").innerHTML = items
        
        activateDelete()
        activateEdit()
        activateSave()
        activateCancel()
    })

    /* =========================== */
    filterAll.addEventListener("click", ()=>{
        items = ""
        for(let i = 0; i < taskfromLS.length; i++){
            let task =Object.values(taskfromLS[i]) 
            items += `  <div class="item" id="">
                            <div class="input-controller">
                                <p class="toDoTag">${task[1]}</p>                                                          
                                <div class="toDoMainDiv">
                                    <textarea disabled class='mainText'>${task[0]}</textarea>
                                    <div class="edit-controller">
                                        <div><i class="fa-solid fa-check deleteBtn" title="done"></i></div>  
                                        <div><i class="fa-solid fa-pen-to-square editBtn" title="edit"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="update-controller" style="display:none">
                                <button class="saveBtn">Save</button>
                                <button class="cancelBtn">Cancel</button>
                            </div>
                        </div>`         
        }
        document.querySelector(".to-do-list").innerHTML = items

        activateDelete()
        activateEdit()
        activateSave()
        activateCancel()

    })

    document.querySelector(".to-do-list").innerHTML = items

    activateDelete()
    activateEdit()
    activateSave()
    activateCancel()
}
/* display items + display filtered items */

/* =============================================================================== */

/* delete task */
function activateDelete(){
    let deleteBtn = document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((dB, i) => {
      dB.addEventListener("click", () => { deleteItem(i) })
    })
}

function deleteItem(i){
    taskfromLS.splice(i,1)
    localStorage.setItem("items", JSON.stringify(taskfromLS))
    location.reload()
}
/* delete task */

/* =============================================================================== */

/* edit task */
function activateEdit(){
    const editBtn = document.querySelectorAll(".editBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    editBtn.forEach((eB, i) => {
      eB.addEventListener("click", () => { 
        updateController[i].style.display = "block"
        inputs[i].disabled = false 
        
        })
        

    })
}
/* edit task */

/* =============================================================================== */

/* save edited item */
function activateSave (){
    const saveBtn = document.querySelectorAll(".saveBtn")
    const inputs = document.querySelectorAll(".input-controller textarea")
    saveBtn.forEach((sB, i) => {
        sB.addEventListener("click", () => {
            updateItem(inputs[i].value, i)
            
        })
    })
}
function updateItem(text, i){
    console.log(taskfromLS[i].item)
    console.log(text)
    taskfromLS[i].item =text
    //console.log(text[0])
    localStorage.setItem("items", JSON.stringify(taskfromLS));
    location.reload()
}
/* save edited item */

/* =============================================================================== */

/* cancel to edit item */
function activateCancel () {
    const cancelBtn = document.querySelectorAll(".cancelBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    cancelBtn.forEach((cB, i) => {
        cB.addEventListener("click", () => {
            updateController[i].style.display = "none";
            inputs[i].disabled = true; 
            location.reload()
        })
    })
}
/* cancel to edit item */



window.onload = function(){
    displayDate()
    displayAllItems()
}