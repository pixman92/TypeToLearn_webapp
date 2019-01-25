// Functions:
// retrieveCode(passed)
// spitout(line)
// makeColor()
// areSame()




db = firebase.database();

// let newDate;
var dataMe, UIDpassBack;
async function pushCode(codePassed){
    // pushes code to database
    // gets UID of parent node
    newDate = new Date();
    let ref = db.ref('/code/').push({
            codePassed,
            date: newDate.toString(),

    });
    ref.on('child_added', ((data)=>{
        console.log('data', data);
        dataMe=data;
        UIDpassBack = dataMe.ref.path.pieces_[1];
    }));
    // await compare();
    return new Promise((resolve)=>{
        resolve(UIDpassBack);
    })
}
//========================================

async function retrieveCode(passed) {
    //takes in UID
    //supposed to spit out code to be compared
    //
    await general('/code/'+passed);
    if(globalData[0]==undefined){
        alert("Sorry, not a valid UID");
    }else{
        // console.log('code', globalData[0]);
    }


    spitOut(0);

    return globalData[0];

}
var meCode = [];
var lineIndex=0;
var codeChar = "";
function spitOut(lineIndex){
    // function that 'spits' out a single line of the code, 
    // from the code base

    
    // meCode = globalData[0].split('\n')[lineIndex].trim();

    for (let i = 0; i < globalData[0].split('\n').length; i++){
        meCode[i] = globalData[0].split('\n')[i].trim();
    }

    if(meCode[lineIndex] == "" || meCode[lineIndex] == " " ){
        console.log('skipped');
        ++lineIndex;
    }


    document.getElementById("code").innerText = meCode[lineIndex];

    // if(document.getElementById('input').innerText==meCode){
    //     console.log('correct!', );
    //     spitOut(lineIndex++);
    // }
    // document.getElementById('startButton').addEventListener('onclick', makeColor(0));
    // makeColor(0)

    document.getElementById('area').addEventListener('input', ()=>{
        // document.getElementById('area').focus();

        makeColor(index);
        // isMoreChar();
        console.log('changed!'); 
    });

}

//================================================
var testString = "";
var index = 0;
function makeColor(index){
    // function that changes 'single char' to BIG font
    
    
    // isMoreChar();    //needed here??
    
    endGame();

    
    
    
    
    codeChar = meCode[lineIndex].substring(index, index+1);

    console.log('codeChar', codeChar);
    
    // var input = meCode[lineIndex];
    // var testString = codeChar;
    var tmpInput = document.getElementById('code');
    
    var input = meCode[lineIndex];

    console.log('string to compare is: ', savedLetter);

    
    
    
    
    
    // document.onkeydown = function(evt) {
        //     evt = evt || window.event;
        //     // var isEscape = false;
        //     if ("key" in evt) {
            //         console.log(`${evt.key}`);
    //         if(evt.key == testString){
        //             console.log(evt.key + " is correct!" );
        //             if(index>=meCode.length-1){
            
            //                 ++lineIndex;
    //                 spitOut(lineIndex);
    //                 // console.log('spitout ran', lineIndex);
    //                 // makeColor(0);
    //             }else{
        //                 index++;
        //                 makeColor(index);
        //             }
        //             console.log('index', index);
    //         }
    //     }
    
    // }
    tmpInput.innerHTML = input.substring(0, index) + "<span class='big'>" + codeChar  + '</span>' + input.substring(index+1, input.length);


    areSame();
}
//================================================

function areSame(){
    isMoreChar();
    console.log({savedLetter, codeChar});
    
    

    if(savedLetter==codeChar){
        console.log('====\nSAME');
        if(index>=meCode[lineIndex].length-1){
            console.log("it's True" );
            console.log('lineIndex', lineIndex);
            ++lineIndex;
            index=0;
            spitOut(lineIndex);
            
        }else{
            index++;
            makeColor(index);
        }
    }
    
}

//================================================
function endGame(){
    if(lineIndex>=meCode.length){
        // alert("Finished!");
        document.getElementById('code').innerHTML = "FINISHED";
        // lineIndex=0;
        meCode=['FINISHED'];
        isMoreChar();
    }
}





//================================================
var savedLetter = "";
function isMoreChar(){
    // function that determines if there is more than 1 char in input

    var val = document.getElementById('area').value;


    // logic statement: at either path, remove whole box of characters
    if(val.length>=1){
        pullValue();
        console.log('true' );
        return true;
    }else{
        pullValue();
        return false;
    }
}

function pullValue(){
    tmp = document.getElementById('area').value;
    savedLetter = tmp.substring(0,1);
    console.log('savedLetter', savedLetter);
    document.getElementById('area').value = "";
}



//================================================
    var saved;
async function pullCode(index) {
    
    await pathLoop('/code/');
    await pathLoop(strungArray[index]);
    // await pathLoop(strungArray[0]);
    
    return new Promise((resolve)=>{
        saved=arrayOfVal;
        resolve(saved);
        console.log('============');
        console.log('printed', saved);
    });
    
}