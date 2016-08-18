import { Injectable } from '@angular/core';

/**
 *  Translation
 *  
 *  Import directly from full path not use barrel exports
 */
@Injectable()
export class TransComponent {
    
    regex: any = {
        "emailSimple": /^([A-Za-z0-9]|-|_)+@[A-Za-z]+\.[A-Za-z]{2,}$/,
        "email": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }

    translation: any = {
        "en": {
            "home": "home",
            "news": "news",
            "addNew": "add new",
            "subject": "subject",
            "appendix": "appendix",
            "content": "content",
            "image": "image",
            "gallery": "gallery",
            "attachments": "attachments",
            "is": "is",
            "required": "required",
            "submit": "submit",
            "file": "file",
            "upload": "upload",
            "delete": "delete",
            "file_upload": "upload file",
            "guest": "guest",
            "user": "user",
            "login": "login",
            "logout": "logout",
            "name": "name",
            "password": "password",
            "repassword": "Repeat password",
            "register": "register",
            "email": "e-mail",
            "requiredTence": (name: string) => "% is required.".replace("%", name),
            "minLengthTence": (minLength: string) => "Minimal length is % characters.".replace("%", minLength),
            "patternTence": (name: string) => "Value doesn't match type %.".replace("%", name),
            "notCompleteCredentials": "Please fill all required credentials.",
            "notMatchPasswords": "Passwords not matched.",
            "userExists": "Your user alredy exists.",
            "userRegistered": "You were successfully registered.",
            "userNotExists": (email: string) => "User with e-mail: % isn't registered.".replace("%", email),
            "userBadPass": "Typed password isn't correct.",
            "userNotActive": "Your user account isn't active. Please contact your system administrator.",
            "userNotLogged": "Login process isn't finished correctly. Please try it again.",
            "userLoggedIn": "You are successfully logged in system.",
            "regex": this.regex
        },
        "cz": {
            "home": "domů",
            "news": "novinky",
            "addNew": "Přidat novinku",
            "subject": "předmět",
            "appendix": "úvod",
            "content": "obsah",
            "image": "obrázek",
            "gallery": "galerie",
            "attachments": "přílohy",
            "is": "je",
            "required": "povinný",
            "submit": "potvrdit",
            "file": "soubor",
            "upload": "nahrát",
            "delete": "smazat",
            "file_upload": "nahrát soubor",
            "guest": "host",
            "user": "uživatel",
            "login": "přihlášení",
            "logout": "odhlášení",
            "name": "jméno",
            "password": "heslo",
            "repassword": "opakujte heslo",
            "register": "registrace",
            "email": "e-mail",
            "notCompleteCredentials": "Prosím vyplňte všechny povinné přihlašovací údaje.",
            "notMatchPasswords": "Zadaná hesla se neschodují.",
            "userExists": "Vámi zadaný uživatel již existuje.",
            "userRegistered": "Vaše registrace proběhla úspěšně.",
            "userNotExists": (email: string) => "Uživatel: % není registrován.".replace("%", email),
            "userBadPass": "Zadané heslo není správné.",
            "userNotActive": "Váš uživatelský účet není aktivní. Prosím kontaktujte Vašeho systémového administrátora.",
            "userNotLogged": "Proces přihlašování nebyl dokončen korektně. Prosím, zkuste to znovu.",
            "userLoggedIn": "Úspěšně jste se přihlásili do systému.",
            "requiredTence": (name: string) => "% je vyžadováno.".replace("%", name),
            "minLengthTence": (minLength: string) => "Minimální délka je % znaků.".replace("%", minLength),
            "patternTence": (name: string) => "Hodnota neodpovídá %.".replace("%", name),
            "regex": this.regex
        },
        "sk": {
            "home": "domov",
            "news": "noviny",
            "addNew": "Pridat novinu",
            "subject": "predmet",
            "appendix": "úvod",
            "content": "obsah",
            "image": "obrázok",
            "gallery": "galéria",
            "attachments": "prílohy",
            "is": "je",
            "required": "povinný",
            "submit": "potvrdiť",
            "file": "súbor",
            "upload": "nahrať",
            "delete": "zmazať",
            "file_upload": "nahrať súbor",
            "guest": "hosť",
            "user": "užívateľ",
            "login": "prihlásenie",
            "logout": "odhlásenie",
            "name": "meno",
            "password": "heslo",
            "repassword": "opakujte heslo",
            "register": "registrácia",
            "email": "e-mail",
            "notCompleteCredentials": "Prosím vyplňte všetky povinné prihlasovacie údaje.",
            "notMatchPasswords": "Zadané heslá sa nezhodujú.",
            "userExists": "Vami zadaný používateľ už existuje.",
            "userRegistered": "Vaša registrácia prebehla úspešne.",
            "userNotExists": (email: string) => "Používateľ: % nie je registrovaný.".replace("%", email),
            "userBadPass": "Zadané heslo nie je správne.",
            "userNotActive": "Váš užívateľský účet nie je aktívny. Prosím kontaktujte Vášho systémového administrátora.",
            "userNotLogged": "Proces prihlasovania nebol dokončený korektne. Prosím, skúste to znova.",
            "userLoggedIn": "Úspešne ste sa prihlásili do systému.",
            "requiredTence": (name: string) => "% je vyžadované.".replace("%", name),
            "minLengthTence": (minLength: string) => "Minimálna dĺžka je % znakov.".replace("%", minLength),
            "patternTence": (name: string) => "Hodnota nezodpovedá typu %.".replace("%", name),
            "regex": this.regex
        }
    };

    getTranslation() {
        let userLang = navigator.language.split('-')[0]; // use navigator lang if available
        let availLang = Object.keys(this.translation);
        
        userLang = availLang.indexOf(userLang) > -1 ? userLang : 'en';

        return this.translation[userLang];
    }
}
