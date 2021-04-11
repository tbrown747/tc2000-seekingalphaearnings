let mainDiv = document.getElementById('mainContent');
if (mainDiv !== null && mainDiv.firstElementChild !== null && mainDiv.firstElementChild.firstElementChild !== null) {
    mainDiv.firstElementChild.firstElementChild.children[8].setAttribute('data-href', 'https://seekingalpha.com/symbol/{0}/earnings');
    mainDiv.firstElementChild.firstElementChild.children[8].innerHTML = 'Seeking Alpha Earnings';
}