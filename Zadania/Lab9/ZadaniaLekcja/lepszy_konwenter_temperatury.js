// Klasa jest napisana w ten sposób, że sama tworzy 
// dynamicznie potrzebne komponenty, zatem możliwe jest 
// utworzenie wielu jej instancji, które działają niezależnie.
export class KonwenterTemperatury {
    // Właściwości klasy ustawiamy początkowo na 'null'.
    input = null;
    output = null;
    parent = null;

    // Konstruktor jednoargmentowy - chcemy ustawić dowolny element HTML jako rodzica.
    constructor(parent) {
        // Nadpisujemy odpowiednią właściwość.
        this.parent = parent;
    }

    // Metoda tworzy dynamicznie DOM i ustawia potrzebnych listenerów.
    initComponent() {
        this.input = document.createElement('input');
        this.input.addEventListener('change', (e) => {
            // Wywołujemy inną metodę tej klasy.
            this.konwertujCelcjuszToFahrenheit();
        });
        this.output = document.createElement('output');
        this.parent.append(this.input);
        this.parent.append(this.output);
    }

    // Metoda do obsługi formularza.
    konwertujCelcjuszToFahrenheit() {
        console.log(this.input);
        let celcjuszWartosc = this.input.value;
        if (celcjuszWartosc >= -273.15)
            this.output.innerText = ((celcjuszWartosc - 0.1 * celcjuszWartosc) * 2) + 32;
        else {
            this.output.innerText = "Nie ma temperatury poniżej zera bezwględnego";
            alert('Podano nieprawidłowe dane!');
        }
    }
}