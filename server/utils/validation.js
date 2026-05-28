const mongoose = require("mongoose");

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidUrl = (value) =>
  /^https?:\/\/\S+$/i.test(value);

const normalizeString = (value) =>
  typeof value === "string" ? value.trim() : "";

module.exports = {
  isValidObjectId,
  isValidEmail,
  isValidUrl,
  normalizeString,
};
