import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from './links';

export const SOCIAL_LIST = [
  { name: 'GitHub', url: GITHUB_URL, icon: <FiGithub /> },
  { name: 'Linkedin', url: LINKEDIN_URL, icon: <FiLinkedin /> },
  { name: 'E-mail', url: EMAIL_URL, icon: <FiMail /> },
];
