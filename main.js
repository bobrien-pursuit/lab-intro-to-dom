
// Add a class of "featured" to the first section element on the page.
let section = document.getElementsByTagName("section")[0];
section.classList.add("featured");

// Create the following article element with JavaScript and add at the end of the section.posts element.
let newArticle = document.createElement("article");

newArticle.innerHTML = `<img
  src="./images/paul-gilmore-unsplash.jpg"
  alt="Image of a mountain in front of a lake."
/>
<h3>Stop Planning</h3>
<p>
  You -- yes you! You're an over-planner, I can tell. It's time to stop
  planning so much and instead focusing on relaxing. Taking a break at all is
  so stressful these days; why add to the stress by overworking yourself?
</p>
<aside>
  <p>
    <span><strong>Read Time:</strong> 4 Minutes</span
    ><a href="#">Read more...</a>
  </p>
</aside>
</article>`;

let posts = document.querySelector('.posts');

posts.appendChild(newArticle);

//Move the first article from inside the section.posts element to become the second article and move the second article so that it is the first article.

let temp = '';

temp = document.getElementsByTagName("section")[0];

document.getElementsByTagName("section")[0] = document.getElementsByTagName("section")[1];

document.getElementsByTagName("section")[1] = temp;

//Remove the "All Posts" link from the header.

document.getElementsByTagName("a")[0].remove();

document.getElementsByTagName("span")[0].remove();

for (let i = 0; i <= document.getElementsByTagName("h3").length; i++){
      console.log(i);
      document.getElementsByTagName("h3")[i].remove();
    }