import {
  Text,
  CloudinaryImage,
  Integer,
  Relationship,
} from "@keystonejs/fields";
import { CloudinaryAdapter } from "@keystonejs/file-adapters";
import { byTracking, atTracking } from "@keystonejs/list-plugins";

const cloudinaryAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: "grond",
});

export default {
  fields: {
    name: { type: Text, isRequired: true },
    make: { type: text, isRequired: true },
    model: { type: text, isRequired: true },
    vin: { type: text, isRequired: true },
    year: { type: text, isRequired: true },
    description: { type: Text, isMultiline: true },
    image: { type: CloudinaryImage, adapter: cloudinaryAdapter },
    msrp: { type: Integer },
    user: {
      type: Relationship,
      ref: "User",
    },
  },
  access: {
    create: true,
    read: true,
    update: true,
    delete: true,
  },
  plugins: [atTracking(), byTracking()],
};
