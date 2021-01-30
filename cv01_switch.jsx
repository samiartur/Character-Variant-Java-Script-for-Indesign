// This script  was created by Sami A. Mandelbaum - Samtype Foundry - sami@samtype.com.br

if( app.selection.length ) // do we have a selection?

if( app.selection[0].hasOwnProperty("opentypeFeatures") )

if( app.selection[0].opentypeFeatures.toSource()=="[[\"cv01\", 1]]" )

    app.selection[0].opentypeFeatures = []; // reset to nothing

else

   app.selection[0].opentypeFeatures=[["cv01",1]]; // set them!


// app.selection[0].opentypeFeatures=[["cv"+("00"+prompt("character variant","01")).slice(-2),1]];

// if( app.selection[0].opentypeFeatures.toSource()=="[[\"cv01\", 1]]" )