import App from './app';

const port = process.env.PORT || 10100;



const startServer = async (): Promise<void> => {
  const port = process.env.PORT || 10100;
  const app = new App();
//   await app.initialize();
  
  app.app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();