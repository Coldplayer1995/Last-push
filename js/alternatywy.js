https://stackoverflow.com/questions/5072136/javascript-filter-for-objects

Object.filter = (obj, predicate) =>
Object.keys(obj)
      .filter( key => predicate(obj[key]) )
      .reduce( (res, key) => (res[key] = obj[key], res), {} );



var filtered = Object.filter(eventsData, event => event.type === "PushEvent"); // OBIEKT
//console.log(filtered);

var pusharr =Object.values(filtered); // TABLICA

//console.log(Object.values(filtered));
//console.log(Object.values(eventsData)) // TABLICA WSZYSTKICH EVENTÓW
