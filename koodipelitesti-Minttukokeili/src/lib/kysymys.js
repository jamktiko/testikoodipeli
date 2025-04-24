// //Questions for my school group project

// //Kysymys 1: Mitä konsoliin tulostuu?

// function funny(x) {
// 	return x === 69 ? 'He he... funny...' : "It's a number";
// }

// console.log(funny(68));

// /*
// Vastaus vaihtoehdot:
// A. Koodi ei tulosta mitään
// B. Koodi tulostaa "He he... funny..."
// C. Koodi tulostaa "It's a number" --> oikea vastaus
// */

// //Kysymys 2: Mitä kyseinen koodi tulostaa?

// const arki = ['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai'];

// for (let i = 1; i < arki.length; i++) {
// 	switch (i) {
// 		case 1:
// 			console.log(arki[i - 1]);
// 			break;
// 		case 2:
// 			console.log(arki[i - 1]);
// 			break;
// 		case 3:
// 			console.log(arki[i - 1]);
// 			break;
// 		case 4:
// 			console.log(arki[i - 1]);
// 			break;
// 		case 5:
// 			console.log(arki[i - 1]);
// 			break;
// 	}
// }

// /*
// Vastaus vaihtoehdot:
// A. Koodi tulostaa "Maanantai", "Tiistai", "Keskiviikko", "Torstai" --> oikea vaihtoehto
// B. Koodi tulostaa -1, 0, 1, 2, 3
// C. Koodi tulostaa "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai"
// */

// //Kysymys 3: Mitä x:n tilalle pitää kirjoittaa, jotta koira objektin nimi tulostuu?

// const koira = {
// 	nimi: 'Jungleri',
// 	rotu: 'Staffordshiren bullterrieri',
// 	ika: 5,
// 	tulostaTiedot: function () {
// 		return `Woof! Nimeni on ${x}.`;
// 	}
// };

// console.log(koira.tulostaTiedot());

// /*Vastausvaihtoehdot:
// A. this.nimi --> oikea vaihtoehto
// B. nimi
// C. 'Jungleri'
// */

// //KYsymys 4: Mitä seuraava koodi tulostaa?

// const a = 'Hello';
// const b = 'World';

// function tulosta(x, y) {
// 	return x + y;
// }

// tulosta(a, b);

// /*
// Vastausvaihtoehdot:
// A. Koodi ei tulosta mitään --> oikea vaihtoehto
// B. Koodi tulostaa 'Hello World'
// C. Koodi tulostaa 'HelloWorld'
// */

// //Kysymys 5: Mitä koodi tulostaa?

// function never() {
// 	let answer = 'gonna give u up';
// 	if (answer) {
// 		answer += ' Never gonna let u down';
// 	}
// 	return answer;
// }

// console.log('Never ' + never());

// /*
// Vastausvaihtoehdot:
// A. Parhaan biisin kertsin ikinä --> läpällä myös oikea vaihtoehto (alottaisi soimaan biisin?) (Oikeasti tulostaa 'Never gonna give u up Never gonna let u down')
// B. 'gonna give u up Never gonna let u down'
// C. 'Never gonna give u up'
// */

// //Kysymys 6: yippee() tulostaa, mutta notYippee() ei tulosta. Miksi?

// yippee();

// function yippee() {
// 	console.log('Yippee!');
// }

// notYippee();

// const notYippee = function () {
// 	console.log('Yip...pee?');
// };

// /*
// Vastausvaihtoehdot:
// A. Kylläpäs tulostaa molemmat funktiot!
// B. notYippee() ei ole määritelty ennen sen kutsumista --> oikea vaihtoehto
// C. notYippee() ei ole funktio
// */

// //kysymys 7: Mitä seuraava koodi tulostaa?

// const u = 5;
// const e = 4;

// const summa = u + e;

// console.log(summa);

// /*

// */
