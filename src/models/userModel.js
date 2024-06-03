const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  lawFirm: {
    type: String,
    required: [true, "Please provide lawFirm"],
    unique: false,
  },
  areaOfPractice: {
    type: String,
    required: [true, "Please provide area of practice"],
    unique: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
  subscriptionType: {
    type: String,
    default: "free",
  },
  subscriptionStartDate: {
    type: Date,
    default: Date.now,
  },
  subscriptionEndDate: {
    type: Date,
    default: function () {
      return new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days from now
    },
  },
  queries: [
    {
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});
// userSchema.pre("save", function (next) {
//   if (!this.subscriptionStartDate) {
//     this.subscriptionStartDate = new Date();
//   }

//   // Calculate the end date by adding 3 days to the start date
//   this.subscriptionEndDate = new Date(this.subscriptionStartDate);
//   this.subscriptionEndDate.setDate(this.subscriptionEndDate.getDate() + 3);

//   next();
// });

const User = mongoose.models.user || mongoose.model("user", userSchema);

module.exports = User;
