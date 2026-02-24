# Étape 1: Utiliser l'image Node.js
FROM node:iron-alpine3.23

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install --force

# Copier le reste des fichiers du projet
COPY . .

# Construire l'application pour la production
RUN npm run build

# Exposer le port 3000
EXPOSE 3000

# Définir la commande pour démarrer l'application
CMD ["npm", "start"]
