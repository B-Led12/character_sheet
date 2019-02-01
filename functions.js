//Turns inputs on/off
function changeButton(){
    if(document.getElementById('edit').textContent == "Edit"){
        document.getElementById('edit').innerHTML = "Save";
        var inputs = document.getElementsByTagName("INPUT");
        for(i=0; i<inputs.length; i++){
            inputs[i].disabled = false;
        }
        var inputs = document.getElementsByTagName("textarea");
        for(i=0; i<inputs.length; i++){
            inputs[i].disabled = false;
        }
        var inputs = document.getElementsByClassName("add");
        for(i=0; i<inputs.length; i++){
            inputs[i].hidden = false;
        }
    }

    else if(document.getElementById('edit').textContent == "Save"){
        document.getElementById('edit').innerHTML = "Edit";
        var inputs = document.getElementsByTagName("INPUT");
        for(i=0; i<inputs.length; i++){
            if(inputs[i].id != "dmg"){
                inputs[i].disabled = true;
            }
        }
        var inputs = document.getElementsByTagName("textarea");
        for(i=0; i<inputs.length; i++){
            inputs[i].disabled = true;
        }
        var inputs = document.getElementsByClassName("add");
        for(i=0; i<inputs.length; i++){
            inputs[i].hidden = true;
        }
    }
}//end changeButton()


//Navigates tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "active";
}//end openTab()


//Sets HP
function health(){
    if(document.getElementById("maxHP").value == ""){
        document.getElementById("current").innerHTML = "";
        document.getElementById("max").innerHTML = "";
    }
    else{
        document.getElementById("current").innerHTML = document.getElementById("maxHP").value;
        document.getElementById("max").innerHTML = "/" + document.getElementById("maxHP").value;
    }

    document.getElementById("current").style.color = "lime";
    document.getElementById("max").style.color = "lime";
}//end health()


//Handles healing and damage
function changeHP(id){
    if(document.getElementById("dmg").value != "" && document.getElementById("maxHP").value != ""){
        var current = parseInt(document.getElementById("current").textContent);
        var change = parseInt(document.getElementById("dmg").value);
        var max = parseInt(document.getElementById("maxHP").value)

        if(id == "healButton"){
            var total = current + change;
            if(total > max){
                document.getElementById("current").innerHTML = max;
            }
            else{
                document.getElementById("current").innerHTML = total;
            }
            document.getElementById("dmg").value = "";

            if(total <= max/2 && total > max/4){
                document.getElementById("current").style.color = "orange";
                document.getElementById("max").style.color = "orange";
            }

            else if(total <= max/4){
                document.getElementById("current").style.color = "red";
                document.getElementById("max").style.color = "red";
            }

            else{
                document.getElementById("current").style.color = "lime";
                document.getElementById("max").style.color = "lime";
            }
        }

        else if(id == "dmgButton"){
            var total = current - change;
            if(total < 0){
                document.getElementById("current").innerHTML = 0;
            }
            else{
                document.getElementById("current").innerHTML = total;
            }
            document.getElementById("dmg").value = "";
        

            if(total <= max/2 && total > max/4){
                document.getElementById("current").style.color = "orange";
                document.getElementById("max").style.color = "orange";
            }

            else if(total <= max/4){
                document.getElementById("current").style.color = "red";
                document.getElementById("max").style.color = "red";
            }

            else{
                document.getElementById("current").style.color = "lime";
                document.getElementById("max").style.color = "lime";
            }
        }
    }
}//end changeHP()


//Add spell to spell list
function addSpell(id){
    var strHTML = [document.getElementById(id).innerHTML];
    strHTML.push("<div id='spellInfo'><div class='spellName'><input type='text' class='spName' placeholder='Spell Name'></div><div class='spellDescription'><textarea rows='7.5' cols='45' class ='spDescription' style='resize: none' placeholder='Spell Effect'></textarea></div></div>");
    document.getElementById(id).innerHTML = strHTML.join(" ");
}//end addSpell()


//Add weapon to weapon list
function addWeapon(){
    var strHTML = [document.getElementById("w").innerHTML];
    strHTML.push("<tr><td>Weapon:</td><td><input type='text' class='equip'></td><td>Damage:</td><td><input type='text' class='equip'></td></tr>");
    document.getElementById("w").innerHTML = strHTML.join(" ");
}//end addWeapon()


//Add item to item list
function addItem(id){
    var strHTML = [document.getElementById(id).innerHTML];
    strHTML.push("<div id='itemInfo'><div class='itemName'><input type='text' class='iName' placeholder='Item Name'></div><div class='itemDescription'><textarea rows='8' cols='68' class ='iDescription' style='resize: none' placeholder='Description'></textarea></div></div>");
    document.getElementById(id).innerHTML = strHTML.join(" ");
}//end addItem()


