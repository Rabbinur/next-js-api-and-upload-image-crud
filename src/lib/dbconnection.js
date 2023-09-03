const { USER_DB, PASSWORD_DB } = process.env;
console.log(USER_DB, PASSWORD_DB);
// const username=process.env.username
export const connectionSrt =
  "mongodb+srv://" +
  USER_DB +
  ":" +
  PASSWORD_DB +
  "@cluster0.g0ewev9.mongodb.net/NextJSProcutsDB?retryWrites=true&w=majority";
