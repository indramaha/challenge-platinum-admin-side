export function GetParsedDate(date){
    date = String(date).split(' ');
        var days = String(date[0]).split('-');
        var hours = String(date[1]).split(':');
        return [parseInt(days[0]), parseInt(days[1])-1, parseInt(days[2]), parseInt(hours[0]), parseInt(hours[1]), parseInt(hours[2])];
    }

    // var date = new Date(...GetParsedDate('2016-01-04 10:34:23'));
    // console.log(date);