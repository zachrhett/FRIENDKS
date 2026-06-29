/*==========================================================
  permissions-ui.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Permissions UI Engine
  Version 1.0
==========================================================*/

const FRIENDPermissionsUI = (() => {

function renderRoleBadge(){

    const role = FRIENDPermissions.getRole();

    return `

        <div class="role-badge ${role.toLowerCase()}">

            ${role.replace("_"," ")}

        </div>

    `;

}

function renderPermissionsList(){

    const data = FRIENDPermissions.roleSummary();

    return `

        <ul class="permissions-list">

            ${data.permissions.map(p => `

                <li>${p}</li>

            `).join("")}

        </ul>

    `;

}

function render(){

    return `

        <section class="permissions-ui">

            <header>

                <h2>Permissions</h2>

                ${renderRoleBadge()}

            </header>

            <div class="permissions-body">

                ${renderPermissionsList()}

            </div>

        </section>

    `;

}

return {

    render

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDPermissionsUI =
    FRIENDPermissionsUI;

/*==========================================================
  End permissions-ui.js
==========================================================*/
/*==========================================================
  permissions-ui.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Mount UI
==========================================================*/

function mount(target = "#permissionsScreen"){

    const root =
        typeof target === "string"
            ? document.querySelector(target)
            : target;

    if(!root) return;

    root.innerHTML = render();

    bindEvents(root);

}

/*==========================================================
  Role Upgrade Button
==========================================================*/

function bindEvents(root){

    const btn =
        root.querySelector(".upgrade-role");

    if(btn){

        btn.addEventListener("click", () => {

            FRIENDPermissions.upgradeRole();

            mount(root);

        });

    }

}

/*==========================================================
  Refresh UI
==========================================================*/

function refresh(){

    const root =
        document.querySelector("#permissionsScreen");

    if(root){

        mount(root);

    }

}
