console.log('Witaj Programisto!'); /*widać tylko w console*/
/* var name = "Magdalena Janowska"; /*zmienne, wyrazy- w cudzysłowie
alert(name);
var count=45.123;
alert (count);

var firstName = "Jan";
var lastName="Kowalski";
alert (firstName + lastName);


var x=10;
x--;
alert (x);

var x=1;
alert(x!=0); /*inne niż zero*/
/*operatory logiczne- && - and, oraz- obie części muszą być spełnione
||- or, lub, jeden warunek ma być spełniony
!- not, nie

x<0&&y>1 czyli x mniejsze od zero i y wieksze od 1
x==0||x==2 x równe 0 lub x równe 2

var x=1;
var y=0;
console.log(x==0||y==1);

tablice- zmienna która przechowuje wiele wartości; nawiasy kwadratowe, wartości po przecinku
var names ["Jan", "Tadeusz", "Krzysztof"];
w tablicy zawsze leelmenty zaczynają się od zera, więc
var = names[2] to krzysztof
console.log (names[2]);

właściwość tablicy: length (ile elentó jest w tablicy)
push()dodaje nowe elementy do tablicy

var names = ["Jan", "Tadeusz", "Krzysztof"];
names.push("Ksawery");
console.log (names);

IF:

var days=4;
if (days <7){
	console.log("Pozostało mniej niż 7 dni");
} else {
	console.log("Pozostało conajmniej 7 dni");
}

Pętla For- 
for (licznik, najczęściej i (wartość, od której zaczynamy odliczanie); granica odliczania- kiedy przerwiemy pętlę?; inkrementacja zmniejsza lub ziksza przy przejściu pętli) {blok kodu, który będzie uruchamiany}

for (var i= 1; i<11; i++) {
	console.log(i);
}

var names = ["Jan", "Tadeusz", "Krzysztof"];
for (var i=0; i<names.length; i++) {console.log(names [i])
}


FUNKCJA- wielokrotne uruchamianie bloku kodu
definicja i wywołanie:
najpierw zdefiniujemy funkcję a potem ją wywołujemy

var showGreetings=function (name){
	console.log ("Witaj "+ name+ "!");
}

showGreetings ("Krzysztof");
showGreetings ("Jan");
showGreetings ("Andrzej");

OBIEKTY

obiekt np. opisuje użytkownika
klucz oraz wartość 

var user= {
username: "tnowak",
email: "tnowak@gmail.com",
age: 28
}

odwołujem y się za pomocą kropki; właśniwością może być text, licbza a nawet funkcja

var person = {
	firstName: "Paweł",
	lastName: "Kowal",
	age: 34,
	showGreeting: function(){
		console.log("Witaj " + this.firstName);
	} 
}

person.showGreeting();

ZAKRES ZMIENNYCH
zmienan lokalna to ta zdefiniowana tylko w funkcji, jest dostępna lokalnie w funkcji;
globalnie poza funkcją, dostępna wszędzie

var showCountry = function() {
	var country = "Polska";
	console.log(country);
}
var country= "UK";
console.log(country);
var showCountry = function() {
	var country = "Polska";
	console.log(country);
}
var country= "UK";
console.log(country);

*/
/*$(document).ready(function(){
	$(".intro").css("color", "red");
	$(".intro").hide(3000);
	$(".intro").show(3000);
});*/

/*łańcuchy funcji- szybciej się pisze, wydajniej działa
$(document).ready(function(){
	$(".intro").css("color", "red").hide(2000).show(2000);
})*/
	
	
/*zablokowanie funkcji domyslnych i wrzucenie imienia do alertu w okienku
poniżej- zablokowanie funkcji domyslnych w html i wrzucenie imienia, e-maila i hasła zamiast innego elementu (mapy) na stronę; najpierw w html trzeba dopisać odpowiednie ID, żeby było wiadomo co ma być powmienione; dodaliśmy id contact right

$(document).ready(function(){
	$("#login").click(function(event){
		event.preventDefault();
		var name=$("#name").val();
		var email=$("#email").val();
		var password =$("#password").val();
		
		$("#contact-right").html(name + "<br>" + email + "<br>" + password);
		
	});
}) */


$(document).ready(function(){
	$("#login").click(function(event){
		event.preventDefault();
		var name=$("#name").val();
		var email=$("#email").val();
		var password =$("#password").val();
		
		$("#contact-right").html(name + "<br>" + email + "<br>" + password);
		
	});

/*Przejścia przy wczytywaniu strony; elementy będą animowane i w ciągu 2 sekund po uruchomieniu strony będą się pojawiać elemety, które wybralismy; zaczynamy od skoplikowanego i pojemnego selektora $; funkcje są po kropce; lepiej odwołać się do węższego zakresu, np. do klasy lub id; poniższy selektor nie jest wydajny, ale jest pokazowy*/

$("p, h1, h2, h3, h4, a, img, form, button").hide ().fadeIn(2000);
}); 


/*Ajax- wysyłanie żądan do serwera bez przeładowania strony; doładowywanie w miarę przewijania w google; żeby zaimplementować ajax mozna użyć biblioteki jQuery; ajax to funkcja- .ajax; zapytanie ajax realizowane za pomocą biblioteki jQuerry
jest jeszcze technologia JSON- notacja obiekotwa Java Script; serwer zwraca odpowiedź Ajax w formie JSON; wymiana danych*/





