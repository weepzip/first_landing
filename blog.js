window.onload = () => {
  let blogs = document.getElementsByClassName('blog');
  for (blog of blogs) {
    let title = blog.getElementsByClassName('blog__title')[0];
    let time = blog.getElementsByClassName('blog__time')[0];
    let content = blog.getElementsByClassName('blog__content')[0];

    if (title.textContent === '') {
      let line = document.createElement('div');
      line.style.setProperty('height', '1rem');
      line.style.setProperty('width', '10rem');
      line.style.setProperty('background-color', '#a7d');
      line.style.setProperty('border-radius', '0.5rem');
      title.append(line);
    };

    if (time.textContent === '') {
      let line = document.createElement('div');
      line.style.setProperty('height', '1rem');
      line.style.setProperty('width', '5rem');
      line.style.setProperty('background-color', '#a8d');
      line.style.setProperty('border-radius', '0.5rem');
      time.append(line);
    };
    
    if (content.innerHTML === '') {
      for (let i=0; i<5; i++) {
        let line = document.createElement('div');
        line.style.setProperty('height', '.8rem');
        line.style.setProperty('width', `${(i!==4) ? '100%' : '40%'}`);
        line.style.setProperty('background-color', '#a8d');
        line.style.setProperty('border-radius', '.4rem');
        content.append(line);
      }
    };
  };

  let loading = setTimeout(() => loadBlogs(blogData.features), 1000);
};

const loadBlogs = (features) => {
  let blogs = document.getElementsByClassName('blog');
  for (let i=0; i<blogs.length; i++) {
    let title = blogs[i].getElementsByClassName('blog__title')[0];
    let time = blogs[i].getElementsByClassName('blog__time')[0];
    let content = blogs[i].getElementsByClassName('blog__content')[0];
    content.innerHTML = '';
    let imageContainer = document.createElement('div');
    imageContainer.className = 'blog__image-container';
    content.append(imageContainer);
    let image = document.createElement('img');
    image.className = 'blog__image';
    image.src = features[i].images[0];
    imageContainer.append(image);
    let text = document.createElement('div');
    text.className = 'blog__text';
    text.textContent = features[i].content;
    content.append(text);
    title.innerHTML = features[i].title;
    time.innerHTML = features[i].time;
  }
}