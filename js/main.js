/**
 * Thilothana Makeup Artist - Main Client Controller
 * Manages UI interactions: preloader dismissal, smooth scrolling,
 * modal popups, and callback/booking inquiry submissions to DB.
 */

(function () {
    'use strict';

    // 1. Smooth preloader dismiss on window load
    window.addEventListener('load', function () {
        var loader = document.querySelector('.loader_bg');
        if (loader) {
            setTimeout(function () {
                loader.style.opacity = '0';
                loader.style.transition = 'opacity 0.4s ease';
                setTimeout(function () {
                    loader.style.display = 'none';
                }, 400);
            }, 300);
        }
    });

    // 2. Popup modal control
    window.showSuccessPopup = function () {
        var overlay = document.getElementById('popupOverlay');
        if (overlay) {
            overlay.style.display = 'block';
        }
    };

    window.closeSuccessPopup = function () {
        var overlay = document.getElementById('popupOverlay');
        if (overlay) {
            overlay.style.display = 'none';
        }
    };

    // Close modal on clicking outside or ESC key
    document.addEventListener('click', function (e) {
        var overlay = document.getElementById('popupOverlay');
        if (overlay && e.target === overlay) {
            closeSuccessPopup();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            closeSuccessPopup();
        }
    });

    // 3. Callback Form Submit Handler (index.html)
    window.handleCallbackSubmit = function (e) {
        if (e && e.preventDefault) e.preventDefault();

        var name = (document.getElementById('cbName') || {}).value || '';
        var phone = (document.getElementById('cbPhone') || {}).value || '';
        var category = (document.getElementById('cbCategory') || {}).value || '';
        var address = (document.getElementById('cbAddress') || {}).value || '';
        var description = (document.getElementById('cbDesc') || {}).value || '';

        if (typeof DB !== 'undefined') {
            DB.addCallbackRequest({
                name: name,
                phone: phone,
                category: category,
                address: address,
                description: description
            });
        }

        showSuccessPopup();
        var form = document.getElementById('callbackRequest');
        if (form) form.reset();
    };

    // 4. Booking Form Submit Handler (booking.html)
    window.handleBookingSubmit = function (e) {
        if (e && e.preventDefault) e.preventDefault();

        var name = (document.getElementById('bkName') || {}).value || '';
        var phone = (document.getElementById('bkPhone') || {}).value || '';
        var category = (document.getElementById('bkCategory') || {}).value || '';
        var address = (document.getElementById('bkAddress') || {}).value || '';
        var description = (document.getElementById('bkDesc') || {}).value || '';

        if (typeof DB !== 'undefined') {
            DB.addCallbackRequest({
                name: name,
                phone: phone,
                category: category,
                address: address,
                description: description
            });
        }

        showSuccessPopup();
        var form = document.getElementById('callbackRequest') || document.getElementById('bookingForm');
        if (form) form.reset();
    };

    // 5. Smooth scrolling for internal anchor links
    document.addEventListener('DOMContentLoaded', function () {
        var anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(function (link) {
            link.addEventListener('click', function (event) {
                var targetId = this.getAttribute('href');
                if (targetId && targetId !== '#') {
                    var targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        event.preventDefault();
                        var headerOffset = 70;
                        var elementPosition = targetElement.getBoundingClientRect().top;
                        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });

                        // Close mobile navbar if open
                        var navbarCollapse = document.getElementById('navbarsExample04');
                        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                            if (typeof $ !== 'undefined') {
                                $(navbarCollapse).collapse('hide');
                            } else {
                                navbarCollapse.classList.remove('show');
                            }
                        }
                    }
                }
            });
        });
    });
})();
