mkdir flask-app
cd flask-app
docker build -t flask-app
// Rename-Item -Path "Dockerfile.txt" -NewName "Dockerfile"
docker images
docker run -p 5000:5000 flask-app
