export function formatTime(str){
    var parts = str.slice(0, -1).split('T');
    var dateComponent = parts[0];
    var timeComponent = parts[1].slice(0, 5)
    var formattedStr = dateComponent + " at " + timeComponent;
    // l("formatted: ", formattedStr);
    return formattedStr;
  };
