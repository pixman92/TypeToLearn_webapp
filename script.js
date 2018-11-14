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
async function spitOut(lineIndex){
    //function that spits out code
    //one line at a time
    
    if(lineIndex>=globalData[0].split('\n').length){
      alert("All done!");
      spitOut(0);
    }else{
        //take in globalData
        //while index is less than remaining strings
      if(globalData[0].search(/\n/)>=1 && lineIndex<globalData[0].split('\n').length){
        meCode = globalData[0].split('\n')[lineIndex].trim();
        // meCode.slice(0, meCode.length-1);
        if(meCode.length>0){
          console.log('true', meCode);
        }
        if(meCode==""){
            meCode = "\"\"";
        }
        document.getElementById("code").innerText = meCode;
      }else{
        // meCode = globalData[0]
        console.log('meCode', meCode);
     
        if(document.getElementById('input').innerText==meCode){
            console.log('correct!');
            spitOut(lineIndex++);
        }
        
    }
}
    


}
var textAreaVal="";
var index = 0;
function compare(){
  textAreaVal = document.getElementById('input').value;
  if(textAreaVal.charAt(textAreaVal.length-1)=='\n'){
      textAreaVal = textAreaVal.slice(0, textAreaVal.length-1);

  }
  

  
  
  
  if(textAreaVal=="skip" || textAreaVal=="Skip"){
    console.log('2nd')
    index++;
    spitOut(index);
    alert('skipped!');
    document.getElementById('input').value = "";
  }else{
    if(meCode==textAreaVal){
      console.log('1st');
      index++;
      spitOut(index);
      document.getElementById('input').value = "";
      
      
    }else{
      alert("Not quite there!");
      document.getElementById('input').value = "";
      
    }
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

