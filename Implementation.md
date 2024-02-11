**# Implementation

This project is meant to be my personal link database, where I can save any number of interesting links with
categorization and a little description. I also want to make it searchable via AI later. Similarily to 
https://til.stoerr.net/ it should get some kind of browsability.

## Basic idea

The links should just be saved into the file system, no actual database that'd need a server. We will put every link 
into it's individual file that defines URL, title, description and category. The path contains the date, e.g.
`2024/02-11/My-Link-Title.md`.

## Creating a link

We make a script bin/addLink that takes the URL as argument, creates a new file in the current date's directory, and
opens the file in the editor. The file will contain a template for the link, which the user can fill in.

## Presentation and search

Local search can be done 
