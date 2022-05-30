
console.log('Welcome to Notes App.this is app.js');
  showNotes();



// if user adds a note , add it to the localstorage//


    let addBtn = document.getElementById('btnAdd');
    addBtn.addEventListener("click",function(e){
    
        let imp = document.getElementById('imp');
       
         
        let addTxt = document.getElementById("addTxt");
        let addTxt1 = document.getElementById("addTxt1");
        let notes =localStorage.getItem("notes");
    //   console.log(notes);
      if(addTxt.value!="" && addTxt1.value!=""){

        if(notes==null)
        {
            notesObj= [];
        }
        else
        {
            notesObj = JSON.parse(notes);
        }
    
        let myObj = {
            title: addTxt1.value,
            text:addTxt.value
        };
    
        notesObj.push(myObj);
        localStorage.setItem("notes",JSON.stringify(notesObj));
        
        addTxt.value = "";
        addTxt1.value="";
    
       

            showNotes();
        

      }
      else{
          if(addTxt.value=="" && addTxt1.value==""){
              alert("All fields are Required to Fill..!");
          }
          else if(addTxt1.value==""){
              alert("Title should not be Empty..!");
              e.preventDefault();
          }
          else{
              alert("Please Fill your Notes..");
              e.preventDefault();
          }
      }
       

            
        // console.log(notes);
    
        
    })


    
  
 

//function to show elements from local storage//

function showNotes(){
    let notes = localStorage.getItem("notes");
   
    if(notes==null)
    {
        notesObj= [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

            let html = "";
   
    notesObj.forEach(function(elements,index){

        
            if(elements.text!="" ){

                if(elements.title==""){
                    elements.title ="No title";
                }
    
                  
                html += `
                <div class="card"  >
                    <div class="card-body">
                    <label  id="star1" ></label>
                    <h5 class="card-title" style="font-size: 1.9rem;"> ${elements.title}</h5>
                    <p class="card-text" id="notes" style="font-size: 1.8rem;"> ${elements.text} </p>
                    <button id=" ${index} " onclick="deleteNote(this.id)" class="btnDel">Delete</button>
                    </div>
                </div> `;
             }
            else{
                if(elements.title==""){
                elements.title ="No title";
                }
                 elements.text="No any message in this notes!"
              
                html += `
                <div class="card"  >
                    <div class="card-body">
                    <label id="star1"></label>
                    <h5 class="card-title" style="font-size: 1.9rem;"> ${elements.title}</h5>
                    <p class="card-text" id="notes" style="font-size: 1.8rem;"> ${elements.text} </p>
                    <button id=" ${index} " onclick="deleteNote(this.id)" class="btnDel">Delete</button>
                    </div>
                </div> `;
                }
             
    });
   

    let notesElm = document.getElementById('notes');
    if(notesObj.length!=0){
        notesElm.innerHTML =html;
    }
    else{
        notesElm.innerHTML = `Nothing to show! "Add a Note" section above to add notes.`
        
       }

   
    // let html = "";
   
    // notesObj.forEach(function(elements,index){

        
    //         if(elements.text!="" ){

    //             if(elements.title==""){
    //                 elements.title ="No title";
    //             }
    
                  
    //             html += `
    //             <div class="card"  >
    //                 <div class="card-body">
    //                 <label  id="star1" ></label>
    //                 <h5 class="card-title" style="font-size: 1.9rem;"> ${elements.title}</h5>
    //                 <p class="card-text" id="notes" style="font-size: 1.8rem;"> ${elements.text} </p>
    //                 <button id=" ${index} " onclick="deleteNote(this.id)" class="btnDel">Delete</button>
    //                 </div>
    //             </div> `;
    //          }
    //         else{
    //             if(elements.title==""){
    //             elements.title ="No title";
    //             }
    //              elements.text="No any message in this notes!"
              
    //             html += `
    //             <div class="card"  >
    //                 <div class="card-body">
    //                 <label id="star1"></label>
    //                 <h5 class="card-title" style="font-size: 1.9rem;"> ${elements.title}</h5>
    //                 <p class="card-text" id="notes" style="font-size: 1.8rem;"> ${elements.text} </p>
    //                 <button id=" ${index} " onclick="deleteNote(this.id)" class="btnDel">Delete</button>
    //                 </div>
    //             </div> `;
    //             }
             
    // });
   

    // let notesElm = document.getElementById('notes');
    // if(notesObj.length!=0){
    //     notesElm.innerHTML =html;
    // }
    // else{
    //     notesElm.innerHTML = `Nothing to show! "Add a Note" section above to add notes.`
        
    // }
}


//function to delete a note

function deleteNote(index){
    
  //  console.log("ohhh! deleted..",index);


    let notes =localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj= [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
    

    let inputVal = search.value.toLowerCase();
   // console.log('search is ready',inputVal);

    let cards = document.getElementsByClassName('card');
    Array.from(cards).forEach(function(element){

        let cardTitle = element.getElementsByTagName('h5')[0].innerText;
        if(cardTitle.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        //console.log(cardTxt);
    })

})

// let m = document.getElementById('imp');
// m.addEventListener('click',function(ee){

//  let k =   mark();
//  console.log(k);
// })




