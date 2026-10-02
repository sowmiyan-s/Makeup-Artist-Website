/**
 * Thilothana Makeup Artist - Admin Dashboard Controller
 * Handles authentication checks, pending/completed requests rendering,
 * filtering, status updates, deletions, and JSON backup/restore.
 */

(function () {
    'use strict';

    // 1. Guard check for admin authentication
    if (typeof DB === 'undefined' || !DB.isAdminLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }

    // 2. Escape HTML utility
    function escapeHtml(str) {
        if (!str) return '';
        return String(str).replace(/[&<>"']/g, function (m) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            }[m];
        });
    }

    // 3. Tab Navigation
    window.showTab = function (tab) {
        document.querySelectorAll('.section-box').forEach(function (b) {
            b.classList.remove('active');
        });
        document.querySelectorAll('.nav-tabs button').forEach(function (b) {
            b.classList.remove('active');
        });

        if (tab === 'pending') {
            var secP = document.getElementById('sectionPending');
            var btnP = document.getElementById('tabBtnPending');
            if (secP) secP.classList.add('active');
            if (btnP) btnP.classList.add('active');
            renderPending();
        } else if (tab === 'completed') {
            var secC = document.getElementById('sectionCompleted');
            var btnC = document.getElementById('tabBtnCompleted');
            if (secC) secC.classList.add('active');
            if (btnC) btnC.classList.add('active');
            renderCompleted();
        } else if (tab === 'database') {
            var secD = document.getElementById('sectionDatabase');
            var btnD = document.getElementById('tabBtnDatabase');
            if (secD) secD.classList.add('active');
            if (btnD) btnD.classList.add('active');
        }
    };

    // 4. Render Pending Callback Requests
    window.renderPending = function () {
        var searchEl = document.getElementById('searchName');
        var dateEl = document.getElementById('filterDate');
        var catEl = document.getElementById('filterCategory');

        var search = searchEl ? searchEl.value : '';
        var date = dateEl ? dateEl.value : '';
        var cat = catEl ? catEl.value : '';

        var items = DB.getCallbackRequests({ search: search, date: date, category: cat });
        var tbody = document.getElementById('pendingTableBody');
        if (!tbody) return;
        tbody.innerHTML = '';

        if (!items || items.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 24px; color: #888;">No pending requests found.</td></tr>';
            return;
        }

        items.forEach(function (r) {
            var tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${escapeHtml(r.name)}</strong></td>
                <td><a href="tel:${escapeHtml(r.phone)}"><i class="fa fa-phone"></i> ${escapeHtml(r.phone)}</a></td>
                <td><span style="background: #fdf0f2; color: #bc1939; padding: 3px 8px; border-radius: 4px; font-weight: 600; font-size: 0.85rem;">${escapeHtml(r.category)}</span></td>
                <td>${escapeHtml(r.address || '-')}</td>
                <td>${escapeHtml(r.description || '-')}</td>
                <td><small style="color: #666;">${escapeHtml(r.submitted_at)}</small></td>
                <td>
                    <button class="btn-complete" onclick="markDone(${r.id})"><i class="fa fa-check"></i> Complete</button>
                    <button class="btn-delete" onclick="deleteReq(${r.id})"><i class="fa fa-trash"></i> Delete</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    };

    // 5. Render Completed Requests
    window.renderCompleted = function () {
        var items = DB.getCompletedRequests();
        var tbody = document.getElementById('completedTableBody');
        if (!tbody) return;
        tbody.innerHTML = '';

        if (!items || items.length === 0) {
            tbody.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 24px; color: #888;">No completed requests logged yet.</td></tr>';
            return;
        }

        items.forEach(function (r) {
            var tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${escapeHtml(r.name)}</strong></td>
                <td>${escapeHtml(r.phone)}</td>
                <td><span style="background: #eef7ee; color: #28a745; padding: 3px 8px; border-radius: 4px; font-weight: 600; font-size: 0.85rem;">${escapeHtml(r.category)}</span></td>
                <td>${escapeHtml(r.address || '-')}</td>
                <td>${escapeHtml(r.description || '-')}</td>
                <td><small style="color: #666;">${escapeHtml(r.submitted_at)}</small></td>
                <td><small style="color: #28a745; font-weight: 600;">${escapeHtml(r.completed_at)}</small></td>
                <td>
                    <button class="btn-delete" onclick="deleteComp(${r.id})"><i class="fa fa-trash"></i> Delete</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    };

    // 6. Action Handlers
    window.handleFilter = function (e) {
        if (e && e.preventDefault) e.preventDefault();
        renderPending();
    };

    window.markDone = function (id) {
        if (confirm("Mark this callback request as completed?")) {
            DB.markRequestAsCompleted(id);
            renderPending();
        }
    };

    window.deleteReq = function (id) {
        if (confirm("Delete this callback request?")) {
            DB.deleteCallbackRequest(id);
            renderPending();
        }
    };

    window.deleteComp = function (id) {
        if (confirm("Delete this completed record?")) {
            DB.deleteCompletedRequest(id);
            renderCompleted();
        }
    };

    window.handleLogout = function () {
        DB.logoutAdmin();
        window.location.href = 'login.html';
    };

    window.handleImport = function (e) {
        var file = e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function (evt) {
            if (DB.importDatabaseJSON(evt.target.result)) {
                alert("Database imported successfully!");
                renderPending();
            } else {
                alert("Error parsing JSON database file.");
            }
        };
        reader.readAsText(file);
    };

    window.resetDataPrompt = function () {
        if (confirm("Reset all data to default database fixtures? This cannot be undone.")) {
            DB.resetToDefault();
            alert("Database reset completed.");
            renderPending();
        }
    };

    // 7. Initial boot
    document.addEventListener('DOMContentLoaded', function () {
        renderPending();
    });
})();
