export class Client {
    nom !: string;
    prenom !: string;
    adresse !: string;
    cp !: string;
    ville !: string;
    tel !: string;
    email !: string;
    pays !: string;
    genre !: string;
    login !: string;
    password !: string;
    confirmPassword !: string;

    // add constructor 
    constructor(nom: string, prenom: string, adresse: string, cp: string, pays: string, ville: string, tel: string, email: string, genre: string, login: string, password: string, confirmPassword: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.cp = cp;
        this.ville = ville;
        this.pays = pays;
        this.tel = tel;
        this.email = email;
        this.genre = genre;
        this.login = login;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}
