const { default: mongoose } = require("mongoose");

const connectDataBase = async ( ) => {
  try {
    mongoose.connect("mongodb+srv://hamza:1212@cluster0.ozwptr8.mongodb.net/?retryWrites=true&w=majority");
    console.log("success");
  } catch (error) {
    console.error(error);
  }
};

// module.exports = {connectDataBase};
module.exports =  connectDataBase;
