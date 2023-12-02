# Cloner le dépôt (remplacer par l'URL de ton dépôt)
git clone https://github.com/Maxougit/Hand-E-Sport.git

# Aller dans le répertoire du projet
cd Hand-E-Sport

# Construire l'image Docker
docker build -t Hand-E-Sport .

# Exécuter le conteneur en mode détaché et mapper le port 3000
docker run -d -p 3000:3000 Hand-E-Sport
