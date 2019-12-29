const _ = require('lodash') 

const a =_.chunk(['a', 'b', 'c', 'd'], 2);
// console.log(a)  // [['a', 'b'], ['c', 'd']]

const b =_.compact([0, 1, false, 2, '', 3]);
// console.log(b)  // [1, 2, 3]

const c = [1];
var d = _.concat(c, 2, [3], [[4]]);
// console.log(d)  // [ 1, 2, 3, [ 4 ] ]

const e = _.difference([3, 2, 1], [4, 2]);
// console.log(e) // => [3, 1]


const f = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
const g = _.findIndex(f, function(o) { return o.user == 'barney'; });
// console.log(g) // 0
const h = _.findIndex(f, { 'user': 'fred', 'active': false });
// console.log(h) // 1

const i = [1, [2, [3, [4]], 5]];
 
const j = _.flattenDepth(i, 1);
// console.log(j) // [1, 2, [3, [4]], 5]
 
const k = _.flattenDepth(i, 2);
// console.log(k) // [1, 2, 3, [4], 5]

const l =_.uniq([2, 1, 2]);
// console.log(l) // [2, 1]

const m=_.zip(['fred', 'barney'], [30, 40], [true, false]);
// console.log(m) // => [['fred', 30, true], ['barney', 40, false]]

const n=_.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// console.log(n) // => { 'a': 1, 'b': 2 }

const o = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
 
const p = _.findKey(o, function(o) { return o.age < 40; });
// console.log(p) // => 'barney' (iteration order is not guaranteed)
 
// The `_.matches` iteratee shorthand.
const q= _.findKey(o, { 'age': 1, 'active': true });
// console.log(q) // => 'pebbles'
 

const r = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
 
const s = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};
 
const t =_.merge(r, s);
// console.log(t) // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

const u = { 'a': 1, 'b': '2', 'c': 3 };
 
const v =_.pick(u, ['a', 'c']);

// console.log(v) // { 'a': 1, 'c': 3 }


const w = _.includes([1, 2, 3], 1);
// console.log(w) //  true
 
const x = _.includes([1, 2, 3], 1, 2);
// console.log(x) // false

function square(n) {
  return n * n;
}
 
const y = _.map([4, 8], square);
//console.log(y) //  [16, 64]
 
const aa = _.map({ 'a': 4, 'b': 8 }, square);
//console.log(aa) //  [16, 64]

const ab = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

const ac = _.map(ab, 'user');
// console.log(ac) //  ['barney', 'fred']

const ad = [{ 'a': 1 }, { 'b': 2 }];
 
const ae = _.clone(ad);
console.log(ad[0] === ae[0]);
// => true

const af = [{ 'a': 1 }, { 'b': 2 }];
 
const ag = _.clone(ad);
console.log(af[0] === ag[0]); //地址指针不一样