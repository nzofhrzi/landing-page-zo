// api/saveData.js - Vercel Serverless Function
// Deploy ini ke folder /api/saveData.js di repo Vercel

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { action, token, data } = req.body;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  const GITHUB_USERNAME = 'nzofhrzi';
  const REPO_NAME = 'landing-page-zo';
  const FILE_PATH = 'data.json';
  const API_URL = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/${FILE_PATH}`;

  try {
    if (action === 'save') {
      // Get current file SHA (required for update)
      let sha = null;
      try {
        const getResponse = await fetch(API_URL, {
          headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        
        if (getResponse.ok) {
          const fileData = await getResponse.json();
          sha = fileData.sha;
        }
      } catch (err) {
        console.log('File does not exist yet, will create new');
      }

      // Prepare commit message
      const commitMessage = `Update portfolio data - ${new Date().toLocaleString()}`;

      // Prepare payload
      const payload = {
        message: commitMessage,
        content: Buffer.from(JSON.stringify(data, null, 2)).toString('base64'),
        branch: 'main'
      };

      if (sha) {
        payload.sha = sha; // Update existing file
      }

      // Push to GitHub
      const response = await fetch(API_URL, {
        method: 'PUT',
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to save data');
      }

      const result = await response.json();
      return res.status(200).json({
        success: true,
        message: 'Data saved to GitHub successfully',
        commit: result.commit.sha
      });
    }

    if (action === 'load') {
      // Fetch data from GitHub
      const response = await fetch(
        `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/main/${FILE_PATH}`,
        {
          headers: {
            'Accept': 'application/vnd.github.v3.raw'
          }
        }
      );

      if (!response.ok) {
        throw new Error('Failed to load data');
      }

      const data = await response.json();
      return res.status(200).json({
        success: true,
        data: data
      });
    }

    return res.status(400).json({ error: 'Invalid action' });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({
      error: 'Server error',
      details: error.message
    });
  }
}

// ============ HOW TO DEPLOY ============
// 1. Create /api folder in your GitHub repo root
// 2. Save this file as /api/saveData.js
// 3. Connect repo to Vercel (https://vercel.com)
// 4. Vercel akan auto-detect dan deploy
// 5. Function akan accessible di: https://your-vercel-app.vercel.app/api/saveData
//
// USAGE di admin.html:
// async function saveToGitHub() {
//   const token = localStorage.getItem('github_token');
//   const response = await fetch('/api/saveData', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       action: 'save',
//       token: token,
//       data: currentData
//     })
//   });
//   const result = await response.json();
//   console.log(result);
// }

