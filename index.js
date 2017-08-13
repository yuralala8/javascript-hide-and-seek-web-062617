function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function nestedTarget() {
return document.querySelector('div#nested div.target')
}

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i] + n).toString()
  }
}

function deepestChild(){
  return document.querySelector('div#grand-node div div div div')
}
