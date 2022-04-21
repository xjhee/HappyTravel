
window.Buffer = window.Buffer || require("buffer").Buffer;

const baseUrl = "http://localhost:8081/api/v1/upload"

async function S3UploadService(file, region) {
    let data = new FormData();
    data.append('file', file);
    data.append('region', region);
    let s3FileData = await fetch(baseUrl, {
        method: "POST",
        body: data});
    let s3FileJson = await s3FileData.json();
    return await s3FileJson.url;
};

export default S3UploadService;