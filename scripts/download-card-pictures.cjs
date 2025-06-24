const fs = require('fs')
const https = require('https')
const Papa = require('papaparse')
const sha1 = require('js-sha1')

const parser = function (callback) {
    fs.readFile('src/data/csv/cards.csv', 'utf8', (err, data) => {

        if (err) {
            console.error('Error reading cards.csv', err);
            return;
        }

        const results = Papa.parse(data, {
            header: false,
            delimiter: ',',
            skipEmptyLines: true
        });

        if (results.errors && results.errors.length > 0) {
            console.log(`Encountered ${results.errors.length} errors during CSV parsing:`);
            for (const error of results.errors) {
                console.log('    ', error);
            }
            return;
        }

        console.log(`Parsed ${results.data.length} CSV rows; metadata:`, results.meta);


        const rows = results.data
            .filter((_, idx) => idx > 0) // Skip header
            .map(row => {
                const [expansion, deck, territory, name, type, details, pictureUrl] = row;
                const pictureSource = pictureUrl.trim();
                const pictureTarget = sha1(pictureSource.trim()) + '.png';
                return {
                    expansion: expansion.trim(),
                    deck: deck.trim(),
                    territory: territory.trim(),
                    name: name.trim(),
                    type: type.trim(),
                    details: details.trim(),
                    pictureSource,
                    pictureTarget
                };
            });

        console.log(`Processed ${rows.length} rows`);

        //const expansionSorting = { 'Base game': 0, 'Hearts of Stone': 1, 'Blood and Wine': 2 };
        const expansionSorting = ['Base game', 'Hearts of Stone', 'Blood and Wine'];
        rows.sort((l, r) => {
            if (l.expansion === r.expansion) {
                return l.name.localeCompare(r.name);
            }
            return expansionSorting.indexOf[l.expansion] < expansionSorting.indexOf[r.expansion];
        });

        callback(rows);
    });
};

try {
    fs.mkdirSync('public/cards');
} catch (err) {
    if (err.code !== 'EEXIST') {
        throw err
    }
}

parser(data => {
    let i = 0;
    for (const row of data) {
        i++;
        const pictureSource = row.pictureSource;
        const pictureTarget = row.pictureTarget;
        const filePath = `public/cards/${pictureTarget}`;

        console.log(`[${i}/${data.length}] Downloading ${pictureSource} to ${filePath}`);

        const file = fs.createWriteStream(filePath);
        https.get(pictureSource, response => {
            response.pipe(file);
            file.on('finish', () => file.close());
        }).on('error', err => { // Handle errors
            console.error(`Error downloading ${pictureSource}`, err);
            fs.unlink(filePath, err => {
                console.log(err)
            }); // Delete the file async. (But we don't check the result)
        });
    }
    console.log(`Download of ${data.length} pictures initiated`)
});