#this is the official Node image
FROM node:current-slim

#this assigns the root (workdir) as the start of the internal filesystem of the image(container)
WORKDIR /usr/src/app
# copies this file into the WORKDIR
COPY package.json .
#the same command you would run on the commandline
RUN npm install

#assigns port 8080 as the containers open port
EXPOSE 8080
#commands you would give in commandline
CMD [ "npm", "start" ]

#copies everthing into the WORKDIR
COPY . .