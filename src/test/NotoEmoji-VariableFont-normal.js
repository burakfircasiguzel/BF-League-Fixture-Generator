﻿import { jsPDF } from "jspdf"
var callAddFont = function () {
this.addFileToVFS('NotoEmoji-VariableFont-normal.ttf', font);
this.addFont('NotoEmoji-VariableFont-normal.ttf', 'NotoEmoji-VariableFont', 'normal');
};
jsPDF.API.events.push(['addFonts', callAddFont])