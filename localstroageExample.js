const form= document.getElementById('my-form');

form.addEventListener('submit',localStor);

function localStor(e){
    e.preventDefault();
    const name=document.getElementById('name').value;
    localStorage.setItem('name',name);
    console.log(name);
   
 }
