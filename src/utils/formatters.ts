import { TOPIC_DICTIONARY } from '../constants/topics';

export function formatProjectTitle(title: string): string {
  if (!title) return '';

  return title
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function formatTopic(topic: string): string {
  if (!topic) return '';

  const normalizedTopic = topic.toLowerCase();

  if (TOPIC_DICTIONARY[normalizedTopic]) {
    return TOPIC_DICTIONARY[normalizedTopic];
  }

  return normalizedTopic.charAt(0).toUpperCase() + normalizedTopic.slice(1);
}
