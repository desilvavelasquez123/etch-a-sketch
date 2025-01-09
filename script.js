window.addEventListener("load", function() {
    let i = 0;
    while (i < 100){
    const square = document.createElement("div");
    square.classList.add("square");
    const main = document.querySelector(".main");
    main.append(square);
    ++i;    
}
});