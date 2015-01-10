
var Person = function (showFunction) {

  var description = "My name is Lee";

  showFunction(description);
};


var showAll = function (data) {
  console.log(data);
};

var showName = function (data) {

  var dataArray = data.split(' ');

  console.log(dataArray[3]);
}

Person(showAll);

Person(showName);
