// This is the variable for the temp in NYC.
    var temp_nyc;
    var clouds;
    var weather;
    var precipitation_nyc;
    var wind_nyc;
    var time_nyc;
    var sunphase_nyc;
    var sunset_nyc;
    var clock_nyc;
    
   

   





wURL="http://api.wunderground.com/api/8048a99112d0bd74/conditions/q/NY/New_York_City.json";
	function parseData(data){

	//alert("Success");
	//SecondCall();

	$( "div#txtDiv" ).html(data["current_observation"]["temp_f"] + " " + data["current_observation"]["weather"] + " Rain Amount: " + data["current_observation"]["precip_today_in"] + " Wind: " + data["current_observation"]["wind_mph"]);
   
    var myVar = parseInt(data["current_observation"]["temp_f"]);
    if (myVar > 30){
    	console.log("its cold outside!");
    }

   $( "img#emptyImg" ).attr("src", data["current_observation"]["icon_url"]);

  	  	// parseInt takes a word and tries to turn it into a number or integer. No decimals. Everything that comes from the website is a word even though it's a number. ParseInt tries to convert it into a number.
  	  	temp_nyc = parseInt(data["current_observation"]["temp_f"]);

  	  	clouds = data["current_observation"]["weather"];

  	  	precipitation_nyc = data["current_observation"]["precip_today_in"];

        wind_nyc = data["current_observation"]["wind_mph"];


      

        


	    var song = document.getElementById("theHeat"); 
	    var song2 = document.getElementById("theIce");
	    var song3 = document.getElementById("theWind");
	    var song4 = document.getElementById("theWarmth");
	    var song5 = document.getElementById("theRain");



        if (wind_nyc >= 1.00) {
          $("#rainman").hide();
          $("#warmclyde").hide();
          $("#coldclyde").hide();
          $("#hotclyde").hide();
          $("#fire").hide();
          $("#windclyde").show();
          $("#rainman_wind").show();
          $(".waves").show();
          $("#windyfishy").show();
          $("#rainyfishy").hide();
          $("#clouds").hide();
          $("#cloudstwo").hide();
          $("#cloudsthree").hide();
          $("#windclouds").show();
          $("#windcloudstwo").show();
          $("#windcloudsthree").show();
          pauseSong();
          pauseSong2();
          playSong3();
          pauseSong4();
          pauseSong5();
  	  	} else if (temp_nyc >= 75) {
  	  		$("#hotclyde").show();
          $("#fire").show();
          $("#hotfishy").show();
  	  		$("#coldclyde").hide();
  	  		$("#rainmain").hide();
  	  		$("#warmclyde").hide();
          playSong();
          pauseSong2();
          pauseSong3();
          pauseSong4();
          pauseSong5();
          $("#snow").hide();
          $(".waves").show();
          $(".sun").show();
  	  	} else if (temp_nyc < 75 && temp_nyc > 50){
  	  		$("#hotclyde").hide();
  	  		$("#warmclyde").show();
  	  		$("#coldclyde").hide();
          $("#hotfishy").show();
  	  		$("#rainman").hide();
          $("#fire").hide();
          $(".sun").show();
          $("#snow").hide();
          $(".waves").show();
          pauseSong();
          pauseSong2();
          pauseSong3();
          playSong4();
          pauseSong5();
  	  	} else if (temp_nyc < 50 && temp_nyc > -50){
          $("#hotclyde").hide();
          $("#warmclyde").hide();
          $("#coldclyde").show();
          $("#rainman").hide();
          $("#hotfishy").hide();
          $("#coldfishy").show();
          $("#fire").hide();
          $(".home").hide();
          $(".hometwo").show();
          $(".waves").hide();
          $("#snow").show();
          $(".sun").hide();
          pauseSong();
          playSong2();
          pauseSong3();
          pauseSong4();
          pauseSong5();

        }

  // <!-- nelly, chillydown, ludacris, db and humble. -->

        // The Cloud shows if it's mostly cloudy.
  	  	if (clouds == "Overcast" || "Mostly Cloudy") {
          if (wind_nyc < 1) {
    	  		$("#clouds").show();
            $("#cloudstwo").show();
            $("#cloudsthree").show();
            $("#sun").hide();
          }     
        } else {
          $("#clouds").hide();
          $("#cloudstwo").hide();
          $("#cloudsthree").hide();
          $("#sun").show();
        }

        // When it's windy, Clyde bends.

        // if (wind_nyc >= 1.00) {
        //   $("#rainman").hide();
        //   $("#warmclyde").hide();
        //   $("#coldclyde").hide();
        //   $("#hotclyde").hide();
        //   $("#fire").hide();
        //   $("#windclyde").show();
        //   $("#rainman_wind").show();
        //   $(".waves").show();
        //   $("#windyfishy").show();
        //   $("#rainyfishy").hide();
        //   $("#snow").hide();
        //   pauseSong3();
        //   pauseSong();
        //   playSong5();
        //   pauseSong();
        //   pauseSong2();
        //   $("#clouds").hide();
        //   $("#cloudstwo").hide();
        //   $("#cloudsthree").hide();
        //   $("#windclouds").show();
        //   $("#windcloudstwo").show();
        //   $("#windcloudsthree").show();
        // } else {
        //   $("#rainman").hide();
        //   $("#warmclyde").show();
        //   $("#coldclyde").hide();
        //   $("#hotclyde").hide();
        //   $("#fire").hide();
        //   $("#windclyde").hide();
        //   $("#rainman_wind").hide();
        //   $(".waves").hide();
        //   $("#windyfishy").hide();
        //   $("#snow").hide();
        //   $("#windclouds").hide();
        //   $("#windcloudstwo").hide();
        //   $("#windcloudsthree").hide();
        //   pauseSong3();
        //   pauseSong5();
        //   pauseSong();
        //   pauseSong2();
        // }
  	  	

  	  	// rain will appear if there is a certain number of precipitaiton

  	  	if (precipitation_nyc >= 1.00) {
  	  		$("#rainman").show();
          $("#rainyfishy").show();
          $("#coldfishy").hide();
          $("#windyfishy").hide();
          $("#hotfishy").hide();
          $("#hotclyde").hide();
          $("#fire").hide();
          $("#snow").hide();
          pauseSong();
          pauseSong2();
          pauseSong3();
          pauseSong4();
          playSong5();
  	  	} else {
  	  		$("#rainman").hide();
          $("#rainyfishy").hide();
  	  	}

	      
	

	// This lets the user control the temperature. So, if it's 50 or below Clyde will be cold. Which mean he turns pink.

	$("#txt_temp").on( "blur", function() {
    // Music plays and stops depending on the temperature.

     
  		var text=$("#txt_temp").val(); 
  		var number = parseInt(text);
  		if(number >= 75){ 
          playSong();
          pauseSong2();
          pauseSong3();
          pauseSong4();
          pauseSong5();
          $("#hotclyde").show();
          $("#coldclyde").hide();
          $("#rainmain").hide();
          $("#warmclyde").hide();
          $("#fire").show();
          $(".sun").show();
          $("#hotfishy").show();
          $("#coldfishy").hide();
          $("#windclyde").hide();
          $("#windyfishy").hide();
          $("#rainyfishy").hide();
          $("#two").hide();
          $(".home").show();
          $("#snow").hide();
          $(".hometwo").hide();

        } else if (number < 75 && number > 50){
          pauseSong();
          pauseSong2();
          pauseSong3();
          playSong4();
          pauseSong5();
          $("#hotclyde").hide();
          $("#warmclyde").show();
          $("#coldclyde").hide();
          $("#coldfishy").hide();
          $("#rainman").hide();
          $("#fire").hide();
          $(".sun").show();
          $("#hotfishy").show();
          $("#windclyde").hide();
          $("#windyfishy").hide();
          $("#rainyfishy").hide();
          $("#two").hide();
          $(".home").show();
          $(".hometwo").hide();
          $("#snow").hide();
          $(".waves").show();
        } else if (number < 50 && number > -50){
          pauseSong();
          playSong2();
          pauseSong3();
          pauseSong4();
          pauseSong5();
          $("#hotclyde").hide();
          $("#warmclyde").hide();
          $("#coldclyde").show();
          $("#rainman").hide();
          $("#fire").hide();
          $(".sun").hide();
          $("#coldfishy").show();
          $("#hotfishy").hide();
          $("#windclyde").hide();
          $("#windyfishy").hide();
          $("#rainyfishy").hide();
          $(".home").hide();
          $(".hometwo").show();
          $("#two").show();
          $("#snow").show();
          $(".waves").hide();

        }
   

  	  });
        // Music plays and stops depending on the temperature.

     // This is for the first song. The song that's hot.
        function playSong() { 
            song.play(); 
        } 

        function pauseSong() { 
            song.pause(); 
        }

        function playSong2() { 
            song2.play(); 
        } 

        function pauseSong2() { 
            song2.pause(); 
        }

         function playSong3() { 
            song3.play(); 
        } 

        function pauseSong3() { 
            song3.pause(); 
        }

         function playSong4() { 
            song4.play(); 
        } 

        function pauseSong4() { 
            song4.pause(); 
        }

        function playSong5() { 
            song5.play(); 
        } 

        function pauseSong5() { 
            song5.pause(); 
        }

    SecondCall();
// // });



}

