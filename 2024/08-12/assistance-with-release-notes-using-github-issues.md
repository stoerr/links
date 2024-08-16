---
filename: assistance-with-release-notes-using-github-issues
category: Software Development, Release Management, GitHub
url: https://til.simonwillison.net/github/release-note-assistance
title: Assistance with release notes using GitHub Issues
description: A guide on how to effectively assist in writing release notes using GitHub Issues.
---
# Assistance with release notes using GitHub Issues

[https://til.simonwillison.net/github/release-note-assistance](https://til.simonwillison.net/github/release-note-assistance)

## Description

A guide on how to effectively assist in writing release notes using GitHub Issues.

## Summary

Simon Willison shares his method for creating release notes by leveraging GitHub's functionalities and commit messages. The process involves identifying the latest release tag and the most recent commit hash, followed by a Git command that formats the commit log into a markdown-compatible list. This list is then pasted into a GitHub Issues comment, where it automatically becomes a clickable and linked format, making it easier for collaborators to review changes.

Additionally, Willison discusses using a GitHub URL that provides a diff of changes between two points, which can be piped to a language model, Claude 3.5 Sonnet, to generate a summary of the changes present in the diff. This summary not only aids in assembling comprehensive release notes but also serves as a tool for confirming that no crucial details have been overlooked.
