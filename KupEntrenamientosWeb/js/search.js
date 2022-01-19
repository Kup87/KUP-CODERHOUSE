document.getElementById("site-search").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let searchValue = this.value;
        searchValue = searchValue.replace(/\s+/g, '+');
        window.open(`https://www.google.com/search?q=site:kupentrenamientospersonalizados.000webhostapp.com ${searchValue}`,'_blank');
}})

document.getElementById("site-search2").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let searchValue = this.value;
        searchValue = searchValue.replace(/\s+/g, '+');
        window.open(`https://www.google.com/search?q=site:kupentrenamientospersonalizados.000webhostapp.com ${searchValue}`,'_blank');
}})

