const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const EventSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      ref: "User",
    },
    image: {
      type: String,
    },
    title: {
      type: String,
      required: [true, "Por favor rellena el título del evento"],
    },
    content: {
      type: String,
      required: [true, "Por favor danos detalles del evento"],
    },
    eventDate: {
      type: Date,
      required: [true, "Por favor ingrese la fecha del evento"],
    },
    timeEvent: {
      type: String,
      required: [true, "Por favor ingrese la hora del evento"],
    },
    location: {
      type: String,
      required: [true, "Por favor ingrese la ubicación del evento"],
    },

    // commentIds: [{ type: ObjectId, ref: "Comment" }],
    // likes_event: [{ type: ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

EventSchema.index({
  title: "text",
});

EventSchema.methods.toJSON = function () {
  const event = this._doc;
  delete event.createdAt;
  delete event.updatedAt;
  delete event.__v;
  return event;
};

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
