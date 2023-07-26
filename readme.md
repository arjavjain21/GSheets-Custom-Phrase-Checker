Features:
1. Custom Menu: Upon opening the Google Sheet, the script automatically creates a custom menu called "Custom Menu" with an option named "Title Checker.
2. Title Checker Dialog: When users select the "Title Checker" option from the custom menu, a dialog box called "Process Cells" appears. This dialog serves as the user interface for inputting required information.

Input: In the "Process Cells" dialog, users need to specify:
1. The target column letter where the phrases need to be checked.
2. A list of phrases (comma-separated) that the script will look for in the specified column.
3. The desired color to highlight cells that do not contain any of the specified phrases.
4. The desired action (highlight or delete) to be performed on the cells that do not contain any of the specified phrases.


Processing the Data:
1. If the user chooses the "highlight" action, the script checks each cell in the specified column against the provided phrases. If a cell does not contain any of the specified phrases (case-insensitive and whole word matches), it will be highlighted with the specified color.
2. If the user chooses the "delete" action, the script will delete the entire row of any cell that does not contain any of the specified phrases.

Usage:
1. Open your Google Sheet containing the data you want to process.
2. Click on the "Custom Menu" option in the menu bar and select "Title Checker."

In the "Process Cells" dialog, enter the necessary details:
1. Column Letter: Enter the column's letter you want to process.
2. Phrases: Enter a list of phrases (comma-separated) to search for in the specified column.
3. Color: Choose the color to highlight the cells that do not contain any of the specified phrases.
4. Action: Select "highlight" to highlight cells or "delete" to delete rows that do not contain any of the specified phrases.
5. Click the "Process" button to apply the selected action to the cells.

Important Notes:
1. This script is intended for Google Sheets and requires users to have edit access to the sheet for it to work correctly.
2. Before running the script, ensure that your Google Sheet is open and active to process the correct data.
3. The "Custom Menu" option will be available every time the sheet is opened, allowing for repeated usage.


Getting Started:
1. To use the "Custom Phrase Checker for Google Sheets" script, users need to follow these steps:
2. Open the Google Sheet where you want to apply the script.
3. Click on "Extensions" in the menu bar, then select "Apps Script."
4. A new script editor tab will open. Copy and paste the code from the Code.gs file in the script editor.
5. Save the script by clicking on the floppy disk icon or using the keyboard shortcut "Ctrl + S" (Windows) or "Command + S" (Mac).
6. Close the script editor and refresh your Google Sheet. A new "Custom Menu" option will appear in the menu bar.
7. To process cells, click on "Custom Menu" and select "Title Checker." A dialog box will appear, allowing you to input the required information.
8. Once you've entered the information, click "Process" to apply the selected action to the cells.


License:
This script is open-source and is provided under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

Support:
Feel free to create an issue in the repository if you encounter any issues or have questions regarding the script's usage. The maintainers and the community will be glad to assist you.
