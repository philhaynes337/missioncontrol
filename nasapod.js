'use strict';


var temp 


function loadPicOfDay(urlString) {

let cd = new Date();
	cd.setDate(cd.getDate() - 1);

	let year = cd.getFullYear();
	let month = cd.getMonth() + 1;
	let day = cd.getDate();

	let convertedDate = year + '-' + month  + '-' + day;

	let apiCorrectDateUrl = 'https://api.nasa.gov/planetary/apod?date='+ convertedDate +'&api_key=OJv7MhWfhxFe00mIV6Z6UkRJMflDM0GU7JGQigPu';




	
	fetch(apiCorrectDateUrl)
		.then(response => {
			if (response.ok) {
				
				

				return response.json();
			}
			throw new Error(response.statusText);
			response.json()


		})


		.then(responseJson => loadDisplayPictureOfTheDay(responseJson))
		.catch(error => {
			console.log('something went wrong');
		
		})

}


function loadDisplayPictureOfTheDay(data) {

		
		let nasaPodHtml = document.getElementById('target');
		nasaPodHtml.innerHTML = `

		<div>
		<img src="${data.url}"><br>
		
		<h2>${data.title}</h2>
			<ul>
				<li><h3>Explanation:</h3>  ${data.explanation}</li>
				<li><h3>Copyright:</h3> ${data.copyright}</li>
				<li><h3>Date:</h3> ${data.date}</li>
				<li><h3>HD Version:</h3> <a href="${data.hdurl}" target="_blank">HD Image Link</a></li>
		</div>



		`;
}

function pictureOfTheDayBtn() {
	$('#images').submit(event => {
		event.preventDefault();
		
		$('#target').empty();
		$('#target-2').empty();


		loadPicOfDay();

	})
}


function all() {

	pictureOfTheDayBtn();

}



$(all);



