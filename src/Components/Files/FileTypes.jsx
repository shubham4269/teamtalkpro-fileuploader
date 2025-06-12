export const ALLOWED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',       // .xlsx
  'text/plain',
];

export const MAX_FILE_SIZE_MB = 10;
export const MAX_FILE_SIZE = MAX_FILE_SIZE_MB * 1024 * 1024;