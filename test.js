var json = JSON.parse(jsonAsText);
json = Object.values(json);
var csv = "";
var keys = (json[0] && Object.keys(json[0])) || [];
csv += keys.join(',') + '\n';

for (var line of json) {
    csv += keys.map(key => line[key]).join(',') + '\n';
  }

  var json = {
    "1": {
      "Nachname": "Stromberg",
      "Vorname": "Bernd",
      "Benutzername": "strombergbernd12",
      "Password": "Xrz5Bv6A"
    },
    "2": {
      "Nachname": "Heisterkamp",
      "Vorname": "Ernie",
      "Benutzername": "heisterkampernie12",
      "Password": "aOq24EpF"
    }
  }
  
  function toCSV(json) {
    json = Object.values(json);
    var csv = "";
    var keys = (json[0] && Object.keys(json[0])) || [];
    csv += keys.join(',') + '\n';
    for (var line of json) {
      csv += keys.map(key => line[key]).join(',') + '\n';
    }
    return csv;
  }
  
  console.log(toCSV(json));