# Cloner le dépôt

```bash
git clone https://github.com/Maxougit/Hand-E-Sport.git
```

# Aller dans le répertoire du projet

```bash
cd Hand-E-Sport
```

# Construire l'image Docker

```bash
docker build -t handesport .
```

# Exécuter le conteneur en mode détaché et mapper le port 3000

```bash
docker run -d --restart always -p 3000:3000 handesport
```

Avec make :

```bash
make all
```
