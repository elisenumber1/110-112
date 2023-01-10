Webcam.set({
	width:350,
	height:300,
	image_format:'png',
	png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
	Webcam.snap(function(data_uri){
		document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">;'
	});
}
console.log('ml5.version-',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xQRttb4CE/model.json",modelloaded);
function modelloaded(){
	console.log("model is loaded");
}
var prediction_1="";
function speak(){
	var synth=window.speechSynthesis;
	speak_data_1="The First Prediction is:"+prediction_1;
	var utterthis=new SpeechSynthesisUtterance(speak_data_1);
	synth.speak(utterthis);
}
function check(){
	img=document.getElementById("capture_image");
	classifier.classify(img,gotresult);
}
function gotresult(error,results){
	if(error){
		console.error(error);
	}else{
		console.log(results);
		document.getElementById("result_emotion_name").innerHTML=results[0].label;
		prediciton_1=results[0].label;
		speak();
		if(results[0].label=="amazing"){
			document.getElementById("update_emoji").innerHTML="&#128076;";
		}
		if(results[0].label=="best"){
			document.getElementById("update_emoji").innerHTML="&#128077;";
		}
		if(results[0].label=="victory"){
			document.getElementById("update_emoji").innerHTML="&#9996;";
		}
		
	}
}
