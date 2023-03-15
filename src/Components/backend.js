var value = document.querySelector("#value");
var btn = document.querySelectorAll(".btn");
var counter = 0;
// We cannot add Event listener on node list
// But we can loop through
btn.forEach(function (elem) {
  // Since its returing a list ,which gives ease to addEventListener

  elem.addEventListener("click", function (e) {
    const updates = e.currentTarget.classList;
    // console.log(e.currentTarget.classList) -> returning an array of btn1

    if (updates.contains("decrease")) {
      counter--;
    } 
    else if (updates.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }
    if(counter>0){
        value.style.color='green';
    }
    if(counter<0){
        value.style.color='#d90429'
    }
    value.textContent = counter;
  });
});
