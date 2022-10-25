FROM keymetrics/pm2:latest-alpine
WORKDIR /app
COPY package*.json .babelrc ./
COPY public  public/
COPY src src/
COPY pm2.json .
RUN npm install --production
EXPOSE 80
CMD ["pm2-runtime","start", "pm2.json"]
