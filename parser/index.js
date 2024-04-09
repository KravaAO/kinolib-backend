const axios = require('axios');
const cheerio = require('cheerio');

class HTMLParser {
    constructor(url) {
        this.url = url;
    }

    async getSerials() {
        try {
            const response = await axios.get(this.url);
            const $ = cheerio.load(response.data);

            $('.short-item').each((index, element) => {
                const title = $(element).find('.th-title').text().trim();
                const originalTitle = $(element).find('.th-title-oname').text().trim();
                const seasonInfo = $(element).find('.short-label-level-1').text().trim();
                const episodeInfo = $(element).find('.short-label-level-2').text().trim();
                const imageUrl = $(element).find('img').attr('src');
                const link = $(element).find('a').attr('href');

                console.log('Title:', title);
                console.log('Original Title:', originalTitle);
                console.log('Season Info:', seasonInfo);
                console.log('Episode Info:', episodeInfo);
                console.log('Image URL:', imageUrl);
                console.log('Link:', link);
                console.log('------------------------------------');
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

const parser = new HTMLParser('https://uaserials.pro/');
parser.getSerials();
