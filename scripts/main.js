const currentDay = new Date();
let today = currentDay.getDay();
let date = currentDay.getDate();


const body = document.querySelector("body");

const daySel = document.getElementById("daySel");

const schedule = document.querySelector('#schedule');
const menu = document.querySelector("#menu");


const first = document.querySelector('#first');
const cuddle = document.createElement("em");


const second = document.querySelector('#second');
const exercise = document.querySelector("#exercise");
exercise.textContent = pickWorkout(today);

const third = document.querySelector('#third');
const work1 = document.createElement("em");


const fourth = document.querySelector('#fourth');
const lunch = document.createElement("em");


const fifth = document.querySelector('#fifth');
const work2 = document.createElement("em");


const sixth = document.querySelector('#sixth');
const dinner = document.createElement("em");


const seventh = document.querySelector('#seventh');
const vary = document.createElement("em");


const eighth = document.querySelector('#eighth');
const hunny = document.createElement("em");


const ninth = document.querySelector('#ninth');
const sleep = document.createElement("em");


function layOut(day){
if(day < 6 && day > 0){
body.classList.remove("sunday");

first.textContent = "07h - 08h";
cuddle.textContent = " Cuddle";
first.appendChild(cuddle);

second.textContent = "08h - 09h ";
second.appendChild(exercise);

third.textContent = "10h - 14h";
work1.textContent = " Work";
third.appendChild(work1);

fourth.textContent = "14h - 15h";
lunch.textContent = " Lunch";
fourth.appendChild(lunch);

fifth.textContent = "15h - 19h";
work2.textContent = " Work";
fifth.appendChild(work2);

sixth.textContent = "19h - 20h";
dinner.textContent = " Dinner";
sixth.appendChild(dinner);

seventh.textContent = "20h - 21h";
vary.textContent = " Class";
seventh.appendChild(vary);

eighth.textContent = "21h - 22h";
hunny.textContent = " Hunny";
eighth.appendChild(hunny);

ninth.textContent = "23h - 07h";
sleep.textContent = " Sleep";
ninth.appendChild(sleep);
}//monday-friday

else if(day == 6){
body.classList.remove("sunday");

first.textContent = "09h - 10h";
first.appendChild(cuddle);

second.textContent = "10h - 11h ";
second.appendChild(exercise);

third.textContent = "12h - 14h";
work1.textContent = " Work";
third.appendChild(work1);

fourth.textContent = "14h - 15h";
lunch.textContent = " Lunch";
fourth.appendChild(lunch);

fifth.textContent = "15h - 17h";
work2.textContent = " Work";
fifth.appendChild(work2);

sixth.textContent = "17h - 18h";
vary.textContent = " Weekly Prep";
sixth.appendChild(vary);

seventh.textContent = "19h - 20h";
dinner.textContent = " Dinner";
seventh.appendChild(dinner);

eighth.textContent = "21h - 22h";
hunny.textContent = " Hunny";
eighth.appendChild(hunny);

ninth.textContent = "23h - 08h";
sleep.textContent = " Sleep";
ninth.appendChild(sleep);

}//if day is saturday

else if(day == 0){
body.classList.add("sunday");

first.textContent = "08h - 09h";
first.appendChild(cuddle);

second.textContent = "10h - 14h";
exercise.textContent = " Brunch";
second.appendChild(exercise);

third.textContent = "15h - 19h";
work1.textContent = " Tea";
third.appendChild(work1);

fourth.textContent = "20h - 21h";
lunch.textContent = " Sala";
fourth.appendChild(lunch);

fifth.textContent = "22h - 07h";
work2.textContent = " Sleep";
fifth.appendChild(work2);

sixth.textContent = "";
vary.textContent = "";
sixth.appendChild(vary);

seventh.textContent = "";
dinner.textContent = "";
seventh.appendChild(dinner);

eighth.textContent = "";
hunny.textContent = "";
eighth.appendChild(hunny);

ninth.textContent = "";
sleep.textContent = "";
ninth.appendChild(sleep);
}
}//layOut
layOut(today);


daySel.addEventListener("change", function(){
exercise.textContent = pickWorkout(Number(daySel.value));
layOut(Number(daySel.value));
});


function pickWorkout(day){
	switch(day){
	case 1: return "P90X Yoga";
	break;
	case 2: return "Rest";
	break;
	case 3: return "Shoulders/Arms + Abs";
	break;
	case 4: return "Rest";
	break;
	case 5: return "Legs/Back + Abs";
	break;
	case 6: return "Hunny Exercise";
	break;
	case 0: return "Hahaha";
	break;
}//switch
}//pickWorkout

