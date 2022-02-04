echo "### Docker Compose up"
docker-compose up --build
echo "### Changing permissions "
chmod -R go+w Data
