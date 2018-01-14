document.addEventListener('DOMContentLoaded', function() {

    function dropMenu() {
        var dropdownMenu = document.querySelectorAll('.site-menu>li');
        dropdownMenu.forEach(function(li) {
            li.addEventListener('mouseover', function() {
                var sublist = li.querySelector('.dropdown');
                if (sublist !== null) {
                    sublist.style.display = 'block';
                }
            });

            li.addEventListener('mouseout', function() {
                var sublist = li.querySelector('.dropdown');
                if (sublist !== null) {
                    sublist.style.display = 'none';
                }
            });
        });
    }
    dropMenu();

    function slider() {
        var next = document.querySelector('.site-slider .next');
        var prev = document.querySelector('.site-slider .previous');
        var list = document.querySelectorAll('.site-slider .slider-item');
        var index = 0;

        next.addEventListener('click', function(e) {
            e.preventDefault();
            list[index].classList.add('invisible');
            index++;
            if (index >= list.length) {
                index = 0;
            };
            list[index].classList.remove('invisible');
        });

        prev.addEventListener('click', function(e) {
            e.preventDefault();
            list[index].classList.add('invisible');
            index--;
            if (index < 0) {
                index = list.length-1;
            };
            list[index].classList.remove('invisible');
        });
    }
    slider();

    function hideName() {
        var offerImg = document.querySelectorAll('.site-offer .chair');

        offerImg.forEach(function(element) {
            element.addEventListener('mouseover', function() {
                var offerTitle = this.querySelector('.offer-title');
                offerTitle.classList.add('invisible');
            });

            element.addEventListener('mouseout', function() {
                var offerTitle = this.querySelector('.offer-title');
                offerTitle.classList.remove('invisible');
            });
        });
    }
    hideName();

    function calculator() {

        //dropdown list
        var arrows = document.querySelectorAll('.order-choice .arrow');
        var orderDropdown = document.querySelectorAll('.order-choice .dropdown');
        arrows.forEach(function(element, index) {
            element.addEventListener('click', function() {
                orderDropdown[index].classList.toggle('hidden');
            });
        });

        //choose transport
        var checkbox = document.querySelector('.site-order [type="checkbox"]');
        checkbox.addEventListener('click', function() {
            if (this.checked) {
                summaryFeatures[3].innerText = 'transport';
                summaryPrices[3].innerText = this.dataset.transport;
                sum += Number(summaryPrices[3].innerText);
                summaryTotal.innerText = sum + " zł";
            } else {
                summaryFeatures[3].innerText = '';
                summaryPrices[3].innerText = '';
                sum -= this.dataset.transport;
                summaryTotal.innerText = sum + " zł";
            }
        });

        //choose features
        var selector = document.querySelectorAll('.order-choice span');
        var chairs = selector[0];
        var colors = selector[1];
        var materials = selector[2];
        var itemsList = document.querySelectorAll('.dropdown li');
        var summaryFeatures = document.querySelector('.order-summary-features').children;
        var summaryPrices = document.querySelector('.order-summary-prices').children;
        var sum = 0;
        var summaryTotal = document.querySelector('.order-summary-total .order-chair-price');


        for (var i = 0; i < itemsList.length; i++) {
            itemsList[i].addEventListener('click', function() {
                this.parentElement.classList.add('hidden');
                this.parentElement.parentElement.firstElementChild.innerText = this.innerText;

                switch (chairs.innerText) {
                    case 'Chair Clair':
                        summaryFeatures[0].innerText = 'Chair Clair'
                        summaryPrices[0].innerText = '200'
                        break;
                    case 'Chair Margarita':
                        summaryFeatures[0].innerText = 'Chair Margarita'
                        summaryPrices[0].innerText = '300'
                        break;
                    case 'Chair Selena':
                        summaryFeatures[0].innerText = 'Chair Selena'
                        summaryPrices[0].innerText = '400'
                        break;
                }

                switch (colors.innerText) {
                    case 'czerwony':
                        summaryFeatures[1].innerText = 'czerwony'
                        summaryPrices[1].innerText = '50'
                        break;
                    case 'czarny':
                        summaryFeatures[1].innerText = 'czarny'
                        summaryPrices[1].innerText = '80'
                        break;
                    case 'pomarańczowy':
                        summaryFeatures[1].innerText = 'pomarańczowy'
                        summaryPrices[1].innerText = '100'
                        break;
                }

                switch (materials.innerText) {
                    case 'tkanina':
                        summaryFeatures[2].innerText = 'tkanina'
                        summaryPrices[2].innerText = '0'
                        break;
                    case 'skóra':
                        summaryFeatures[2].innerText = 'skóra'
                        summaryPrices[2].innerText = '100'
                        break;
                }

                sum = Number(summaryPrices[0].innerText) + Number(summaryPrices[1].innerText) + Number(summaryPrices[2].innerText) + Number(summaryPrices[3].innerText);
                summaryTotal.innerText = sum + " zł";
            });
        }


        //order
        var orderBtn = document.querySelector('.site-order [type="submit"]');
        orderBtn.addEventListener('click', function(e) {
            e.preventDefault();
        });

    }
    calculator();

    function contact() {
        var submit = document.querySelector('.contact-form [type="submit"]');
        submit.addEventListener('click', function(e) {
            e.preventDefault();
        });
    }
    contact();

});