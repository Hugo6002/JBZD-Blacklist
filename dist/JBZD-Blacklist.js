// ==UserScript==
// @name         JBZD-Blacklist
// @namespace    https://github.com/Hugo6002/JBZD-Blacklist/
// @version      0.1
// @description  Czarna lista działów
// @author       Hugo6002
// @match        https://jbzd.com.pl/*
// @match        https://m.jbzd.com.pl/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jbzd.com.pl
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function cleanCategory() {
    let fullPath = window.location.href;
    let pathArray = fullPath.split('/');

    let dzialy
    let podDzialy

    switch (pathArray[3]) {
        case "oczekujace": // tutaj podajesz miejsce, w którym czarna lista ma działać np.  dla poczekalni będą to oczekujace dla witam będzie to nsfw, a dla harda hard
            dzialy = ["Humor", "Świat"] // Tu podajesz dział, który chcesz zablokować według schematu widocznego po lewej
            podDzialy = ["Czarny Humor"] // A tu poddział według tego samego schematu (Działy i poddziały są od siebie niezależne)
    }

    function cleanCategory(dzial, typ) {
        const allPost = document.querySelectorAll('.article');

        allPost.forEach((post) => {
            const category = post.querySelector(typ);

            if (category && category.textContent === dzial) {
                post.remove();
            }
        });
    }

    for (let i = 0; i < dzialy.length; i++) {
        let dzial = dzialy[i]
        cleanCategory(dzial, '.article-category')
        cleanCategory(dzial, '.article-category-parent')
    }

    for (let i = 0; i < podDzialy.length; i++) {
        let dzial = podDzialy[i]
        cleanCategory(dzial, '.article-category')
    }
    }
    cleanCategory()
})();
