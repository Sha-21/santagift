## Présentation

Le but de cet exercice est de mettre en place un projet complet avec Angular et SpringBoot.

Nous allons prendre le sujet `Liste des cadeaux de noel secret`.

## Les personnas :
Un `Personna` est un utilisateur des besoins spécifiques.

Dans ce cas il y a les `personnas` suivants :
- Enfants : Utilisateur pouvant créer une liste de souhait.
- Peres Noel : Personne qui offre les cadeaux

## Les cas d'utilisations:
* Un enfant PEUT ajouter un souhait a sa liste de souhait en donnant l'url pour acheter le produit.
* Un enfant PEUT retirer un souhait a sa liste des souhait
* Un enfant NE PEUT PAS voir qui prend a sa charge un souhait.
* Un Pére noel PEUT void les souhaits des enfants.
* Un Pére noel PEUT réserver un cadeau d'un enfant.
* Un Pére noel PEUT voir si un souhait est réserver par un autre pére noel.

## Choix des technologies:

Pour ce projet, nous allons prendre les technologies suivante:
- __Front__ : Angular 
- __backend__ : Spring Boot Web
- __base de données__ : MongoDB 

Nous allons prendre une architecture 3-tiers car elle est la plus simple et propose les 
meilleurs performances.

### PROCEDURE DE DEMARRAGE

1. Pour lancer le front, vous devez installer Node.js. 
2. Dans un terminal a la racine du dossier client taper la commande:

npm i
puis

npm runs start
Lancer le backend:

Pour le backend vous devez avoir un IDE JAva et docker.

Dans un terminal a la racine du dossier backend
exécuter la commande:
docker compose up -d

Utiliser votre IDE Java pour executer votre code.
