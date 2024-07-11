// Tworzymy tutaj własny Promise.
function emitPromise() {
    // Tworzymy instancję klasy Promise.
    // W języku JS możliwe jest podanie na wejściu innych funkcji.
    // Konstrukcja, którą tutaj widzimy zakłada że podano 2 funkcje 
    // (jak to zwykle bywa w Promiseach) możliwe jest zatem ich wywołanie.
    return new Promise((resolve, reject) => {
        // Tutaj odrzucenie Promise'u następuje gdy ktoś chciałby oczekiwać 
        // na zmianę języka, nie majac utworzonego odpowiedniego selecta.
        if (document.getElementById('jezyk') === null) {
            reject('Nie ma wyboru');
        }

        // Promise działa tak, że jest emitowany w przypadku zmiany wartości selecta.
        // Tworzymy własny Promise po to, żeby nie musieć w handlerze eventu change 
        // napisać logiki wymiany języka w każdym komponencie jaki tego potrzebuje. 
        // Rozwiązanie jakie zastosowano ma też taką zaletę, że można dodawać kolejne 
        // komponenty, które będą oczekiwać na te zmiany, bez konieczności 
        // nadpisywania tego handlera.
        document.getElementById('jezyk').addEventListener('change', (e) => {
            resolve(document.getElementById('jezyk').value);
        });
    });
}

export function waitUntilLanguageChanged() {
    return emitPromise();
}