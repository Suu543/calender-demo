// https://velog.io/@modolee/mongodb-document-to-javascript-object
const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, "이름을 입력해주세요..."],
  },

  email: {
    type: String,
    required: [true, "이메일을 입력해주세요..."],
    lowercase: true,
    unique: true,
  },

  password: {
    type: String,
    required: [true, "비밀번호를 입력해주세요..."],
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, password, ...user } = this.toObject();
  return user;
};

module.exports = model("User", UserSchema);
