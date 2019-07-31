let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let countName = names.reduce(function(allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});

console.log(countName);