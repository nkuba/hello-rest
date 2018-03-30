# hello-rest

Works on port `3080`

## Environment variables
`DB_HOST`
`DB_PORT`

## Docker
```bash
# Build image
docker build -t hello-rest .

# List images
docker images

# Run images
docker run -d -p 3080:80 hello-rest

# Tag image with VERSION
docker tag hello-rest nkuba/hello-rest:${VERSION}

# Push image to Docker Hub
docker push nkuba/hello-rest
```