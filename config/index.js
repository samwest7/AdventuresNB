let s3PublicBucket = process.env.REACT_APP_S3_PUBLIC_BUCKET || 'adventuresnb-prod-static';
let s3PublicContentURL = `https://s3.amazonaws.com/${s3PublicBucket}`;

export default {
  DEFAULT_HOSPITAL_IMAGE: 'https://thumbs.dreamstime.com/b/emergency-hospital-building-17898695.jpg',
  FACEBOOK_API_KEY: process.env.REACT_APP_FACEBOOK_API_KEY || '1127821050688033',
  GOOGLE_MAPS_API_KEY: process.env.REACT_APP_MAPS_API_KEY || 'AIzaSyCzApBJPjXDwzbVFa3YBWZ-Y_oF5uI0D-E',
  S3_PUBLIC_BUCKET: s3PublicBucket,
  S3_PUBLIC_CONTENT_URL: s3PublicContentURL
};
