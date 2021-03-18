window.addEventListener('load', () => {
    const $ = (id) => window.document.getElementById(id);
    $('empForm').addEventListener('submit', () => {
    let ID        = $('id').value;
    let Name      = $('fullName').value;
    let Extension = $('ext').value;
    let Email     = $('email').value;
    let Department= $('department').value;
    preventDefault();
    window.console.log(`ID: ${ID}`);
    window.console.log(`Name: ${Name}`);
    window.console.log(`Extension: ${Extension}`);
    window.console.log(`Email: ${Email}`);
    window.console.log(`Department: ${Department}`);
    });
}); 