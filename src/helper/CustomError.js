class CustomHttpError extends Error {
    constructor(message, extras) {
      super(message);
      this.name = 'CustomHttpError';
      this.payload = extras.payload;
      this.responseCode = extras.responseCode;
      this.statusCode = extras.statusCode;
      this.statusText = extras.statusText;
      this.responseText = extras.responseText;
    }
  }
  
  export default CustomHttpError;
  