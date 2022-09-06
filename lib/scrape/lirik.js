const axios = require("axios")
const cheerio = require("cheerio")

exports.Musikmatch = (querry) => {
        return new Promise((resolve, reject) => {
            axios.get(`https://www.musixmatch.com/search/${querry}`, {
                method: "GET",
                headers: {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "en-US,en;q=0.9,id;q=0.8",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
                }
            }).then( has => {
                const $ = cheerio.load(has.data);
                const Url = $('#search-all-results > div.main-panel > div').find('div.box-content > div > ul > li > div > div.media-card-body > div > h2 > a').attr('href');
                axios.get(`https://www.musixmatch.com${Url}`, {
                    method: "GET",
                    headers: {
                        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                        "accept-language": "en-US,en;q=0.9,id;q=0.8",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
                    }
                }).then( res => {
                    const $ = cheerio.load(res.data);
                    const judul = $('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-10.col-md-8.col-ml-9.col-lg-9.static-position > div.track-title-header > div.mxm-track-title > h1').text().trim();
                    const artis = $('#site > div > div > div > main > div > div > div > div > div > div > div> div > div > h2 > span').text().trim();
                    const thumb = $('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div > img').attr('src');
                    const lirik = [];
                    $('#site > div > div > div > main > div > div > div.mxm-track-lyrics-container').find('div.container > div > div > div > div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function (a, b) {
                        const isi = $(b).find('span').text().trim();
                        lirik.push(isi);
                    });
                    const result = {
                        status: res.status,
                        author: "Irfan",
                        result: {
                            judul: judul.replace('Lyrics', ''),
                            penyanyi: artis,
                            thumb: "https:" + thumb,
                            lirik: lirik[0]
                        }
                    };
                    resolve(result);
                });
            }).catch(reject);
        });
}
