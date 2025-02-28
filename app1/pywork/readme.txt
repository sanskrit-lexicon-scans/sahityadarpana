
# convert index.txt to index.js and move to app1/ folder

python make_js_index.py index.txt index.js
cp index.js ../index.js  # move up to app1 directory

-------------------------------------------------
Preliminary file copying:
# cd app1/pywork
--- for index.txt
cp /c/xampp/htdocs/sanskrit-lexicon/PWG/pwgissues/issue101/sahd_index_v1.txt index.txt


--- for make_js_index.py
cp /c/xampp/htdocs/sanskrit-lexicon/PWG/pwgissues/issue101/make_js_index.py make_js_index.py

