import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('http://localhost:3000/scoops', () => {
        return HttpResponse.json([
            { name: 'Chocolate', imagePath: '/images/chocolate.png' },
            { name: 'Vanilla', imagePath: '/images/vanilla.png' },
        ])
    }),
]
