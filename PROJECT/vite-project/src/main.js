let pageSize = 20;
let key = 'xt0Eok4inQpoomI6HWOOPYsC4QG5HpKN';
const maxPage = 20; // максимум сторінок (як у тебе був ліміт 20)
const eventUl = document.querySelector('.event-ul');
const ulbtn = document.querySelector('.event-list-btn');
let currentPage = 0;
function loadPage(page) {
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${key}&page=${page}&size=${pageSize}`;
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
      eventUl.innerHTML = '';
      if (!data._embedded || !data._embedded.events) return;
      data._embedded.events.forEach((event) => {
        const li = document.createElement('li');
        li.className = 'event-li';
        li.innerHTML = `
          <img class="event-img" src="${event.images[0].url}">
          <p class="event-p-name">${event.name}</p>
          <p class="event-p-date">Date: ${event.dates.start.localDate}</p>
          <p class="event-p-place">Place: ${event.dates.timezone}</p>
        `;
        eventUl.appendChild(li);
      });

      currentPage = data.page.number;
    })
    .catch((err) => {
      console.error('Fetch error:', err);
    });
}

loadPage(0);

let displayedPages = [];

function initDisplayedPages() {
  const btns = Array.from(document.querySelectorAll('.btn-item'));
  if (btns.length >= 1) {
    displayedPages = btns
      .map((b) => {
        const n = Number(b.textContent);
        return Number.isNaN(n) ? 0 : n;
      })
      .filter((n) => n > 0);
  }
  if (displayedPages.length < 1) {
    displayedPages = [1, 2, 3, 4, 5];
  }
  displayedPages = displayedPages.map((n) => Math.min(n, maxPage));
  if (displayedPages.length > 5) {
    displayedPages = displayedPages.slice(0, 5);
  }
}
initDisplayedPages();
function renderButtons() {
  ulbtn.innerHTML = '';
  displayedPages.forEach((num, idx) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'btn-item';
    btn.textContent = num;
    btn.addEventListener('click', () => {
      const pageIndex = num - 1;
      loadPage(pageIndex);
      if (idx === displayedPages.length - 1) {
        shiftForward();
      } else if (idx === 0) {
        shiftBackward();
      }
    });
    li.appendChild(btn);
    ulbtn.appendChild(li);
  });
}
renderButtons();
function shiftForward() {
  const right = displayedPages[displayedPages.length - 1];
  if (right >= maxPage) return;
  const next = right + 1;
  displayedPages.push(next);
  displayedPages.shift();
  renderButtons();
}
function shiftBackward() {
  const left = displayedPages[0];
  if (left <= 1) return;
  const prev = left - 1;
  displayedPages.unshift(prev);
  displayedPages.pop();
  renderButtons();
}
// modal
let closeModalBtn = document.querySelector('.modal-close');
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});
let modal = document.querySelector('.modal');
let lastEvents = [];
async function renderModal(event) {
  // Відкрити модалку
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  // Елементи модалки
  const infoP = document.querySelector('.p-info-item');
  const whenP = document.querySelector('.p-when-item');
  const whereP = document.querySelector('.p-where-item');
  const whoP = document.querySelector('.p-who-item');
  const pricesP = document.querySelector('.p-prices-item');
  const imgTop = document.querySelector('.img2');
  const imgModal = document.querySelector('.img-modal');
  // Отримання даних
  const eventName = event.name || 'No name';
  const eventDate = event.dates?.start?.localDate || 'Unknown date';
  const eventPlace = event._embedded?.venues?.[0]?.name || 'Unknown place';
  const eventArtist =
    event._embedded?.attractions?.[0]?.name || 'Unknown artist';
  const eventImage = event.images?.[0]?.url || '';
  // Ціни
  let priceInfo = 'No price info';
  if (event.priceRanges) {
    priceInfo = `${event.priceRanges[0].min} - ${event.priceRanges[0].max} ${event.priceRanges[0].currency}`;
  }
  // Вставляємо дані в модалку
  infoP.textContent = eventName;
  whenP.textContent = eventDate;
  whereP.textContent = eventPlace;
  whoP.textContent = eventArtist;
  pricesP.textContent = priceInfo;
  imgTop.src = eventImage;
  imgModal.src = eventImage;
  console.log('Modal loaded:', event);
}
eventUl.addEventListener('click', (e) => {
  const li = e.target.closest('.event-li');
  if (!li) return;
  const index = Array.from(eventUl.children).indexOf(li);
  const eventIndex = currentPage * pageSize + index;
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${key}&page=${currentPage}&size=${pageSize}`;
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      const event = data._embedded.events[index];
      renderModal(event, li);
    })
    .catch((err) => {
      console.error('Fetch error:', err);
    });
});
