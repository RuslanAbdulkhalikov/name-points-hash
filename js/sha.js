let input = document.querySelector('.input');
input.focus();

async function sha1(str) {
    const buf = Uint8Array.from((encodeURIComponent(str)), c=>c.charCodeAt(0)).buffer;
    const digest = await crypto.subtle.digest('SHA-1', buf);
    const raw = String.fromCharCode.apply(null, new Uint8Array(digest));
    return btoa(raw);   
}

function bouncer(arr) {
    return arr.filter( function(v){return !(v !== v);});
}

document.querySelector("#btn").onclick = myClick;

async function myClick() {
    var str = document.getElementById("input").value.split(' ');
    var a = str[0]
    var b = str[1]
    var c = str[2]

    var word1 = a.toLowerCase().replace(' ', '');
    var word2 = b.toLowerCase().replace(' ', '');
    var word3 = c.toLowerCase().replace(' ', '');

    var word2 = a.toLowerCase().replace(' ', '');
    var word3 = b.toLowerCase().replace(' ', '');
    var word1 = c.toLowerCase().replace(' ', '');

    var word3 = a.toLowerCase().replace(' ', '');
    var word2 = b.toLowerCase().replace(' ', '');
    var word1 = c.toLowerCase().replace(' ', '');

    var list1 = [word1, word2, word3].join('');
    var list2 = [word2, word3, word1].join('');
    var list3 = [word3, word2, word1].join('');

    var result1 = document.getElementById('scores').innerHTML = parseInt(parseInt(await sha1(list1), 16), 10);
    var result2 = document.getElementById('scores').innerHTML = parseInt(parseInt(await sha1(list2), 16), 10);
    var result3 = document.getElementById('scores').innerHTML = parseInt(parseInt(await sha1(list3), 16), 10);

    console.log(result1, result2, result3);

    let temp_res = bouncer([result1, result2, result3]);
    
    console.log(temp_res);

    let result = Math.max.apply(Math, temp_res);

    if (isNaN(result)) {
        return document.getElementById('scores').innerHTML = 'Невозможно вычислить!';
    }
    else {
        var a = document.getElementById('scores').innerHTML = result % 30 + " points";
    }
}
