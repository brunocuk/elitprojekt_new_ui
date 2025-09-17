const isDevelopment = () => process.env.NODE_ENV === 'development';
const API_PATH = isDevelopment() ? "https://exuberant-charity-7a1a3f0618.strapiapp.com" : "https://exuberant-charity-7a1a3f0618.strapiapp.com";
const SESSION_TOKEN = "SESSION_TOKEN";
const X_APPLICATION_TYPE = "x-application-type";
const IMG_PATH = 'https://diplan-strapi-aws-s3-images-bucket.s3.eu-north-1.amazonaws.com';

const UserTypes = {
    DS:"DS",
    USER:"USER"
}

const constantsExport = {
    API_PATH, IMG_PATH, SESSION_TOKEN, X_APPLICATION_TYPE, UserTypes
};

export default constantsExport;