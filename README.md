# Dom.ba novi frontend
Repository sa prijedlogom za novi izgled za potral [dom.ba](http://dom.ba/)

## Struktura projekta
- Radna verzija projekta se nalazi u folderu app \(uključujući i sve potrebne assete, framework-e\).
- Kompajlirana verzija se nalazi u root\-u projekta i uključuje foldere: css, fonts, images, js.

## Prije instalacije
Potrebno je da su na lokajnoj mašini instalirani:
- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/)
- [GulpJS](http://gulpjs.com/)
- [Bower](https://bower.io/)

## Korišteni framework\-ci:
- [Jquery](https://jquery.com/) 2.2.3
- [Bootstrap](http://getbootstrap.com/) 3.3.7
- [Animate.css](https://daneden.github.io/animate.css/) 3.5.2
- [Ion.rangeSlider](http://ionden.com/a/plugins/ion.rangeSlider/en.html) 2.1.6
- [Font-awesome](http://fontawesome.io/) 4.6.1
- [Slick-carousel](http://kenwheeler.github.io/slick/) 1.5.9

## Instalacija na lokal
**U sličaju da je korisniku potrebna samo kompajlirana verzija ovi koraci nisu potrebni**
Poslije kloniranja projekta na lokalnu mašinu potrebno je uraditi sledeće korake:
- `npm install`
instalacija gulp\-a i bower\-a (omogućava daljnu modifikaciju)
- `bower install`
instalacija bootstrap\-a, jquery\-a,...

## Daljna modifikacija
### Preporuke:
- **izmjene vršiti u app folderu**
- Osnovni parametri(boje...) css\-a se nalaze u app/less/my-variables.less
- Svaka sekcija stranice posjeduje vlastite parametre i vlastiti less fajl radi lakšeg snalaženja

### Komande za modifikaciju:
- `gulp watch` \- pokreće lokalni server na kojem servira radnu verziju, uživo prikazuje izmjene na html, js i css\(less\) fajlovima
- `gulp useref` \- kompajlira HTML, CSS i JS fajlove iz app foldera u root
- `gulp images` \- kopira slike iz radnog foldera \(app\) u folder images \(na root\-u\)
- `gulp less` \- kompajlira less u css \(sve unutar radnog foldera\)