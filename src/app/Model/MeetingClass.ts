export class Meeting{
 
    id:number;
    titre: String;
    Lieu : String;
    Date_Deb : Date;
    Date_Fin: Date;

    constructor(id: number, titre: string, Date_Deb: Date,Date_Fin :Date ){
        this.id = id;
        this.titre = titre;
        this.Date_Deb = Date_Deb;
        this.Date_Fin= Date_Fin;
        
    }

}