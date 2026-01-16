# IPL Social

## Étudiant
- Nom : Samadi Ali
- Email Vinci : ali.samadi@vinci.be

## URL GitHub du projet
https://github.com/ali-samadi-vinci/ipl-social

## Description du projet
Projet DevOps pour la validation d'adresses email en TypeScript avec TDD.  
La fonction `isValidEmail(email: string): boolean` vérifie que l’email respecte les règles suivantes : contient exactement un `@`, texte avant et après le `@`, pas d’espaces, domaine avec au moins un point (pas en premier ni dernier caractère), pas de points consécutifs, caractères autorisés seulement.  
Les tests sont écrits avec Jest et couvrent tous les cas classiques et edge cases.

## Structure du projet
ipl-social/
├─ src/email.ts
├─ tests/emailValidator.test.ts
├─ .github/workflows/nodejs-ci.yml
├─ package.json
├─ package-lock.json
├─ tsconfig.json
├─ jest.config.js
└─ README.md

## Lancer les tests
Installer les dépendances : `npm install`  
Lancer les tests : `npm test`

## CI
Pipeline GitHub Actions configurée pour exécuter les tests automatiquement à chaque push ou pull request sur `main`.

