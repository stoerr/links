# Implementation

This project is meant to be my personal link database, where I can save any number of interesting links with
categorization and a little description. I also want to make it searchable via AI later. Similarily to 
https://til.stoerr.net/ it should get some kind of browsability.

## Basic idea

The links should just be saved into the file system, no actual database that'd need a server. We will put every link 
into it's individual file that defines URL, title, description and category. The path contains the date, e.g.
`2024/02-11/My-Link-Title.md`.

## Presentation and search
