const fs = require('fs');
const path = require('path');
const { v2: cloudinary } = require('cloudinary');



cloudinary.config({
 cloud_name: 'ddvhik9jq', 
        api_key: '589832825333848', 
        api_secret: '8UanIa4KU54dOefrXfi1g7oQ6ZM'
});

const reelsDir = path.join(__dirname, 'reels');
const postersDir = path.join(__dirname, 'posters');
const outputJsonPath = path.join(__dirname, 'uploaded.json');

// 2. Upload single file helper
async function uploadFile(filePath, folder) {
  try {
    const res = await cloudinary.uploader.upload(filePath, {
      resource_type: 'auto',
      folder,
    });
    return res.secure_url;
  } catch (err) {
    console.error(`❌ Failed to upload ${filePath}:`, err.message);
    return null;
  }
}

async function uploadAll() {
  const uploaded = [];

  const files = fs.readdirSync(reelsDir).filter(f => f.endsWith('.mp4'));

  for (const file of files) {
    const baseName = path.parse(file).name;
    const videoPath = path.join(reelsDir, file);
    const posterPath = path.join(postersDir, `${baseName}.jpg`);

    console.log(`📤 Uploading ${file} and poster ${posterPath}....`);

    const videoUrl = await uploadFile(videoPath, 'reels');
    const posterUrl = fs.existsSync(posterPath)
      ? await uploadFile(posterPath, 'posters')
      : null;

    if (videoUrl) {
      uploaded.push({
        video: videoUrl,
        poster: posterUrl,
      });
      console.log(`✅ Uploaded: ${baseName}`);
    } else {
      console.warn(`⚠️ Skipped ${baseName}, video upload failed`);
    }
  }

  // 3. Save JSON
  fs.writeFileSync(outputJsonPath, JSON.stringify(uploaded, null, 2));
  console.log(`📄 All uploads done. JSON saved to uploaded.json`);
}

uploadAll();
