//The Javascript file for the 5103 Pet Project Assignment
//Completed by Jalaluddin Qureshi, Humber College, Dec 11/2020.

//alert("1 - connected");

window.onload = pageReady;


function pageReady(){
    
    //the total number of exercises we use for the minimum viable product application.
    const totExercises = 6;
    
    //this array stores the total number of sets for each of the 'totExercises' exercise.
    var exTotal = [];
    
    //initializaion of the array.
    for (var i=0; i<totExercises; i++) {
        exTotal[i]=0;
    }
    
    //array to store the name of the exercises.
    var exNames = ["Weighted Step-up", "Renegade Row", "Clean and Jerk", "Biceps Curl", "Farmer's Walk", "Shoulder Press"];
    
    //used to "temporarily" store the name of the element id in the html.
    //this value is then passed as document.getElementById(exImageName)
    var exImageName; 
    
    document.getElementById("list").style.display = "none"; 
    
    //used to record the time, when the user started recording exercises.
    var startCounter = true;
    
    //Fetch all the HTML elements using JS DOM
    var dateTodayElement = document.getElementById("todayDate");
    var motivatonImage = document.getElementById("random-motivation");
    var startButton = document.getElementById("startButton");
    var refreshButton = document.getElementById("refreshButton");
    var exeriseButton = document.getElementById("exeriseButton");
    var firstDay = document.getElementById("firstDay");
    
    
    var now = new Date(); //fetches the current time and date.
    
    //to get the full time use the toString() function.
    //for only the date use toDateString() function.
    dateTodayElement.innerHTML = now.toDateString();
    
    //loads the motivational picture at the start.
    loadpicture();
    
    //LISTENERS - after listening for an activity relevant functions would be called.
    //this will load information about the list of exercise.
    startButton.onclick = loadExercise; 
    refreshButton.onclick = refresh;
    
    //this function loads the list of exercises.
    function loadExercise() {
        
        //reloads a different picture each time the user clicks on start.
        loadpicture();
        
        document.getElementById("welcome").style.display = "none"; 
        document.getElementById("list").style.display = "block"; 
        
        //Records the first time the user clicks on the start button.
        //Date format is MM/DD, HH:MM.
        if (startCounter==true) {
            var hours = now.getHours();
            var minutes = now.getMinutes();
            
            // if the values are single digit then we append zero at the head.
            if (hours<10) {
                hours = "0" + hours;
            }
            if (minutes<10) {
                minutes = "0" + minutes;
            }
            
            firstDay.innerHTML = "since " + (now.getMonth()+1) + "/" + 
                                now.getDate() + ", " + hours + ":" + minutes + ".";
            startCounter=false;
        }
        
        var displayInput = [];
        
        for (var i=0; i<totExercises; i++) {
            exImageName = "ex" + (i+1) + "-input";
            document.getElementById(exImageName).style.display = "none";
            
            exImageName = "ex" + (i+1);
            displayInput[i] = document.getElementById(exImageName);
            
        }

        displayInput[0].onclick =expandInput1;
        displayInput[1].onclick =expandInput2;
        displayInput[2].onclick =expandInput3;
        displayInput[3].onclick =expandInput4;
        displayInput[4].onclick =expandInput5;
        displayInput[5].onclick =expandInput6;
        
        //once the user has selected all the exercise, the user can submit to be saved.
        exeriseButton.onclick = saveRecord;
             
    }

    //selects a random picture number to be displayed.
    //there are 5 motivational pictures in the images folder.
    function loadpicture() {
        var picNum = Math.floor(Math.random() * 5)+1;
        motivatonImage.src="images/" + picNum + ".jpg";
    }

    
    function expandInput1() {
        document.getElementById("ex1-input").style.display = "block";
        document.getElementById("ex1").style.border = "4px dotted green";
    }
    
    function expandInput2() {
        document.getElementById("ex2-input").style.display = "block";
        document.getElementById("ex2").style.border = "4px dotted green";
    }
    
    function expandInput3() {
        document.getElementById("ex3-input").style.display = "block";
        document.getElementById("ex3").style.border = "4px dotted green";
    }
    
    function expandInput4() {
        document.getElementById("ex4-input").style.display = "block";
        document.getElementById("ex4").style.border = "4px dotted green";
    }
    
    function expandInput5() {
        document.getElementById("ex5-input").style.display = "block";
        document.getElementById("ex5").style.border = "4px dotted green";
    }
    
    function expandInput6() {
        document.getElementById("ex6-input").style.display = "block";
        document.getElementById("ex6").style.border = "4px dotted green";
    }
    
    
    function saveRecord() {
        
        document.getElementById("welcome").style.display = "block";
        document.getElementById("list").style.display = "none";
        
        for (var i=0; i<totExercises; i++) {
            
            exImageName = "ex" + (i+1) + "-input";
            
            //add only if the fetched value is non-zero, otherwise will add to a junk value.
            if (document.getElementById(exImageName).value) {
                exTotal[i] += parseInt(document.getElementById(exImageName).value);
            }
            
            //refresh the data input box.
            document.getElementById(exImageName).value =0;
            
            exImageName = "ex" + (i+1);
            document.getElementById(exImageName).style.border = "none";
            
            //hide the message that the user has not performed any exercise.
            //and displays those exercises which have a non-zero value.
            if (exTotal[i]>0) {
                document.getElementById("noexercise").style.display = "none";
                exImageName = "ex" + (i+1) + "Count";
                document.getElementById(exImageName).innerHTML = exNames[i] + ": " + exTotal[i];
            }
        }
        
    }

    //this function clears all the historical data.
    function refresh() {
        window.location.reload();
    }
    
    
}