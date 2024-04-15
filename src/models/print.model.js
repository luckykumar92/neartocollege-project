import mongoose, { Schema } from "mongoose";

const printSchema = new Schema(
  {
    shopName: {
      type: String,
      required: true,
      trim: true,
    },
    shopLocation: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    contactNumber: {
      type: Number,
      required: true,
      lowercase: true,
      trim: true,
    },
    shopImage: {
      type: String,
    },
    paperTypes: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    paperSizes: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    printedColours: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    printingSides: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    coverOptions: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    bindingOptions: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    ratings: {
      type: String,
      default: 0,
    },
    perPageCost: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Print = mongoose.model("Print", printSchema);
