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

    return globalData[0];

}
var meCode;
function spitOut(lineIndex){
    meCode = globalData[0].split('\n')[lineIndex].trim();
    console.log('meCode', meCode);
    document.getElementById("code").innerText = meCode;
    if(meCode){
        document.getElementById('none').style.display = "none";
    }

    if(document.getElementById('input').innerText==meCode){
        console.log('correct!', );
        spitOut(lineIndex++);
    }

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

