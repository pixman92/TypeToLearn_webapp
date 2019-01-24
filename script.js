

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
        console.log('code', globalData[0]);
    }

    spitOut(lineIndex);
    makeColor(0);

    return globalData[0];

}
var meCode;
var lineIndex=0;
function spitOut(lineIndex){
    // function that 'spits' out a single line of the code, 
    // from the code base

    
    meCode = globalData[0].split('\n')[lineIndex].trim();
    if(meCode==""){
        lineIndex+=2;
        // spitOut(lineIndex);
        meCode = globalData[0].split('\n')[lineIndex].trim();
    }

    console.log('meCode', meCode);
    document.getElementById("code").innerText = meCode;
    // if(meCode){
    //     document.getElementById('none').style.display = "none";
    // }

    // if(document.getElementById('input').innerText==meCode){
    //     console.log('correct!', );
    //     spitOut(lineIndex++);
    // }
    // document.getElementById('startButton').addEventListener('onclick', makeColor(0));
    // makeColor(0)

    document.getElementById('area').addEventListener('input', ()=>{
        // document.getElementById('area').focus();
        makeColor(index);
        // console.log('changed!'); 


        if(savedLetter==testString){
            if(index>=meCode.length-1){
                // console.log(savedLetter + " is correct!" );
                console.log('lineIndex', lineIndex);
                lineIndex;
                index=0;
                spitOut(lineIndex);
        
            }else{
                ++index;
                makeColor(index);
            }
        }


    });

}

// async function compare() {
    
//     await pathLoop('code');
//     var len = strungArray.length;

//     for (var i = 0; i < len; i++) {
//         await pathLoop('code');
//         await pathLoop(strungArray[i]);
//         await general(strungArray[0]);
    
//     }
//     return new Promise((resolve)=>{
//         resolve(arrayOfVal[1]);
//         console.log('arrayOfVal', arrayOfVal);
//         console.log('true?', arrayOfVal[1]==newDate);
//     });
// }


var saved;
async function pullCode(index) {
    // await pathLoop('/code/'+type).then(()=>{
    //     pathLoop(strungArray[0]).then(()=>{
    //         pathLoop(strungArray[0]).then(()=>{
    //             // general(strungArray[0]+'/code');
    //             return new Promise((resolve)=>{
    //                 resolve(saved);
    //             });
    //         });
    //     });
    // });

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

//================================================
var testString = "";
var index = 0;
function makeColor(index){
    // function that changes 'single char' to BIG font


    var input = meCode;
    var tmpInput = document.getElementById('code');

    testString = input.substring(index, index+1);
    console.log('string is: ', testString);





    
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

    




    tmpInput.innerHTML = input.substring(0, index) + "<span class='big'>" + testString  + '</span>' + input.substring(index+1, input.length);

    
    
    isMoreChar();

}


var savedLetter = "";
function isMoreChar(){
    // function that determines if there is more than 1 char in input

    var val = document.getElementById('area').value;


    // logic statement: at either path, remove whole box of characters
    if(val.length>2){
        pullValue();
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