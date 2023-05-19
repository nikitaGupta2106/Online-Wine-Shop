const navbar = () => {
    return ` <div id="navbar">
    <div id="upper">
    <p id="content">UA|EN   356584536</p>
    <div id ="symbols">
        <a class="logos" href="index.html"><i class="fa-regular fa-user"></i></i></a>
        <a class="logos" href="search.html"><i class="fa-solid fa-scale-unbalanced"></i></a>
        <a class="logos" href="index.html"><i class="fa-regular fa-heart"></i></a>
        <a class="logos" href="index.html"> <i class="fa-solid fa-bag-shopping"></i></a>
    </div> 
  </div>
<hr>
<div id="lower">
<h2>Mine Wine</h2>
<div id="content">
<span onclick="window.location.href='red.html'">RED</span>
<span onclick="window.location.href='red.html'">WHITE</span>
<span onclick="window.location.href='red.html'">SPARKLING</span>
<span onclick="window.location.href='red.html'">PROMOTIONS</span>
<span onclick="window.location.href='red.html'">SETS & GIFTS</span>
</div>
<div id="searchbox">
<input type="search"id="gsearch" name="gsearch"placeholder="START TYPING TO SEARCH">
</div>
</div>
<hr> `
  }
  
export default navbar