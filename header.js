const navbar = () => {
    return ` <div id="navbar">
    <div id="upper">
    <h7 id="content">UA|EN   356584536</h7>
    <h3 id ="symbols">
        <a href="index.html"><i class="fa-regular fa-heart"></i></a>
        <a href="search.html"><i class="fa-solid fa-scale-unbalanced"></i></a>
        <a href="index.html"><i class="fa-regular fa-heart"></i></a>
        <a href="index.html"> <i class="fa-solid fa-bag-shopping"></i></a>
    </h3> 
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