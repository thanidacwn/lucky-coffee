const dotenv = require('dotenv');
const { Octokit } = require("@octokit/rest");
const asyncHandler = require('express-async-handler');
const { upload } = require('../utils/multerConfig');
dotenv.config();

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
});

const uploadImageHandler = asyncHandler(async (req, res) => {
    try {
        const { filename, buffer } = req.file;

        await octokit.repos.createOrUpdateFile({
            owner: process.env.GITHUB_USERNAME,
            repo: process.env.GITHUB_REPO,
            path: `frontend/public/images/${filename}`,
            message: `Upload Image ${filename}`,
            content: buffer.toString('base64'),
            committer: {
                name: process.env.GITHUB_USERNAME,
                email: process.env.GITHUB_EMAIL
            }
        });
        res.status(201).json({ message: "Upload Image Success" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

const uploadSingleHandler = asyncHandler(async (req, res) => {
    upload.single(req.file.fieldname)
});

const getImageHandler = asyncHandler(async (req, res) => { return; });

module.exports = { uploadImageHandler, getImageHandler, uploadSingleHandler};