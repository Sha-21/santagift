export class Cadeau {

  id : string;
  titre: string;
  description: string;
  url : string;
  imgUrl: string;

  constructor(id : string, titre: string, description: string, url: string, imgUrl: string){
    this.id = id;
    this.titre = titre;
    this.description = description;
    this.url = url;
    this.imgUrl = url;
  }
}
