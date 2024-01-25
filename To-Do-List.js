// Create a "close" button and append it to each list item
let nodeList = document.getElementsByTagName("LI");
let i;
for( i=0; i< nodeList.length; i++){
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7") ; //u00D7 is code of cross sign
    span.className = "close";
    span.appendChild(txt);
    nodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement; 
        div.style.display = "none";
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked')
    }
},false)


        addBtn = document.querySelector('.addBtn')
        addBtn.addEventListener('click', function(){
            
            let inputValue = document.getElementById('UserInput').value;
            let li = document.createElement('li');
            console.log("li : " +li);
            let t = document.createTextNode(inputValue);
            console.log("inputvalue : "+inputValue);

            li.appendChild(t);
            if(inputValue === ''){
                alert("You must write something! ");
            } else {
                document.querySelector('#ListItems').appendChild(li);
            }

            document.getElementById('UserInput').value = " ";
      

    let span = document.createElement('span')
    let txt = document.createTextNode('\u00D7')
    span.className = "close"
    span.appendChild(txt)
    li.appendChild(span)

// let close = document.getElementsByClassName("close");

    for(i = 0; i < close.length; i++){
                close[i].onclick = function(){
                    let div = this.parentElement;
                    div.style.display = "none";
                   }
                }

            })
            