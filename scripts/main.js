const currentDay = new Date();
const today = currentDay.getDay();
let date = currentDay.getDate();


const schedule = document.querySelector('#schedule');
const menu = document.querySelector("#menu");

const exercise = document.querySelector("#exercise");
exercise.textContent = pickWorkout();

const first = document.querySelector('#first');
const cuddle = document.createElement("em");
cuddle.textContent = " Cuddle";
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const work1 = document.createElement("em");
work1.textContent = " Work";
const fourth = document.querySelector('#fourth');
const lunch = document.createElement("em");
lunch.textContent = " Lunch";
const fifth = document.querySelector('#fifth');
const work2 = document.createElement("em");
work2.textContent = " Work";
const sixth = document.querySelector('#sixth');
const vary = document.createElement("em");
vary.textContent = " Weekly Prep";
const seventh = document.querySelector('#seventh');
const dinner = document.createElement("em");
dinner.textContent = " Dinner";
const eighth = document.querySelector('#eighth');
const hunny = document.createElement("em");
hunny.textContent = " Hunny";
const ninth = document.querySelector('#ninth');
const sleep = document.createElement("em");
sleep.textContent = " Sleep";

if(today == 6){
first.textContent = "09h - 10h";
first.appendChild(cuddle);

second.textContent = "10h - 11h ";
second.appendChild(exercise);

third.textContent = "12h - 14h";
third.appendChild(work1);

fourth.textContent = "14h - 15h";
fourth.appendChild(lunch);

fifth.textContent = "15h - 17h";
fifth.appendChild(work2);

sixth.textContent = "17h - 18h";
sixth.appendChild(vary);

seventh.textContent = "19h - 20h";
seventh.appendChild(dinner);

eighth.textContent = "21h - 22h";
eighth.appendChild(hunny);

ninth.textContent = "23h - 08h";
ninth.appendChild(sleep);

}//if day is saturday

if(today == 7){
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

function pickWorkout(){
	switch(today){
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


function tuesdayCycle(){

	if(date<7){return "Chest/Back + Abs";}
	else if(date<14){return "Shldrs/Arms + Abs";}
	else if(date<21){return "Ch/Sh/Tr  + Abs";}
	else{return "Back/Biceps  + Abs";}
}//tuesdayCycle





let meals = {
	Breakfast: {
		A: "Bread/Cheese",
		B: "Fruit/Yogurt",
		C: "Biscuits and Gravy"
},
	Lunch: {
		A: "Soup/Chicken",
		B: "Bread/Herring or Salmon",
		C: "Tuna Salad",
		D: "Fried Chicken",
},
	Dinner: {
		A: "Brazilian Fish",
		B: "Chicken Mango Curry",
		C: "Anniversary Dinner"
},
	Sunday: {
		Brunch: "Egg Skillet",
		Tea: "Game or Fish",
		Sala: "Hot Dogs"
},
	Empty:{Empty: "Empty"}
}


const monday = document.querySelector("#monday");
const breakMon = document.createElement("li");
breakMon.textContent = meals.Breakfast.C;
monday.appendChild(breakMon);
const lunchMon = document.createElement("li");
lunchMon.textContent = meals.Lunch.D;
monday.appendChild(lunchMon);
const dinMon = document.createElement("li");
dinMon.textContent = meals.Dinner.A;//pickMeal("monday");
monday.appendChild(dinMon);

const tuesday = document.querySelector("#tuesday");
const breakTue = document.createElement("li");
breakTue.textContent = meals.Breakfast.A;
tuesday.appendChild(breakTue);
const lunchTue = document.createElement("li");
lunchTue.textContent = meals.Lunch.B;
tuesday.appendChild(lunchTue);
const dinTue = document.createElement("li");
dinTue.textContent = meals.Dinner.B;//pickMeal("monday");
tuesday.appendChild(dinTue);

const wednesday = document.querySelector("#wednesday");
const breakWed = document.createElement("li");
breakWed.textContent = meals.Breakfast.B;
wednesday.appendChild(breakWed);
const lunchWed = document.createElement("li");
lunchWed.textContent = meals.Lunch.A;
wednesday.appendChild(lunchWed);
const dinWed = document.createElement("li");
dinWed.textContent = meals.Dinner.A;//pickMeal("monday");
wednesday.appendChild(dinWed);

const thursday = document.querySelector("#thursday");
const breakThu = document.createElement("li");
breakThu.textContent = meals.Breakfast.A;
thursday.appendChild(breakThu);
const lunchThu = document.createElement("li");
lunchThu.textContent = meals.Lunch.B;
thursday.appendChild(lunchThu);
const dinThu = document.createElement("li");
dinThu.textContent = meals.Dinner.B;//pickMeal("monday");
thursday.appendChild(dinThu);

const friday = document.querySelector("#friday");
const breakFri = document.createElement("li");
breakFri.textContent = meals.Breakfast.B;
friday.appendChild(breakFri);
const lunchFri = document.createElement("li");
lunchFri.textContent = meals.Lunch.C;
friday.appendChild(lunchFri);
const dinFri = document.createElement("li");
dinFri.textContent = meals.Dinner.C;//pickMeal("monday");
friday.appendChild(dinFri);


const saturday = document.querySelector("#saturday");
const breakSat = document.createElement("li");
breakSat.textContent = meals.Empty.Empty;
saturday.appendChild(breakSat);
const lunchSat = document.createElement("li");
lunchSat.textContent = meals.Empty.Empty;
saturday.appendChild(lunchSat);
const dinSat = document.createElement("li");
dinSat.textContent = meals.Empty.Empty;//pickMeal("monday");
saturday.appendChild(dinSat);

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



/*






*/