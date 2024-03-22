echo "run locale2json..."

node locale2json

echo "[" > menu-locale.json

gh api -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" /repos/whatap/whatap-front/contents/src/containers/Sitemap/locale/menu.ko.js >> menu-locale.json

echo "," >> menu-locale.json

gh api -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" /repos/whatap/whatap-front/contents/src/containers/Sitemap/locale/menu.en.js >> menu-locale.json

echo "," >> menu-locale.json

gh api -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" /repos/whatap/whatap-front/contents/src/containers/Sitemap/locale/menu.ja.js >> menu-locale.json

echo "]" >> menu-locale.json

echo "Add side menu items ..."

echo "Run side-menu-01 ..."
node side-menu-01

echo "Run side-menu-02 ..."
node side-menu-02 && echo "Remove unused files ..." && rm menu.en.js menu.ko.js menu.ja.js menu-locale.json

echo "Complete!!"