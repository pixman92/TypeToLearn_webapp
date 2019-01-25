
window.onload = (()=>{
    //========================================
    // eventListeners for botton toolbar buttons
    
    document.getElementById('typing').addEventListener('click', ()=>{
        hide();
        show('typingPage');
        spitOut(0);
    });
    
    document.getElementById('adding').addEventListener('click', ()=>{
        hide();
        show('addCodePage');
    });
    
    document.getElementById('settingsButton').addEventListener('click', ()=>{
        hide();
        show('settingsPage');
    });




    
    //========================================
    // entering your UID
    document.getElementById('enterUID').addEventListener('click', ()=>{
        var tmp = document.getElementById("UIDEntered").value;
        retrieveCode(tmp.toString()).then(()=>{
            document.getElementById('codeMe').innerText = globalData[0];

        });
    });

    //========================================
    // add new Code
    // get your UID
    // display code, that will transfer over
    document.getElementById('saveCodeButton').addEventListener('click', ()=>{
        var tmp = document.getElementById('codeToSaveHere').value;
        pushCode(tmp).then(()=>{
            alert('Code Added!');
            document.getElementById('UID').innerText = UIDpassBack;
            document.getElementById('text').style.display='block';

        });
    })



});