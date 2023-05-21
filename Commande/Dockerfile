# pull the latest nodejs image to init docker image container
FROM node:latest

# set the working directory to /product
WORKDIR /product

# copy the current directory contents into the container at /command
ADD . /product

# install dependencies
RUN npm install

# expose port 3000
EXPOSE 3000

# run the command
CMD ["npm", "start"]
