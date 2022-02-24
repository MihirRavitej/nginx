FROM node:12

# Set working directory
WORKDIR /home/node/app

# COPY app
COPY app .

# install dependencies for express app
# Remember: RUN command executes at image build while CMD works at docker instace creation
RUN npm install

# Expose port 9999
EXPOSE 9999

# Run the app
CMD npm run app



