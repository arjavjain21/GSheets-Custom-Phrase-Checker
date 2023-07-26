function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Menu')
      .addItem('Title Checker', 'processCells')
      .addToUi();
}

function processCells() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var ui = SpreadsheetApp.getUi();

  var html = HtmlService.createHtmlOutputFromFile('Dialog')
      .setWidth(400)
      .setHeight(300);
  SpreadsheetApp.getUi().showModalDialog(html, 'Process Cells');
}

function processForm(form) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var columnLetter = form.column;
  var column = sheet.getRange(columnLetter + '2:' + columnLetter);
  var phrases = form.phrases.split(',').map(function(phrase) { return phrase.trim(); });
  var color = form.color;
  var action = form.action;

  if (action === 'highlight') {
    var values = column.getValues();
    for (var i = 0; i < values.length; i++) {
      var cellValue = values[i][0].toString().toLowerCase();
      var cellContainsPhrase = false;
      for (var j = 0; j < phrases.length; j++) {
        var phrase = phrases[j].toLowerCase();
        var regex = new RegExp('\\b' + phrase + '\\b');
        if (regex.test(cellValue)) {
          cellContainsPhrase = true;
          break;
        }
      }
      if (!cellContainsPhrase && cellValue !== '') {
        sheet.getRange(columnLetter + (i + 2)).setBackground(color);
      }
    }
  } else if (action === 'delete') {
    var rowsToDelete = [];
    var values = column.getValues();
    for (var i = values.length - 1; i >= 0; i--) {
      var cellValue = values[i][0].toString().toLowerCase();
      var cellContainsPhrase = false;
      for (var j = 0; j < phrases.length; j++) {
        var phrase = phrases[j].toLowerCase();
        var regex = new RegExp('\\b' + phrase + '\\b');
        if (regex.test(cellValue)) {
          cellContainsPhrase = true;
          break;
        }
      }
      if (!cellContainsPhrase) {
        sheet.deleteRow(i + 2);
      }
    }
  }
}
