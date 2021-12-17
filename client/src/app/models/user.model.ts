export class User {

  id : string;
  nom : string;
  mdp: string;
  role: string;

  constructor(id : string, nom: string, mdp: string, role: string){
    this.id = id;
    this.nom = nom;
    this.mdp = mdp;
    this.role = role;
  }
}
