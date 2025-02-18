---
filename: help-scraping-cli-tools
category: Data Science, Git, CLI Tools
url: https://simonwillison.net/2022/Feb/2/help-scraping/
title: Help scraping track changes to CLI tools by recording their --help using Git
description: This article explores Help scraping as a method to track changes to CLI tools over time using Git.
date: 2025-02-15
---
# Help scraping track changes to CLI tools by recording their --help using Git

[https://simonwillison.net/2022/Feb/2/help-scraping/](UNCHANGEABLEURLPLACEHOLDER)

## Description

This article explores Help scraping as a method to track changes to CLI tools over time using Git.

## Summary

In this article, Simon Willison introduces the concept of Help scraping, a method to track changes made to command-line interface (CLI) tools by recording their `--help` output in a Git repository. This technique allows users to create a detailed version history of changes that may not be fully captured in official release notes, highlighting the evolving nature of tools like the AWS CLI and the Flyctl tool.

The implementation of this method runs daily, capturing the output of various AWS commands to document modifications in help files to facilitate better understanding of changes across updates. Notably, the article illustrates the scale of updates through detailed statistics from recent AWS CLI releases.

Additionally, the author discusses personal projects where this idea was applied to maintain documentation for CLI commands, demonstrating the practicality of Help scraping for developers in tracking changes systematically.
