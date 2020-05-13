const currentDay = new Date();

const main = document.querySelector('#main');
















function readDay(){return currentDay.getDay();}


let today = [{
	month: "January",
	days: 01,
},{
	month: "February",
	days: 05
},{
	month: "March",
	days: 05
},{
	month: "April",
	days: 05
},{
	month: "May",
	days: 05,
	events: ["Anniversary: May 15", "Practice"],
	func: readDay()
},{
	month: "June",
	days: 02,
},{
	month: "July",
	days: 03
},{
	month: "August",
	days: 04
},{
	month: "September",
	days: 05
},{
	month: "October",
	days: 06
},{
	month: "November",
	days: 05
},{
	month: "December",
	days: 05
}]



//main.textContent = today[currentDay.getMonth()].month;

function pickWorkout(){
	switch(currentDay.getDay()){
	case 1: return "P90X Plyo";
	break;
	case 2: return "Chest/Back + Abs";
	break;
	case 3: return "P90X Yoga";
	break;
	case 4: return "Legs/Back + Abs";
	break;
	case 5: return "P90X Kenpo";
	break;
	case 6: return "Hunny Exercise";
	break;
	case 7: return "Hahaha";
	break;
}

}


function pickMeal(x){

	switch(x){
	case "monday": return "P90X Plyo";
	break;
	case "tuesday": return "Chest/Back + Abs";
	break;
	case "wednesday": return "P90X Yoga";
	break;
	case "thursday": return "Legs/Back + Abs";
	break;
	case "friday": return "P90X Kenpo";
	break;
	case "saturday": return "Hunny Exercise";
	break;
	case "sunday": return "Hahaha";
	break;
} 

}

let meals = {
	Option1: {
		Breakfast: "Bread/Cheese",
		Lunch: "Chapi/Chicken",
		Dinner: "BrazilianFish"
},
	Option2: {
		Breakfast: "Fruit/Yogurt",
		Lunch: "Bread/Herring or Salmon",
		Dinner: "Chicken Mango Curry"
},
	Option3: {
		Breakfast: "yummy",
		Lunch: "food",
		Dinner: "here"
},
	Brunch: {
		Breakfast: "Biscuits and Gravy",
		Lunch: "Fried Chicken",
		Dinner: "Tomato Sandwiches"
}
}


let workout = pickWorkout();

const monday = document.querySelector("#monday");
const breakMon = document.createElement("li");
breakMon.textContent = meals.Option1.Breakfast;
monday.appendChild(breakMon);
const lunchMon = document.createElement("li");
lunchMon.textContent = meals.Option1.Lunch;
monday.appendChild(lunchMon);
const dinMon = document.createElement("li");
dinMon.textContent = meals.Option1.Dinner;//pickMeal("monday");
monday.appendChild(dinMon);

const tuesday = document.querySelector("#tuesday");
const breakTue = document.createElement("li");
breakTue.textContent = meals.Option2.Breakfast;
tuesday.appendChild(breakTue);
const lunchTue = document.createElement("li");
lunchTue.textContent = meals.Option2.Lunch;
tuesday.appendChild(lunchTue);
const dinTue = document.createElement("li");
dinTue.textContent = meals.Option2.Dinner;//pickMeal("monday");
tuesday.appendChild(dinTue);

const wednesday = document.querySelector("#wednesday");
const breakWed = document.createElement("li");
breakWed.textContent = meals.Option3.Breakfast;
wednesday.appendChild(breakWed);
const lunchWed = document.createElement("li");
lunchWed.textContent = meals.Option3.Lunch;
wednesday.appendChild(lunchWed);
const dinWed = document.createElement("li");
dinWed.textContent = meals.Option3.Dinner;//pickMeal("monday");
wednesday.appendChild(dinWed);

const thursday = document.querySelector("#thursday");
const breakThu = document.createElement("li");
breakThu.textContent = meals.Option2.Breakfast;
thursday.appendChild(breakThu);
const lunchThu = document.createElement("li");
lunchThu.textContent = meals.Option2.Lunch;
thursday.appendChild(lunchThu);
const dinThu = document.createElement("li");
dinThu.textContent = meals.Option2.Dinner;//pickMeal("monday");
thursday.appendChild(dinThu);

const friday = document.querySelector("#friday");
const breakFri = document.createElement("li");
breakFri.textContent = meals.Option3.Breakfast;
friday.appendChild(breakFri);
const lunchFri = document.createElement("li");
lunchFri.textContent = meals.Option3.Lunch;
friday.appendChild(lunchFri);
const dinFri = document.createElement("li");
dinFri.textContent = meals.Option3.Dinner;//pickMeal("monday");
friday.appendChild(dinFri);


const saturday = document.querySelector("#saturday");
const breakSat = document.createElement("li");
breakSat.textContent = meals.Option1.Breakfast;
saturday.appendChild(breakSat);
const lunchSat = document.createElement("li");
lunchSat.textContent = meals.Option1.Lunch;
saturday.appendChild(lunchSat);
const dinSat = document.createElement("li");
dinSat.textContent = meals.Option1.Dinner;//pickMeal("monday");
saturday.appendChild(dinSat);

const sunday = document.querySelector("#sunday");
const breakSun = document.createElement("li");
breakSun.textContent = meals.Brunch.Breakfast;
sunday.appendChild(breakSun);
const lunchSun = document.createElement("li");
lunchSun.textContent = meals.Brunch.Lunch;
sunday.appendChild(lunchSun);
const dinSun = document.createElement("li");
dinSun.textContent = meals.Brunch.Dinner;//pickMeal("monday");
sunday.appendChild(dinSun);


/*
const thursday = document.querySelector("#thursday");
thursday.textContent = pickMeal("thursday");

const friday = document.querySelector("#friday");
friday.textContent = pickMeal("friday");

const saturday = document.querySelector("#saturday");
saturday.textContent = pickMeal("saturday");

const sunday = document.querySelector("#sunday");
sunday.textContent = pickMeal("sunday");



*/