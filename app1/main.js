// (setq js-indent-level 1)  # for Emacs

function makelink(indexobj,txt) {
 let href = window.location.href;
 //let url = new URL(href);
 //let search = url.search  // a string, possibly empty
 let base = href.replace(/[?].*$/,'');
 /*
 let adhy = indexobj.adhy;
 let v2 = indexobj.v2;
 let newsearch = `?${adhy},${v2}`;
 */
 let ipage = indexobj.ipage;
 let newsearch = `?${ipage},1`;
 let newhref = base + newsearch;
 let html = `<a class="nppage" href="${newhref}"><span class="nppage">${txt}</span></a>`;
 return html;
}
function display_ipage_id(indexes) {
 //console.log('display_ipage_id: indexes=',indexes);
 [indexprev,indexcur,indexnext] = indexes;
 let prevlink = makelink(indexprev,'<');
 let nextlink = makelink(indexnext,'>');

 //let vp = indexcur['vp'];
 //let v = vp.substring(0,1);
 //let p = vp.substring(1,4);
 //let ip = parseInt(p);
 // p is External page number.
 let ipage = indexcur['ipage'];

 let span = `<span class="nppage">`;
 let html = `<p>${prevlink} ${span}Page ${ipage}</span> ${nextlink}</p>`;
 
 let elt = document.getElementById('ipageid');
 elt.innerHTML = html;
}

function get_pdfpage_from_index(indexobj) {
/* indexobj assumed an element of indexdata
 return name of pdf 
 
 yajn_029.pdf  example vp = "1029"  The '1' is gratuitous
*/
 let vp = indexobj['vp'];  // NNN
 let pdf = `sah-${vp}.pdf`;
 return pdf;
}

function get_ipage_html(indexcur) {
 let html = null;
 if (indexcur == null) {return html;}
 let pdfcur = get_pdfpage_from_index(indexcur);
 //console.log('pdfcur=',pdfcur);
 let urlcur = `../pdfpages/${pdfcur}`;
 let android = ` <a href='${urlcur}' style='position:relative; left:100px;'>Click to load pdf</a>`;
 let imageElt = `<object id='servepdf' type='application/pdf' data='${urlcur}' 
              style='width: 98%; height:98%'> ${android} </object>`;
 //console.log('get_ipage_html. imageElt=',imageElt);
 return imageElt;
}

function display_ipage_html(indexes) {
 display_ipage_id(indexes);
 let html = get_ipage_html(indexes[1]);
 let elt=document.getElementById('ipage');
 elt.innerHTML = html;
}

function get_indexobjs_from_verse_1parm(verse) {
 // verse is array of length 1
 let icur = -1;
 for (let i=0; i < indexdata.length; i++ ) {
  let obj = indexdata[i];
  if ((obj.v1 <= verse[0]) && (verse[0] <= obj.v2)) {
   icur = i;
   break;
  }
 }
 return icur;
}

function get_indexobjs_from_verse_2parm(verse) {
 // verse = ipage, linenum. match
 let ipage = verse[0];
 let icur = -1;
 for (let i=0; i < indexdata.length; i++ ) {
  let obj = indexdata[i];
  if (obj.ipage == ipage) {
   icur = i;
   break;
  }
 }
 return icur;
}
function get_indexobjs_from_verse(verse) {
 // uses indexdata from index.js
 // verse is an array of integers
 // verse = [] indicates no verse found
 let icur;
 let nparm = verse.length;
 //console.log('get_indexobjs_from_verse:',verse,nparm);
 if (nparm == 0) {
  icur = -1;
 } else if (nparm == 1) {
  icur = get_indexobjs_from_verse_1parm(verse);
 } else if (nparm == 2) {
  icur = get_indexobjs_from_verse_2parm(verse);
 } else {
  icur = -1;
 }

 let ans, prevobj, curobj, nextobj
 if (icur == -1) {
  // default
  prevobj = indexdata[0];
  curobj = indexdata[0];
  nextobj = indexdata[1];
  ans  = [indexdata[0],indexdata[1],indexdata[2]];
 } else {
  curobj = indexdata[icur];
  if (icur <= 0) {
   prevobj = curobj;
  } else {
   prevobj = indexdata[icur - 1];
  }
  let inext = icur + 1;
  if (inext < indexdata.length) {
   nextobj = indexdata[inext];
  }else {
   nextobj = curobj;
  }
 }
 ans = [prevobj,curobj,nextobj];
 return ans;
}

function get_verse_from_url() {
 /* return 2-tuple of int numbers derived from url search string.
    Returns [0,0] if no match
*/
 let href = window.location.href;
 let url = new URL(href);
 // url = http://xyz.com?X ,
 // search = ?X
 // search.match is either null or an array
 let search = url.search;  // a string, possibly empty
 let defaultval = []; // default value (title verse)
 // try 2 parameters
 //console.log('search=',search);
 let x = search.match(/^[?]([0-9]+),([0-9]+)$/);
 //console.log('x (2parm) =',x);
 let nparm = 0;
 if (x != null) {
  nparm = 2;
 }
 if (x == null) {
  // try 1 parameter
  x = search.match(/^[?]([0-9]+)$/);
  //console.log('x (1parm) =',x);
  if (x != null) {
   nparm = 1;
  }
 }
 
 if (x == null) {
  return defaultval;
 }
 // x is an array 
 // convert to array of ints
 iverse = [];
 for(let i=0;i<nparm;i++) {
  iverse.push(parseInt(x[i+1]));
 }
 return iverse;
}

function display_ipage_url() {
 let url_verse = get_verse_from_url();
 //console.log('url_verse=',url_verse);
 let indexobjs = get_indexobjs_from_verse(url_verse);
 //console.log('indexobjs=',indexobjs);
 display_ipage_html(indexobjs);
}

document.getElementsByTagName("BODY")[0].onload = display_ipage_url;

