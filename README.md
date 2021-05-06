# Emission Twitch de Musique

Nous avons choisi de réaliser l’habillage d’une émission de live de musique. Le concept est simple, un hôte invite plusieurs artistes pour faire des lives musicaux. Ces lives sont principalement interactifs avec les viewers au travers du chat. En effet, les viewers proposent des contraintes pour dynamiser le live. Suite à un système de vote, un accord est imposé aux artistes lors de leurs impros. De plus, ils peuvent donner leur avis en commentaire afin de rendre compte de l’avis général. On peut également suivre en direct le nombre de followers et de subscribers.

## Lancer le projet avec OBS

- Lancer le projet sur React
- Ajouter la source vidéo
- Ajouter les composants en faisant : nouvelle source → navigateur → adresse : localhost:300/__NOMCOMPONENT__ (les différents noms sont : /chat, /subbar, /subgoalmessage, /reaction, /vote, /clock)
- Placer les composants
- Fin 

## Lancer le projet avec REACT

- Dans une invite de commande : 
```sh
npm run start
```
- Puis pour accéder à chacun des composants il suffit de rajouter /le composant à la fin de l’url localhost 
- Component du chat : /chat
- Component de la barre de suivi : /subbar
- Component du message subgoal : /subgoalmessage
- Component des reactions du public : /reaction
- Component du vote pour l’accord: /vote
- Component du temps du live : /clock
