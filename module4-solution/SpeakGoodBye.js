(function (window){
	var speakWord = "Good Bye";
	var byeSpeaker = {};

	byeSpeaker.sayBye = function (name) {
	  console.log(speakWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker;

})(window)