//Set save and mod 
function statBonuses(stat){
    if(stat == "str"){
        var score = parseInt(document.getElementById("str").value);
        if(isNaN(score)){
            document.getElementById("strMod").innerHTML = "";
            document.getElementById("strSave").innerHTML = "";
            var bonus = document.getElementsByClassName("str");
            for(i=0; i<bonus.length; i++){
                bonus[i].innerHTML = "";
            }
        }
       else{
            document.getElementById("strMod").innerHTML = Math.floor((score - 10)/2);
            document.getElementById("strSave").innerHTML = Math.floor((score - 10)/2);
            var bonus = document.getElementsByClassName("str");
            for(i=0; i<bonus.length; i++){
                bonus[i].innerHTML = document.getElementById("strMod").innerHTML;
            }
        }
    }

    else if(stat == "dex"){
        var score = parseInt(document.getElementById("dex").value);
        if(isNaN(score)){
            document.getElementById("dexMod").innerHTML = "";
            document.getElementById("dexSave").innerHTML = "";
            var bonus = document.getElementsByClassName("dex");
            for(i=0; i<bonus.length; i++){
                bonus[i].innerHTML = "";
            }
        }
        else{
            document.getElementById("dexMod").innerHTML = Math.floor((score - 10)/2);
            document.getElementById("dexSave").innerHTML = Math.floor((score - 10)/2);
            var bonus = document.getElementsByClassName("dex");
            for(i=0; i<bonus.length; i++){
                bonus[i].innerHTML = document.getElementById("dexMod").innerHTML;
            }
        }
    }

    else if(stat == "con"){
        var score = parseInt(document.getElementById("con").value);
        if(isNaN(score)){
            document.getElementById("conMod").innerHTML = "";
            document.getElementById("conSave").innerHTML = "";
        }
        else{
            document.getElementById("conMod").innerHTML = Math.floor((score - 10)/2);
            document.getElementById("conSave").innerHTML = Math.floor((score - 10)/2);
            
        }
    }

    else if(stat == "int"){
        var score = parseInt(document.getElementById("int").value);
        if(isNaN(score)){
            document.getElementById("intMod").innerHTML = "";
            document.getElementById("intSave").innerHTML = "";
            var bonus = document.getElementsByClassName("int");
            for(i=0; i<bonus.length; i++){
                bonus[i].innerHTML = "";
            }
        }
        else{
            document.getElementById("intMod").innerHTML = Math.floor((score - 10)/2);
            document.getElementById("intSave").innerHTML = Math.floor((score - 10)/2);
            var bonus = document.getElementsByClassName("int");
            for(i=0; i<bonus.length; i++){
                bonus[i].innerHTML = document.getElementById("intMod").innerHTML;
            }
        }
    }

    else if(stat == "wis"){
        var score = parseInt(document.getElementById("wis").value);
        if(isNaN(score)){
            document.getElementById("wisMod").innerHTML = "";
            document.getElementById("wisSave").innerHTML = "";
            var bonus = document.getElementsByClassName("wis");
            for(i=0; i<bonus.length; i++){
                bonus[i].innerHTML = "";
            }
        }
        else{
            document.getElementById("wisMod").innerHTML = Math.floor((score - 10)/2);
            document.getElementById("wisSave").innerHTML = Math.floor((score - 10)/2);
            var bonus = document.getElementsByClassName("wis");
            for(i=0; i<bonus.length; i++){
                bonus[i].innerHTML = document.getElementById("wisMod").innerHTML;
            }
        }
    }

    else if(stat == "cha"){
        var score = parseInt(document.getElementById("cha").value);
        if(isNaN(score)){
            document.getElementById("chaMod").innerHTML = "";
            document.getElementById("chaSave").innerHTML = "";
            var bonus = document.getElementsByClassName("cha");
            for(i=0; i<bonus.length; i++){
                bonus[i].innerHTML = "";
            }
        }
        else{
            document.getElementById("chaMod").innerHTML = Math.floor((score - 10)/2);
            document.getElementById("chaSave").innerHTML = Math.floor((score - 10)/2);
            var bonus = document.getElementsByClassName("cha");
            for(i=0; i<bonus.length; i++){
                bonus[i].innerHTML = document.getElementById("chaMod").innerHTML;
            }
        }
    }
}//end statBonuses()


//Add proficiency to skill
function proficient(){
    var checkBox = document.getElementsByTagName("input");
    for(i=0; i<checkBox.length; i++){
        if(checkBox[i].type == "checkbox"){
            var name = checkBox[i].name;
            var skillClass = document.getElementById(name).className;
            var mod = document.getElementById(skillClass + "Mod");
            var skillBonus = parseInt(document.getElementById(name).textContent);
            if(checkBox[i].checked && skillBonus == parseInt(mod.textContent)){
                var bonus = parseInt(document.getElementById(name).textContent) + parseInt(document.getElementById("prof").value);
                if(isNaN(bonus)){
                    return;
                }
                else{
                    document.getElementById(name).innerHTML = bonus;
                }
            }
            else if(!checkBox[i].checked && skillBonus > parseInt(mod.textContent)) {
                var bonus = parseInt(document.getElementById(name).textContent) - parseInt(document.getElementById("prof").value);
                if(isNaN(bonus)){
                    return;
                }
                else{
                    document.getElementById(name).innerHTML = bonus;
                }
            }
        }
    }
}//end proficient()