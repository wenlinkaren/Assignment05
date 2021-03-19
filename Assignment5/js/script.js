window.addEventListener('load', () => {
    const $ = (id) => document.getElementById(id);
    $('empForm').addEventListener('submit', (e) => {    
        let ID        = $('id').value;
        let Name      = $('name').value;
        let Extension = $('ext').value;
        let Email     = $('email').value;
        let Department= $('department').value;
    e.preventDefault();
    window.console.log(`ID: ${ID}`);
    window.console.log(`Name: ${Name}`);
    window.console.log(`Extension: ${Extension}`);
    window.console.log(`Email: ${Email}`);
    window.console.log(`Department: ${Department}`);
    });
}); 