function doGet(e) {
try { 
    var html = HtmlService.createTemplateFromFile('feedback');
    return html.evaluate().setTitle('OPI Feedback');
  https://www.codot.gov/++theme++cdot.theme/favicon.ico
  var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
  output.setFaviconUrl('http://www.example.com/image.png');
  }catch(e){
    Logger.log(e,toString());
  }
};

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
//  .setFaviconUrl('http://www.example.com/image.png')
}

function feedbackSubmit(didYouFind, improvementFeedback, webpage, lookingFor, date) {
  var ss = SpreadsheetApp.openById('----------------');
  var sheet = ss.getSheetByName("feedback"); 
  var last_row = sheet.getLastRow();

//  if(didYouFind != "Did you find button: UNCHECKED"){  
  try{
    

    //getRange(row, col, #rows, #cols)
    var range = sheet.getRange(last_row + 1, 1, 1, 5);
    
    var feedbackData = [didYouFind, improvementFeedback, webpage, lookingFor, date]
    Logger.log("feedback Data: " + didYouFind + improvementFeedback + webpage + lookingFor + date);
    var bodyFeedbackData = "<p> <b> Did you find what you were looking for: </b>" + didYouFind + "</p>" + "<p><b> Improvement Feedback: </b>" + improvementFeedback + "</p>"
    + "<p> <b> Submitted From Webpage: </b> " + webpage + "</p>" + "<p> <b> What were you looking for: </b>" + lookingFor + "</p>" + "<p> <b> Date Submitted: </b>" + date + "</p>";

    //      Logger.log(lastInternRange.getValues());
      range.setValues([feedbackData]);
    
    var file = DriveApp.getFileById('-------------------------------------');
    var toRecipients = "aaaa.bbbbb@ccccc" + "," + "---------------" + "," + "---------------------";
    var body = " See responses here: (also attached and in-lined) https://docs.google.com/spreadsheets/d/----------------------------/edit#gid=0"
    + "<p> </p>"
    + " Feedback Response: " + bodyFeedbackData
    MailApp.sendEmail({
      to: toRecipients,
//      to: "--------------", //testing
      subject: "Feedback Submitted",
      htmlBody: body,
      attachments: [file],
      replyTo: toRecipients
    });
    
  }catch(e){
    var error = e.toString();
    return error;
    
  } 
//  } 
}




