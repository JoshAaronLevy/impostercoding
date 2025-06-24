import { writeFileSync } from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

const targetPath = './src/environments/environment.ts';
const envConfigFile = `
export const environment = {
  production: false,
  api_token: '${process.env.NG_APP_BUTTER_TOKEN}',
};
`;

writeFileSync(targetPath, envConfigFile);
console.log(`✅ Environment file generated at ${targetPath}`);
