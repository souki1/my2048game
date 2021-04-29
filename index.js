window.addEventListener("load", function(){
    var startButton = document.getElementById("startgame");
    var resetButton = document.getElementById("reset");
    var scoreDisplay = document.getElementById("score");
    var score =0;
    
    resetButton.disabled = true;
    var cellArr = document.getElementsByClassName("cell");

    startButton.addEventListener("click", function(){
        generate();
        generate();
        startButton.disabled = true;
        resetButton.disabled = false;
        window.addEventListener("keydown", keyEvent);
    });
    const width = 4;

    var generate = function(){
        
        var pos = Math.floor(Math.random()*16);
        if(cellArr[pos].innerHTML===""){
            cellArr[pos].innerHTML = 2;
        }else{
            generate();
        }
    }
    var reset = function(){
        for(var i=0; i<cellArr.length; i++){
            if(cellArr[i].innerHTML!=""){
                cellArr[i].innerHTML="";
            }
        }
        startButton.disabled = false;
        resetButton.disabled = true;
        window.removeEventListener("keydown", keyEvent);
    }
    var keyEvent = function(e){
        if(e.code == "ArrowLeft"){left();}
        else if(e.code == "ArrowRight"){right();}
        else if(e.code == "ArrowDown"){down();}
        else if(e.code == "ArrowUp"){up();}
    }
    

    var right = function(){
        console.log("Right")
        moveRight();
        rowCombine();
        moveRight();
        generate();
        
    }
    
    var left = function(){
        console.log("Left")
        moveLeft();
        rowCombine();
        moveLeft();
        generate();
    }
    
    var up = function(){
        console.log("Up")
        moveUp();
        columnCombine();
        moveUp();
        generate();
    }
    
    var down = function(){
        console.log("Down")
        moveDown();
        columnCombine();
        moveDown();
        generate();
    }

    var moveRight = function(){
        for (let i=0; i < 16; i++) {
            if (i % 4 === 0) {
              let totalOne = cellArr[i].innerHTML
              let totalTwo = cellArr[i+1].innerHTML
              let totalThree = cellArr[i+2].innerHTML
              let totalFour = cellArr[i+3].innerHTML
              let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
      
              let filteredRow = row.filter(num => num);
              let missing = 4 - filteredRow.length;
              let zeros = Array(missing).fill("");
              let newRow = zeros.concat(filteredRow)
      
              cellArr[i].innerHTML = newRow[0]
              cellArr[i +1].innerHTML = newRow[1]
              cellArr[i +2].innerHTML = newRow[2]
              cellArr[i +3].innerHTML = newRow[3]
            }
          }
    }
    
    var moveLeft = function(){
        for (let i=0; i < 16; i++) {
            if (i % 4 === 0) {
              let totalOne = cellArr[i].innerHTML
              let totalTwo = cellArr[i+1].innerHTML
              let totalThree = cellArr[i+2].innerHTML
              let totalFour = cellArr[i+3].innerHTML
              let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
      
              let filteredRow = row.filter(num => num)
              let missing = 4 - filteredRow.length
              let zeros = Array(missing).fill("");
              let newRow = filteredRow.concat(zeros)
      
              cellArr[i].innerHTML = newRow[0]
              cellArr[i +1].innerHTML = newRow[1]
              cellArr[i +2].innerHTML = newRow[2]
              cellArr[i +3].innerHTML = newRow[3]
            }
          
    }
    }
    
    var moveUp = function(){
        for (let i=0; i < 4; i++) {
            let totalOne = cellArr[i].innerHTML
            let totalTwo = cellArr[i+width].innerHTML
            let totalThree = cellArr[i+(width*2)].innerHTML
            let totalFour = cellArr[i+(width*3)].innerHTML
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
      
            let filteredColumn = column.filter(num => num)
            let missing = 4 - filteredColumn.length
            let zeros = Array(missing).fill("")
            let newColumn = filteredColumn.concat(zeros)
      
            cellArr[i].innerHTML = newColumn[0]
            cellArr[i +width].innerHTML = newColumn[1]
            cellArr[i+(width*2)].innerHTML = newColumn[2]
            cellArr[i+(width*3)].innerHTML = newColumn[3]
          }
    }
    
    var moveDown = function(){
        for(var i=0; i<4; i++){
            var totalOne = cellArr[i].innerHTML;
            var totalTwo = cellArr[i+width].innerHTML;
            var totalThree = cellArr[i+(width*2)].innerHTML;
            var totalFour = cellArr[i+(width*3)].innerHTML;
            
            var column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
    
            var filteredColumn = column.filter(function(num){
                return num;
            });
    
            var missing = 4 - filteredColumn.length;
            var zeros = Array(missing).fill("");
            var newColumn = zeros.concat(filteredColumn);
    
            cellArr[i].innerHTML = newColumn[0]
            cellArr[i +width].innerHTML = newColumn[1]
            cellArr[i +width*2].innerHTML = newColumn[2]
            cellArr[i +width*3].innerHTML = newColumn[3]
        }
    }
     var rowCombine = function(){
        for (let i =0; i < 15; i++) {
            if (cellArr[i].innerHTML != "" && cellArr[i].innerHTML === cellArr[i +1].innerHTML) {
              let combinedTotal = parseInt(cellArr[i].innerHTML) + parseInt(cellArr[i +1].innerHTML);
              cellArr[i].innerHTML = combinedTotal;
              cellArr[i +1].innerHTML = "";
              score += combinedTotal;
              scoreDisplay.innerHTML = score;
              console.log(score);
              //scoreDisplay.innerHTML = score
            }
          }
     }
    
     var columnCombine = function(){
        for (let i =0; i < 12; i++) {
            if (cellArr[i].innerHTML !="" && cellArr[i].innerHTML === cellArr[i +width].innerHTML) {
              let combinedTotal = parseInt(cellArr[i].innerHTML) + parseInt(cellArr[i +width].innerHTML);
              cellArr[i].innerHTML = combinedTotal;
              cellArr[i +width].innerHTML = "";
              score += combinedTotal;
              scoreDisplay.innerHTML = score;
              console.log(score);
              //score += combinedTotal
            }
        }
    }
    
    resetButton.addEventListener("click",reset);
});

function checkgame(){
    let zeros =0
    for(i=0;i<square[i];i++){
        if(square[i].innerHTML==0){
            zeros++
        }
        if(zeros==0){
            resultDisplay.innerHTML="you lose"
            document.removeEventListener('keyup',control)
        }
    }
}