import { environment } from '@/environments/environment';
import Butter from 'buttercms';

export const butterService = Butter(environment.api_token);