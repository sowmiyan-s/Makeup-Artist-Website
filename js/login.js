/**
 * Thilothana Makeup Artist - Login Controller
 * Handles admin authentication redirect, credential verification, and error alerts.
 */

(function () {
    'use strict';

    // If already logged in, redirect directly to admin dashboard
    if (typeof DB !== 'undefined' && DB.isAdminLoggedIn()) {
        window.location.href = 'admin.html';
        return;
    }

    window.handleLoginSubmit = function (e) {
        if (e && e.preventDefault) e.preventDefault();

        var usernameEl = document.getElementById('loginUsername');
        var passwordEl = document.getElementById('loginPassword');
        var errorEl = document.getElementById('loginError');

        var username = usernameEl ? usernameEl.value.trim() : '';
        var password = passwordEl ? passwordEl.value.trim() : '';

        if (typeof DB !== 'undefined' && DB.loginAdmin(username, password)) {
            window.location.href = 'admin.html';
        } else {
            if (errorEl) {
                errorEl.style.display = 'block';
            }
        }
    };
})();
