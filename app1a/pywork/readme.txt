# index for paricCeda, kArikA indexing of sahityadarpana.
#  This indexing is used by MW.

# convert index.txt to index.js and move to app1/ folder

python make_js_index.py indexa.txt index.js
cp index.js ../index.js  # move up to app1 directory

-------------------------------------------------
Preliminary file copying:

---
index.txt copied from ../app1/pywork/index.txt
---
indexa.txt slightly altered from index.txt
  When paricCeda changes within a page.

make_js_index.py
--- adapted from app1/make_js_index.py
output the corresponding adhyay, paricCeda.
Ref: https://github.com/sanskrit-lexicon/PWG/issues/101#issuecomment-2691357944

