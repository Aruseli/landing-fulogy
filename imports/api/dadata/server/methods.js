/**
 * Created by fulogy on 16.08.17.
 */
import { Meteor } from 'meteor/meteor';

const API_KEY = 'b6cd036384b548b34dae3375ac97bbd67b8dbc78';

Meteor.methods({
    /**
     * @param {String} resource - <p>One of fio, address, party, bank, email</p>
     * @param {Object} query - <p>{query: ''}.</p>
     */
    'dadata.tips'(resource, query){
        this.unblock();

        const url = `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/${resource}`;

        const result = HTTP.post(url, {
            data: query,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Token ${API_KEY}`
            }
        });

        return result.data.suggestions;
    },

    /**
     * @param {String} resource - <p>One of address, phone, passport, name, email, birthdate, vehicle</p>
     * @param {Array} query - <p>['query'].</p>
     */
    'dadata.clean'(resource, query){
        const url = `https://dadata.ru/api/v2/clean/${resource}`;

        try {
            const result = HTTP.post(url, {
                data: query,
                headers: {
                    'Content-Type': 'application/json',
                    //'Accept': 'application/json',
                    'Authorization': `Token ${API_KEY}`,
                    'X-Secret': '78fb1533656188ac386332112757402e7653a3c1'
                }
            });
            return result.data;
        } catch (e) {
            console.log(e);
            return [];
        }
    },
});