/*
function pickWorkout(day){
	switch(day){
	case 1: return "P90X Plyo";
	break;
	case 2: return tuesdayCycle();//"Chest/Back + Abs";
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
}//switch
}//pickWorkout
*/

function tuesdayCycle(){

	if(date<7){return "Chest/Back + Abs";}
	else if(date<14){return "Shldrs/Arms + Abs";}
	else if(date<21){return "Ch/Sh/Tr  + Abs";}
	else{return "Back/Biceps  + Abs";}
}//tuesdayCycle





let meals = {
	Breakfast: {
		A: "Yogurt/Fruit",
		B: "Eggs",
		C: "Oatmeal"
},
	Lunch: {
		A: "Chapati / Carrots / Hummus / Soup",
		B: "Chapati / Can Meat / Soup",
		C: "Puff Pastry with Ham"
},
	Dinner: {
		A: "Chili",
		B: "Thai Curry",
		C: "Liver Rice"
},
	Sunday: {
		Brunch: " ",
		Tea: " BBQ Chicken ", //Memorial Day
		Sala: " "
},
	Empty:{Empty: "Empty"}
}


const monday = document.querySelector("#monday");
const breakMon = document.createElement("li");
breakMon.textContent = meals.Breakfast.A;
monday.appendChild(breakMon);
const lunchMon = document.createElement("li");
lunchMon.textContent = meals.Lunch.A;
monday.appendChild(lunchMon);
const dinMon = document.createElement("li");
dinMon.textContent = meals.Dinner.A;//pickMeal("monday");
monday.appendChild(dinMon);

const tuesday = document.querySelector("#tuesday");
const breakTue = document.createElement("li");
breakTue.textContent = meals.Breakfast.B;
tuesday.appendChild(breakTue);
const lunchTue = document.createElement("li");
lunchTue.textContent = meals.Lunch.B;
tuesday.appendChild(lunchTue);
const dinTue = document.createElement("li");
dinTue.textContent = meals.Dinner.B;//pickMeal("monday");
tuesday.appendChild(dinTue);

const wednesday = document.querySelector("#wednesday");
const breakWed = document.createElement("li");
breakWed.textContent = meals.Breakfast.C;
wednesday.appendChild(breakWed);
const lunchWed = document.createElement("li");
lunchWed.textContent = meals.Lunch.C;
wednesday.appendChild(lunchWed);
const dinWed = document.createElement("li");
dinWed.textContent = meals.Dinner.A;//pickMeal("monday");
wednesday.appendChild(dinWed);

const thursday = document.querySelector("#thursday");
const breakThu = document.createElement("li");
breakThu.textContent = meals.Breakfast.B;
thursday.appendChild(breakThu);
const lunchThu = document.createElement("li");
lunchThu.textContent = meals.Lunch.B;
thursday.appendChild(lunchThu);
const dinThu = document.createElement("li");
dinThu.textContent = meals.Dinner.C;//pickMeal("monday");
thursday.appendChild(dinThu);

const friday = document.querySelector("#friday");
const breakFri = document.createElement("li");
breakFri.textContent = meals.Breakfast.C;
friday.appendChild(breakFri);
const lunchFri = document.createElement("li");
lunchFri.textContent = meals.Lunch.C;
friday.appendChild(lunchFri);
const dinFri = document.createElement("li");
dinFri.textContent = meals.Dinner.B;//pickMeal("monday");
friday.appendChild(dinFri);


const saturday = document.querySelector("#saturday");
const breakSat = document.createElement("li");
breakSat.textContent = meals.Breakfast.A;
saturday.appendChild(breakSat);
const lunchSat = document.createElement("li");
lunchSat.textContent = meals.Lunch.A;
saturday.appendChild(lunchSat);
const dinSat = document.createElement("li");
dinSat.textContent = meals.Dinner.C;//pickMeal("monday");
saturday.appendChild(dinSat);

const sunday = document.querySelector("#sunday");
const themeSun = document.createElement("h3");
themeSun.textContent = "Memorial Day";
sunday.appendChild(themeSun);





/*


const sunday = document.querySelector("#sunday");
const breakSun = document.createElement("li");
breakSun.textContent = meals.Sunday.Brunch;
sunday.appendChild(breakSun);
const lunchSun = document.createElement("li");
lunchSun.textContent = meals.Sunday.Tea;
sunday.appendChild(lunchSun);
const dinSun = document.createElement("li");
dinSun.textContent = meals.Sunday.Sala;//pickMeal("monday");
sunday.appendChild(dinSun);




*/