"use strict";
exports.__esModule = true;
var egs = new Map([
    ['MU', 8], ['KL', 8], ['IN', 8], ['CH', 8],
    ['FF', 8], ['GE', 8], ['KO', 8], ['KK', 8]
]);
var koerTal = new Map([
    ['Fliegen', 8], ['Gaukeleien', 8], ['Klettern', 8],
    ['Körperbeherrschung', 8], ['Kraftakt', 8], ['Reiten', 8],
    ['Schwimmen', 8], ['Selbstbeherrschung', 8], ['Singen', 8],
    ['Sinnesschärfe', 8], ['Tanzen', 8], ['Taschendiebstahl', 8],
    ['Verbergen', 8], ['Zechen', 8]
]);
var geseTal = new Map([
    ['Bekehren&Überzeugen', 8], ['Einschüchtern', 8], ['Etikette', 8],
    ['Gassenwissen', 8], ['Meschenkenntis', 8], ['Überreden', 8],
    ['Verkleiden', 8], ['Willenskraft', 8]
]);
var wildTal = new Map([
    ['Fährtenlesen', 8], ['Fesseln', 8], ['Fischen&Angeln', 8],
    ['Orientierung', 8], ['Pfalnzenkunde', 8], ['Tierkunde', 8],
    ['Wildnisleben', 8]
]);
var wissTal = new Map([
    ['Brett-&Glücksspiel', 8], ['Geographie', 8], ['Geschichtswissen', 8],
    ['Götter&Kulte', 8], ['Kriegskunst', 8], ['Magiekunde', 8],
    ['Mechanik', 8], ['Rechnen', 8], ['Rechtskunde', 8],
    ['Sagen&Legenden', 8], ['Sphäenkunde', 8], ['Sternkunde', 8]
]);
var handTal = new Map([
    ['Alchemie', 8], ['Boote&Schiffe', 8], ['Handel', 8],
    ['Heilkunde Gift', 8], ['Heilkunde Krankheiten', 8],
    ['Heilkunde Wunden', 8], ['Holzbearbeitung', 8], ['Lebensmittelbearbeitung', 8],
    ['Lederbearbeitung', 8], ['Malen&Zeichnen', 8], ['Metallbearbeitung', 8],
    ['Musizieren', 8], ['Schlösserknacken', 8], ['Steinbearbeitung', 8],
    ['Stoffbearbeitung', 8]
]);
/** Sets a new value for a specified talent or attribute.
 * Input: type as string ('Körper'), talent as string ('Kraftakt'), num as number (10)
 * Output: None
*/
function setValue(type, talent, num) {
    switch (type) {
        case 'Körper':
            koerTal.set(talent, num);
            break;
        case 'Gesellschaft':
            geseTal.set(talent, num);
            break;
        case 'Wildnis':
            wildTal.set(talent, num);
            break;
        case 'Wissen':
            wissTal.set(talent, num);
            break;
        case 'Handwerk':
            handTal.set(talent, num);
            break;
        case 'Eigenschaft':
            egs.set(talent, num);
            break;
    }
}
