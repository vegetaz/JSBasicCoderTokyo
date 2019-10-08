//Viêt 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str) {
    // Cách 1
    if (str.length == 0) return 'empty string';
    var newstr = str.split('');
    var count = { p: 0, t: 0 };
    for (var i = 0; i < newstr.length; i++) {
        if (newstr[i] == 'p') {
            count.p++;
        }
        if (newstr[i] == 't') {
            count.t++;
        }
    }
    return count.p == count.t ? true : false;
    // Cách 2
    // const str_p = str.replace(/[^p]/g, "");
    // const str_t = str.replace(/[^t]/g, "");
    // const p_num = str_p.length;
    // const s_num = str_t.length;
    // return p_num === s_num;
}

console.log(equal_pt('paatpsts'));