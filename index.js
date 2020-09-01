function SearchWeather() {
	debugger;
	let searchtext =  document.getElementById("test").value;
	let country_id;
	if(searchtext == 'Yerevan' || searchtext == 'yerevan')
	{
		country_id = '616051'
	} 
	else if(searchtext == 'Gyumri'|| searchtext == 'gyumri')
	{
		country_id = '616635'
	}
	else if(searchtext == 'Dilijan'|| searchtext == 'dilijan')
	{
		country_id = '616752'
	}
	else if(searchtext == 'Sevan'|| searchtext == 'sevan')
	{
		country_id = '	616250'
	}
	else if(searchtext == 'Goris'|| searchtext == 'goris')
	{
		country_id = '174895'
	}
	
	const result = fetch('http://api.openweathermap.org/data/2.5/weather?id=' + country_id + '&appid=bc17e8f2e6272b40f1547fb19df4ea5b');
	
	result.then(fetchResult => {
	const bodyPromise = fetchResult.json();
	bodyPromise.then(result => {
	debugger;
 let el2 =  document.getElementById("Humidity").innerHTML = result.main.humidity;
 console.log(result);
let el3 =  document.getElementById("Temp").innerHTML = result.main.temp;
console.log(result);
	 });
	  });
	}


