import { Injectable } from '@angular/core';

/**
 *  Translation helpers methods
 */
@Injectable()
export class TransHelper {
    
    constructor() {}
    
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
            "file_upload": "upload file"
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
            "file_upload": "nahrát soubor"
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
            "file_upload": "nahrať súbor"
        }
    };

    getTranslation() {
        let userLang = navigator.language.split('-')[0]; // use navigator lang if available
        let availLang = Object.keys(this.translation);
        
        userLang = availLang.indexOf(userLang) > -1 ? userLang : 'en';

        return this.translation[userLang];
    }
}
