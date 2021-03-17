window.addEventListener("load", () => {
    const helper = (selector) => document.querySelector(selector); 
    helper("#empForm").addEventListener("submit", () => {
        let ID         = helper("#id").value;
        let Name       = helper("#fullName").value;
        let Extension  = helper("#ext").value;
        let Email      = helper("#email").value;
        let Department = helper("#department").value;
        preventDefault();
        console.log(`ID: ${ID}`);
        console.log(`Name : ${Name}`);
        console.log(`Extension: ${Extension}`);
        console.log(`Email : ${Email}`);
        console.log(`Department: ${Department}`);
    });
});