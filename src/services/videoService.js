import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = 'https://rpwbrijcxfdgvmiwtuev.supabase.co';
const PUBLIC_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwd2JyaWpjeGZkZ3ZtaXd0dWV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxODk2NjksImV4cCI6MTk4Mzc2NTY2OX0.Lll4BNNfElyCPFyWidyOWJf5RwlDBsX_XvlK2iXMQPo';
const subapase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return subapase.from('video').select('*');
    },
  };
}
