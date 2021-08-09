import { createClient } from 'pexels';

const API = '563492ad6f91700001000001150cc43db7ee4698be1689ceb38f8bb4'; //Добавьте свой ключ

const client = createClient(API);

export async function requestPexels(query) {
    const result = client.photos.search({ query, per_page: 20 }).then(photos => {
        console.log('Запрос в pexels');
        return photos
    });

    return await result
}

export const DEFAULT_OBJ = {
    // "total_results": 10000,
    // "page": 1,
    // "per_page": 1,
    // "photos": [
    //   {
        "id": 3573351,
        "width": 3066,
        "height": 3968,
        "url": "",
        "photographer": "Lukas Rodriguez",
        "photographer_url": "",
        "photographer_id": 1845331,
        "avg_color": "#374824",
        "src": {
          "original": "/Image/previewFeed.jpeg",
          "large2x": "/Image/previewFeed.jpeg",
          "large": "/Image/previewFeed.jpeg",
          "medium": "/Image/previewFeed.jpeg",
          "small": "/Image/previewFeed.jpeg",
          "portrait": "/Image/previewFeed.jpeg",
          "landscape": "/Image/previewFeed.jpeg",
          "tiny": "/Image/previewFeed.jpeg"
        },
        "liked": false
    //   }
    // ],
    // "next_page": ""
  }