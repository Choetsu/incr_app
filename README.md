# incr_app

## Description

Ce dépôt contient une simple application Node.js Express qui suit les requêtes et utilise la mise en cache Redis. Le projet est configuré pour être exécuté dans des conteneurs Docker pour faciliter le déploiement et l'évolutivité.

## Prérequis

Avant de commencer, assurez-vous que les éléments suivants sont installés sur votre système :

- [Docker](https://docs.docker.com/engine/install)
- [Docker Compose](https://docs.docker.com/compose/install)

## Démarrage

1. Cloner le dépôt :

   ```bash
   git clone git@github.com:Choetsu/incr_app.git
   cd incr_app
   ```

2. Démarrez les conteneurs Docker :

   ```bash
   docker compose up
   ```

   Ceci lancera l'application Node.js et Redis dans des conteneurs séparés.

3. Accédez à l'application :

   Ouvrez votre navigateur et rendez-vous sur [http://localhost:5000](http://localhost:5000) pour interagir avec l'application Node.js.