function SecondCall(){
	wURL="http://api.wunderground.com/api/8048a99112d0bd74/forecast/q/NY/New_York_City.json";
	parseData = function(data){
		console.log("in second parse data");
    ThirdCall();
	}
	getJSON();
  
}

function ThirdCall(){
  
  wURL="http://api.wunderground.com/api/8048a99112d0bd74/astronomy/q/New_York_City.json";
  parseData = function(data){
    console.log("in third parse data");
    sunphase_nyc = parseInt(data["sun_phase"]["sunrise"]["hour"]);
    sunset_nyc = parseInt(data["sun_phase"]["sunset"]["hour"]);

      

    

  }
  getJSON();
  setInterval(clockFunction(), 1000 * 60 * 60);


}

function clockFunction() {
    var d = new Date();
    var h = d.getHours();
    clock_nyc = h;
    console.log("Time:" + " " + h);

    // if (clock_nyc >= 6 && clock_nyc <= 8) {
    //   $("#hotfishy").show();
    //   $("#coldclyde").hide();

    // }
}

  // setInterval(clockFunction(), 1000 * 60 * 60);




// data.moon_phase.sunrise.hour
// "5"
// data.moon_phase.sunset.hour
// "19"
// data.moon_phase.percentIlluminated
// "77"
// wind_nyc = data["current_observation"]["wind_mph"];






	


