# My Link Database

This project is meant to be my personal searchable link database, where I can save any number of interesting links
with categorization and a little description. A bit like [things I've learned](https://til.stoerr.net/), but the
here descriptions etc. are mostly generated by AI. Compare the [implementation](Implementation.md).

<input type="text" id="search" placeholder="Describe what you are looking for" style="width: 75%"/>
<button class="btn" id="searchButton">Search</button>

<div id="categories"></div>

# Search result

<div id="links"></div>

<script src="https://cdn.jsdelivr.net/npm/showdown@1.9.1/dist/showdown.min.js"></script>
<script src="assets/js/searchimpl.js"></script>
