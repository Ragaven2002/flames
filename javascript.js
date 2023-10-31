function reset(){
    window.location.reload();
}

function flames() {
    var name1 = document.getElementById("name1").value.toLowerCase();
    var name2 = document.getElementById("name2").value.toLowerCase();

    // Remove spaces from names
    name1 = name1.replace(/\s/g, '');
    name2 = name2.replace(/\s/g, '');

    var flames = "flames";
    var flamesArray = flames.split('');

    // Calculate FLAMES
    for (var i = 0; i < name1.length; i++) {
        for (var j = 0; j < name2.length; j++) {
            if (name1[i] === name2[j]) {
                name1 = name1.substring(0, i) + name1.substring(i + 1);
                name2 = name2.substring(0, j) + name2.substring(j + 1);
                i--;
                break;
            }
        }
    }

    var remainingLetters = name1.length + name2.length;

    while (flamesArray.length > 1) {
        var index = (remainingLetters % flamesArray.length) - 1;
        if (index === -1) {
            index = flamesArray.length - 1;
        }
        flamesArray.splice(index, 1);
    }

    var relationship = "";
    switch (flamesArray[0]) {
        case 'f':
            relationship = "Friends";
            var img=document.getElementById("friend");
            img.style.display = "inline-block";
            img.style.textAlign = "center";
            var pho = document.getElementById("photo")
            pho.appendChild(img);
            break;
        case 'l':
            relationship = "Lovers";
            var img=document.getElementById("love");
            img.style.display = "inline-block";
            img.style.textAlign = "center";
            var pho = document.getElementById("photo")
            pho.appendChild(img);
            break;
        case 'a':
            relationship = "Affectionate";
            var img=document.getElementById("affection");
            img.style.display = "inline-block";
            img.style.textAlign = "center";
            var pho = document.getElementById("photo")
            pho.appendChild(img);
            break;
        case 'm':
            relationship = "Marriage";
            var img=document.getElementById("marriage");
            img.style.display = "inline-block";
            img.style.textAlign = "center";
            var pho = document.getElementById("photo")
            pho.appendChild(img);
            break;
        case 'e':
            relationship = "Enemies";
            var img=document.getElementById("enemy");
            img.style.display = "inline-block";
            img.style.textAlign = "center";
            var pho = document.getElementById("photo")
            pho.appendChild(img);
            break;
        case 's':
            relationship = "Siblings";
            var img=document.getElementById("sibiling");
            img.style.display = "inline-block";
            img.style.textAlign = "center";
            var pho = document.getElementById("photo")
            pho.appendChild(img);
            break;
    }

    let values=document.getElementById("result");
    values.value=relationship;

}




const scriptURL = 'https://script.google.com/macros/s/AKfycbzpqR1l5Ox5UmvSHBLwpAvPGMA2lgeCX5QXrXAccDEZrvA6XxQbc2sp24PUjdw-XdQ7/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
