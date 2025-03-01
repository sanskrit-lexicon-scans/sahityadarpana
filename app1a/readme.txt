
https://github.com/sanskrit-lexicon-scans/sahityadarpana/

cd /c/xampp/htdocs/sanskrit-lexicon-scans/sahityadarpana

mkdir app1
mkdir app1/pywork

-------------------------------------------
# Copy files from other sources.
# These will be adapted to sahityadarpana
cd /c/xampp/htdocs/sanskrit-lexicon-scans/sahityadarpana

# README.md
cp /c/xampp/htdocs/sanskrit-lexicon-scans/yajnavalkya/README.md README.md

# app1/readme_github_hosting.txt
cp /c/xampp/htdocs/sanskrit-lexicon-scans/yajnavalkya/app1/readme_github_hosting.txt app1/readme_github_hosting.txt

# app1/pywork/index.txt
cp /c/xampp/htdocs/sanskrit-lexicon/PWG/pwgissues/issue101/sahd_index_v1.txt app1/pywork/index.txt

# app1/pywork/make_js_index.py
cp /c/xampp/htdocs/sanskrit-lexicon/PWG/pwgissues/issue101/make_js_index.py app1/pywork/make_js_index.py

# app1/index.html, info.html, main.js, main.css
cp /c/xampp/htdocs/sanskrit-lexicon-scans/yajnyavalkya/app1/index.html app1/index.html

cp /c/xampp/htdocs/sanskrit-lexicon-scans/yajnyavalkya/app1/info.html app1/info.html

cp /c/xampp/htdocs/sanskrit-lexicon-scans/yajnyavalkya/app1/main.css app1/main.css

cp /c/xampp/htdocs/sanskrit-lexicon-scans/yajnyavalkya/app1/main.js app1/main.js


-------------------------------------------
# sahityadarpana/README.md
cd /c/xampp/htdocs/sanskrit-lexicon-scans/sahityadarpana
# manual edit README.md
# commit and push to github

-------------------------------------------------
Activate github hosting.

# manual edit readme_github_hosting.txt, using repo name sahityadarpana
# follow instructions in readme_github_hosting.txt


-------------------------------------------
# app1/index.js
cd /c/xampp/htdocs/sanskrit-lexicon-scans/sahityadarpana/app1/pywork
# follow instructions in app1/pywork/readme.txt to get app1/index.js

-------------------------------------------------
# app1/index.html
Manual edit
1. <title>sahityadarpana</title>
2. <span style="font-size:20px;">Sāhityadarpaṇa by Viśvanātha, James R. Ballantyne, 1851</span>

-------------------------------------------------
# app1/info.html
Manual edit
1. <title>sahityadarpana info</title>
2. <span style="font-size:20px;">Sāhityadarpaṇa by Viśvanātha, James R. Ballantyne, 1851</span>

-------------------------------------------------
# app1/main.js
Various changes
The app for sahityadarpana takes either
 1 numeric parameter  the verse
 2 numeric parameters  (the internal page number, line number within page)

pdf file names: sah-NNN.pdf   NNN is the 'external' page number
  NNN range 001 - 497 

-------------------------------------------------
-------------------------------------------------
app1 for sahityadarpana


cp 
Adapted from boesp1 app1


https://sanskrit-lexicon-scans.github.io/yajnavalkya/app1?N,N

yajn_NNN.pdf
yajnavalkya 
