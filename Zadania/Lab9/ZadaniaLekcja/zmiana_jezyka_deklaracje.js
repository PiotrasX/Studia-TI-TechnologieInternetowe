import { waitUntilLanguageChanged } from './zmiana_jezyka.js';

// Tutaj komponent jest tworzony nie jako obiekt, ale jako funkcja
// to jest nadal stosowane i akceptowane w JS.
export function Aside() {
    this.english_links = { home: 'home', about: 'about', gallery: 'gallery' };
    this.polish_links = { home: 'strona domowa', about: 'o nas', gallery: 'galeria' }

    this.aside = null;
    this.home = null;
    this.about = null;
    this.gallery = null;

    this.setup = function setup() {
        this.aside = document.createElement('aside');

        this.home = document.createElement('a');
        this.home.setAttribute('href', '#');
        this.about = document.createElement('a');
        this.about.setAttribute('href', '#about')
        this.gallery = document.createElement('a');
        this.gallery.setAttribute('href', '#gallery')

        this.aside.append(this.home);
        this.aside.append(this.about);
        this.aside.append(this.gallery);
        document.body.append(this.aside);

        this.updateLanguage('pl');
    }

    this.updateLanguage = function updateLanguage(lan) {
        if (lan === 'pl') {
            this.home.innerText = this.polish_links.home;
            this.about.innerText = this.polish_links.about;
            this.gallery.innerText = this.polish_links.gallery;
        }
        if (lan === 'en') {
            this.home.innerText = this.english_links.home;
            this.about.innerText = this.english_links.about;
            this.gallery.innerText = this.english_links.gallery;
        }
    }

    this.wait = function wait() {
        // Zmiana języka komponentu.
        waitUntilLanguageChanged().then((result) => {
            this.updateLanguage(result);
            this.wait();
        },
            (error) => { alert('Wystąpił błąd'); });
    }
}