// https://velog.io/@modolee/mongodb-document-to-javascript-object
const { Schema, model } = require("mongoose");

const EventSchema = Schema({
  title: {
    type: String,
    required: [true, "제목을 입력해주세요..."],
  },

  start: {
    type: Date,
    required: [true, "시작일을 입력해주세요..."],
  },

  end: {
    type: Date,
    required: [true, "마감일을 입력해주세요..."],
  },

  notes: {
    type: String,
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "작성자를 설정해주세요..."],
  },
});

EventSchema.methods.toJSON = function () {
  const { __v, ...event } = this.toObject();
  return event;
};

module.exports = model("Event", EventSchema);
