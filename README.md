### 👉 Install Dependencies

Install all the dependencies using the following command.

```bash
npm install
```

### 👉 Run Command

Start the development server using the following command.

```bash
npx tinacms dev -c "hugo server -D -p 1313"
```
### 👉 Access to Tina Admin

Access to /admin in order to customize contents of homepage

```bash
localhost:1313/admin/
```

## Push to registry

> docker login registry.code.fbi.h-da.de
>
> docker build -t registry.code.fbi.h-da.de/we3ve/landing-page:latest .
> 
> docker image prune
>
> docker push registry.code.fbi.h-da.de/we3ve/landing-page:latest

## Copy from local machine to server
> scp nginx/nginx.conf  root@157.90.113.75:car-sharing-deployment/nginx/
>
> scp docker-compose.yml root@157.90.113.75:car-sharing-deployment/
