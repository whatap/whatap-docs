echo "run locale2json..."

node locale2json

echo "[" > menu-locale.json

gh api -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" /repos/whatap/whatap-front/contents/apps/whatap-front/src/fsd/common/5_entities/localization/const/locale/menu.ko.ts >> menu-locale.json

echo "," >> menu-locale.json

gh api -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" /repos/whatap/whatap-front/contents/apps/whatap-front/src/fsd/common/5_entities/localization/const/locale/menu.en.ts >> menu-locale.json

echo "," >> menu-locale.json

gh api -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" /repos/whatap/whatap-front/contents/apps/whatap-front/src/fsd/common/5_entities/localization/const/locale/menu.ja.ts >> menu-locale.json

echo "]" >> menu-locale.json

echo "Add side menu items ..."

echo "Run side-menu-01 ..."
node side-menu-01

echo "Run side-menu-02 ..."
node side-menu-02 && echo "Remove unused files ..." && rm menu.en.ts menu.ko.ts menu.ja.ts menu-locale.json

echo "run locale2report ..."
node report2json

echo "Complete!!"