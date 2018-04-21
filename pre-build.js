/**
 * Pre-build configuration using environment variables
 * Defaults:
 *   - SITE_STATS_ENABLED=false
 *   - SITE_COMMIT_SHA1=''
 *   - SITE_BUILD_URL=''
 */

const { writeFileSync } = require('fs');
const { resolve } = require('path');

const {
  SITE_STATS_ENABLED,
  SITE_COMMIT_SHA1,
  SITE_BUILD_URL,
} = process.env;

const gitURL = 'https://github.com/danhead/personal-site/commit/';
const dataPath = resolve(__dirname, 'config.json');

function generateTimestamp() {
  const now = new Date();
  const date = now.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const time = now.toLocaleTimeString('en-GB', {
    hour12: false,
  });
  return `${date} @ ${time}`;
}

const data = {
  config: {
    stats_enabled: SITE_STATS_ENABLED === 'true',
  },
  commit: {
    hash: SITE_COMMIT_SHA1,
    short_hash: SITE_COMMIT_SHA1 && SITE_COMMIT_SHA1.slice(0, 5),
    url: SITE_COMMIT_SHA1 && gitURL + SITE_COMMIT_SHA1,
  },
  build: {
    url: SITE_BUILD_URL,
    timestamp: generateTimestamp(),
  },
};

writeFileSync(dataPath, JSON.stringify(data));
