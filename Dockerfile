#כל פקודה של docker היא שכבה לכן נרצה להריץ את הפקודה של copy פעמיים 

# taking the node version 15
FROM node:15
# decide on which directory we will work
WORKDIR /app
# copy all dependencies from the package.json into the docker file
# if we will add a new dependency to this file, we will have to run this layer again and all the layers below it
COPY package.json . 
# this command will build the container with the files.
# --only=production =  removing any dev dependencies to be installed on prod env.
# now we will copy all our files into the docker file 

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
         then npm install; \ 
         else npm install --only=production; \
         fi

COPY . ./
# setting the port variable to be 3000
ENV PORT 3000
EXPOSE $PORT

# this command will run the container.
CMD ["node","index.js"]

# after finishing writing this file we will run the command "docker build ." this command will create the container image for us
