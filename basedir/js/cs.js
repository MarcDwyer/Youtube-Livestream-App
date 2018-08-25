

fetcher();
setInterval(fetcher, 300000);

function updater() {
const dataset = document.querySelectorAll('[data-who]');
dataset.forEach(item => {
if (item.dataset.who == 'icecheck' && icecheck == true) {
  item.children[1].classList.add('active');
  item.addEventListener('click', addVideo)
}
if (item.dataset.who == 'destcheck' && destcheck == true) {
  item.children[1].classList.add('active');
  item.addEventListener('click', addVideo)
}
if (item.dataset.who == 'hypcheck' && hypcheck == true) {
  item.children[1].classList.add('active');
  item.addEventListener('click', addVideo)
}
if (item.dataset.who == 'tsacheck' && tsacheck == true) {
  item.children[1].classList.add('active');
  item.addEventListener('click', addVideo)
}
})

dataset.forEach(item => {
  const data = item.dataset.who;
  if (item.classList.value.includes('active') && data == 'tsacheck' && tsacheck == false) {
    item.classList.remove('active');
  }
  if (item.classList.value.includes('active') && data == 'icecheck' && icecheck == false) {
    item.classList.remove('active');
  }
  if (item.classList.value.includes('active') && data == 'hypcheck' && hypcheck == false) {
    item.classList.remove('active');
  }
  if (item.classList.value.includes('active') && data == 'destcheck' && destcheck == false) {
    item.classList.remove('active');
  }
})
}


const links = document.querySelectorAll('.pic');
const video = document.querySelector('.video');
function addVideo() {
  const data = this.dataset.who;

  if (data == 'icecheck') {
    const iceurl = icejson.items[0].id.videoId;
    video.innerHTML = `<iframe class="stream" src="https://www.youtube.com/embed/${iceurl}"></iframe>`;
  }
  if (data == 'destcheck') {
    const desturl = destinyjson.items[0].id.videoId;
    video.innerHTML = `<iframe class="stream" src="https://www.youtube.com/embed/${desturl}"></iframe>`;
  }
  if (data == 'hypcheck') {

    const hyphurl = hyphonixjson.items[0].id.videoId;
    video.innerHTML = `<iframe class="stream" src="https://www.youtube.com/embed/${hyphurl}"></iframe>`;
  }
  if (data == 'tsacheck') {
    const tsaurl = tsajson.items[0].id.videoId;
    video.innerHTML = `<iframe class="stream" src="https://www.youtube.com/embed/${tsaurl}"></iframe>`;
  }
}


