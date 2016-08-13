$(document).ready(function() {
	
	var userChar = "";
	var userHP = 0;
	var defenderChar = "";
	var defenderHP = 0;
	var charPlaceholder = "";

	var characterArray = [
		{
			'charName': 'Boba Fett',
			'charImg': 'assets/images/BobaFett1.jpg',
			'startingHP': '135',
			'initialAtkVal': '',
			'counterAtkVal': ''
		},
		{
			'charName': 'Dash Rendar',
			'charImg': 'assets/images/DashRendar1.jpg',
			'startingHP': '130',
			'initialAtkVal': '',
			'counterAtkVal': ''
		},
		{
			'charName': 'Lando Calrissian',
			'charImg': 'assets/images/Lando1.jpg',
			'startingHP': '125',
			'initialAtkVal': '',
			'counterAtkVal': ''
		},
		{
			'charName': 'Leia Organa Solo',
			'charImg': 'assets/images/LeiaOrgana1.jpg',
			'startingHP': '120',
			'initialAtkVal': '',
			'counterAtkVal': ''
		}];

	gameSetup();

	$('.charContainer').one('click', function(event) { //'.one()' isn't working as described; can't figure out...
		var target = $( event.target );

		$(this).attr('id', 'yourChar');
		$(this).appendTo('#yourCharTarget');
		//$("#yourCharTarget").remove();

		gameplayDivDisplay();
		popEnemy3();

		if ($(this).is('#c0')) {
			en0 = document.getElementById('#c1');
			en1 = document.getElementById('#c2');
			en2 = document.getElementById('#c3');

			document.getElementById("enemy0").innerHTML = en0;
			document.getElementById("enemy1").innerHTML = en1;
			document.getElementById("enemy2").innerHTML = en2;

			$("#charSelectRow").remove();
		} else if ($(this).is('#c1')) {
			en0 = document.getElementById('#c0');
			en1 = document.getElementById('#c2');
			en2 = document.getElementById('#c3');

			document.getElementById("enemy0").innerHTML = en0;
			document.getElementById("enemy1").innerHTML = en1;
			document.getElementById("enemy2").innerHTML = en2;

			$("#charSelectRow").remove();
		} else if ($(this).is('#c2')) {
			en0 = document.getElementById('#c0');
			en1 = document.getElementById('#c1');
			en2 = document.getElementById('#c3');

			document.getElementById("enemy0").innerHTML = en0;
			document.getElementById("enemy1").innerHTML = en1;
			document.getElementById("enemy2").innerHTML = en2;

			$("#charSelectRow").remove();
		} else if ($(this).is('#c3')) {
			en0 = document.getElementById('#c0');
			en1 = document.getElementById('#c1');
			en2 = document.getElementById('#c2');

			document.getElementById("enemy0").innerHTML = en0;
			document.getElementById("enemy1").innerHTML = en1;
			document.getElementById("enemy2").innerHTML = en2;

			$("#charSelectRow").remove();
		};


	});

//Pretty standard hardcoding of initial char setup since I couldn't
//  figure out how to iterate the array index through element id.
	function gameSetup() {

		document.getElementById("charNameLine0").innerHTML = characterArray[0].charName;
		document.getElementById("charImgLine0").setAttribute("src", characterArray[0].charImg);
		document.getElementById("charHPCounter0").innerHTML = characterArray[0].startingHP;

		document.getElementById("charNameLine1").innerHTML = characterArray[1].charName;
		document.getElementById("charImgLine1").setAttribute("src", characterArray[1].charImg);
		document.getElementById("charHPCounter1").innerHTML = characterArray[1].startingHP;

		document.getElementById("charNameLine2").innerHTML = characterArray[2].charName;
		document.getElementById("charImgLine2").setAttribute("src", characterArray[2].charImg);
		document.getElementById("charHPCounter2").innerHTML = characterArray[2].startingHP;

		document.getElementById("charNameLine3").innerHTML = characterArray[3].charName;
		document.getElementById("charImgLine3").setAttribute("src", characterArray[3].charImg);
		document.getElementById("charHPCounter3").innerHTML = characterArray[3].startingHP;

	};

//Un-hide the yourChar, enemy, and defender divs; move the user's selection to yourChar;
//	populate the enemy divs with the remaining characters.
	function gameplayDivDisplay() {

		//document.getElementById('yourChar').removeAttribute("display", "none");
		//document.getElementById('yourChar').setAttribute("display", "initial");
		document.getElementById('enemy0').removeAttribute("display", "none");
		document.getElementById('enemy0').setAttribute("display", "initial");
		document.getElementById('enemy1').removeAttribute("display", "none");
		document.getElementById('enemy1').setAttribute("display", "initial");
		document.getElementById('enemy2').removeAttribute("display", "none");
		document.getElementById('enemy2').setAttribute("display", "initial");
		document.getElementById('defenderContainer').removeAttribute("display", "none");
		document.getElementById('defenderContainer').setAttribute("display", "initial");
		document.getElementById('charSelectRow').removeAttribute("visibility", "visible");
		document.getElementById('charSelectRow').setAttribute("display", "none");

	};

//Selecting the p, img, and 2nd p of each remaining character from the selection row
//	then populating the innerHTML of each enemy div with a character's attributes.
	function populateEnemies() {
		$('.charContainer').each(function(index){

		})
		//for(var i = 0; i < characterArray -1; i++) {
			$('.charSelectRow').children('.charContainer').each(function(){
				$(this)
			})
		//}

	};

	function popEnemy2() {
		$('.charContainer').each(function(index, element){
			if (index == '#enemy'+index+'Target'){
				$(this).appendTo('#enemy'+index+'Target');
				console.log(index); //nothing shows, so I know I'm doing something wrong....
			};
		});
	};

	function popEnemy3() {
		$('.charContainer').each(function(index, element){
			if (index == '#enemy'+index+'Target'){
				$(this).appendTo('#enemy'+index+'Target');
			};
		});
	};

//Attack buton battle logic
	$('.btn-danger').click(function() {


	});



//populate initial character divs with appropriate information
/*
	function gameSetup() {
		for(var i = 0; i < characterArray.length; i++){
			charPlaceholder = characterArray[i];

			document.getElementById("charNameLine"i"").innerHTML = charPlaceholder.charName;
			document.getElementById("charImgLine"i"").setAttribute("src", charPlaceholder.charImg);
			document.getElementById("charHPCounter"i"").innerHTML = charPlaceholder.startingHP;
		}
	};
*/
});