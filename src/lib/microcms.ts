import { createClient } from 'microcms-js-sdk';

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
  throw new Error('microCMSの環境変数が設定されていません。');
}

export const client = createClient({
  serviceDomain,
  apiKey,
});

export type Project = {
  id: string;
  title: string;
  body: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  createdAt: string;
  updatedAt: string;
};

export async function getProjects() {
  try {
    console.log('Fetching projects...');
    
    const data = await client.get({
      endpoint: 'projects',
      queries: { 
        orders: '-createdAt',
        fields: ['id', 'title', 'body', 'image']
      },
    });
    
    console.log('Projects fetched successfully:', data);
    return data.contents;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    if (error instanceof Error) {
      throw new Error(`プロジェクトの取得に失敗しました: ${error.message}`);
    }
    throw new Error('プロジェクトの取得に失敗しました。');
  }
} 