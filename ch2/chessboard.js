let size = 10;

for(let i = 0; i < size; ++i) {
    let line = "|";
    let prev = (i % 2 == 0) ? "#" : " ";

    for(let j = 0; j < size; ++j) {
        if(prev == " ") {
            line += (prev = "#");
        }
        else {
            line += (prev = " ");
        }
    }

    console.log(line + "|");
}
