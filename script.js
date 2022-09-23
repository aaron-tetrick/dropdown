document.addEventListener('click', e => {
    console.log(e.target.parentElement)
    const isDropdownBtn = e.target.classList.contains('option');
    const currentDropdown = e.target.parentElement
    if(!isDropdownBtn && currentDropdown != null) return


    if (isDropdownBtn) {
        currentDropdown.classList.toggle('active');


    }

    document.querySelectorAll('.active').forEach(dropdown => {
        console.log(dropdown);
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active');
    })
})