# pull the latest nodejs image to init docker image container
FROM node:latest

# set the working directory to /router

WORKDIR /router


# copy the current directory contents into the container at /command
ADD . /router


# install dependencies
RUN npm install

# expose port 6000
EXPOSE 6000

# run the command
CMD ["npm", "start"]
