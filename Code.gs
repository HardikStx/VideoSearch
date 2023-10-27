function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('YouTube Video Search');
}

function searchVideos(searchTag) {
  var ss = SpreadsheetApp.openById('1c4QzmHB18k_ryGny_fgT3Dgq_8UeG3TLWOUv-sCpDz4');
  var sheet = ss.getSheetByName('Youtube Tagwise Links');
  
  // Convert the searchTag to lowercase for a case-insensitive search
  searchTag = searchTag.toLowerCase();
  
  var data = sheet.getRange("A1:B").getValues();
  var searchResult = "No Videos Found"; // Default value

  for (var i = 1; i < data.length; i++) { // Start from the second row (assuming headers in the first row)
    var tags = data[i][0].toString().toLowerCase();
    if (tags.includes(searchTag.toLowerCase())) {
      searchResult = data[i][1]; // Set searchResult to the video URL
      break; // Exit the loop when a match is found
    }
  }

  return searchResult;
}
