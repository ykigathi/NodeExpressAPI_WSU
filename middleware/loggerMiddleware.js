const loggerMiddleware = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const path = req.originalUrl;
  
    console.log(`[${timestamp}] ${method} ${path}`);
  
    next();
  };
  
  export default loggerMiddleware;
  