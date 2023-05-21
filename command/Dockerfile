# pull the latest nodejs image to init docker image container
FROM node:latest

# set the working directory to /product
WORKDIR /command

# copy the current directory contents into the container at /command
ADD . /command

# install dependencies
RUN npm install

# expose port 4000
EXPOSE 4000

# run the command
CMD ["npm", "start"]
