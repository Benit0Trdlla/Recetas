import { v2 as cloudinary } from 'cloudinary';
import { env } from 'process';

// Configuration
cloudinary.config({
    cloud_name: 'drnwg12ic',
    api_key: env.API_KEY,
    api_secret: env.API_SECRET // Click 'View API Keys' above to copy your API secret
});

export default cloudinary