import { findFreeTimes } from './function.js';
import moment from 'moment';
import data from './data';

it('findFreeTimes', () => {
    const start = moment('2017-02-21T08:00:00-05:00');
    const end = moment('2017-02-21T18:00:00-05:00');


    var events = [
        {
            "start": `${start}`,
            "end": "2017-02-21T03:00:00-05:00"
        },
        {
            "start": "2017-02-21T05:00:00-05:00",
            "end": "2017-02-21T06:00:00-05:00"
        },
        {
            "start": "2017-02-21T07:00:00-05:00",
            "end": "2017-02-21T08:00:00-05:00"
        },
        {
            "start": "2017-02-21T09:10:00-05:00",
            "end": "2017-02-21T13:00:00-05:00"
        },
        {
            "start": "2017-02-21T15:45:00-05:00",
            "end": `${end}`
        }
    ];



    var freeSlots = findFreeTimes(start, end, 30, data);
    expect(freeSlots).toMatchObject(events);

});


