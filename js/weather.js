/**********************************************************************
* IMPORTANT:                                                          *
* In order to use this code should include it AFTER your code.        *
* Your code must define the weather URL (Ex: var wURL ) and a parsing *
* function (Ex: function parseData(data){} ) in your code.            *
***********************************************************************/


// This is an example of static data hand copied into your file.
// It works in conjunction with the demo code below

var exampleData = {  
  // key : value
   "coord":{  
      "lon":-73.89,
      "lat":40.68
   },
   "weather":[  
      {  
         "id":801,
         "main":"Clouds",
         "description":"few clouds",
         "icon":"02d"
      }
   ],
   "base":"cmc stations",
   "main":{  
      "temp":45.25,
      "pressure":1030,
      "humidity":52,
      "temp_min":42.8,
      "temp_max":46.4
   },
   "wind":{  
      "speed":9.94,
      "deg":310
   },
   "clouds":{  
      "all":20
   },
   "dt":1449238500,
   "sys":{  
      "type":1,
      "id":2120,
      "message":0.0045,
      "country":"US",
      "sunrise":1449230605,
      "sunset":1449264498
   },
   "id":5112738,
   "name":"City Line",
   "cod":200
};

// Demo code.
// This will parse values and put them in the console window
// It also provides additional if and for examples beyond 
// the in-class examples.

function jsonDemo() {
    console.log( exampleData.sys.country );
    console.log( exampleData.wind.speed );
    console.log( exampleData.main.humidity );
    for (var e in exampleData.main) {      // print out all values
      console.log( exampleData.main[e] );  // you must use brackets an not dot notation for vars in for statements
    }
    var num = parseInt( exampleData.coord.lon );
    if ( num < -72) {
      console.log("The longitude is lower than -72.");
    }
};


/********************************************
*********************************************
*  Before this will function you need to    *
*  create a parseData function in your .js  *
*  file and set the wURL you will use!      *
*********************************************
********************************************/

function getJSON() {
  // Get JSON data from weather underground and
  // hand it off to your bespoke function for 
  // processing.  
  $.get( wURL, function( data ) { // Using .get instead of .ajax as it has saner default vals
      parseData(data);           // <-  This is your function.  You need to write it!
  }, "json" )
  
  .fail(function() {
    console.log( "Something went wrong with your request :(  Check that you\'re using the correct API key (your App ID)" );
  })
  
  .always(function() {
    console.log( "Finished getting JSON data" );
  });
}

// wait until the entire page has loaded
$(document).ready(function() {

  jsonDemo();  // check your console for the values being printed out!

  try{ wURL; }  // make sure the var is set
  catch(e) {
    if(e.name == "ReferenceError") {
      console.log( "You did not set a value for the weather URL (wURL) in your code!" );
      return;
    }
  }
  
  try{ parseData; }  // make sure the func exists
  catch(e) {
    if(e.name == "ReferenceError") {
      console.log( "You did not create \"function parseData(data) {}\" in your code!" );
      return;
    }
  }

  getJSON();
  
}); // document.ready
