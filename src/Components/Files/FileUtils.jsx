
import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from './FileTypes';

// File validation
export const isValidFile = (file) => {
  if (!file) return { valid: false, message: 'No file selected' };
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return { valid: false, message: 'Unsupported file type' };
  }
  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, message: `File exceeds ${MAX_FILE_SIZE / 1024 / 1024}MB limit` };
  }
  return { valid: true, message: '' };
};


