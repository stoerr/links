---
filename: adding-repo-custom-instructions
category: Software Development, CopilotTools, AIProgramming
url: https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions
title: Adding repository custom instructions for GitHub Copilot - GitHub Docs
description: Instructions to create a file in a repository that gives Copilot additional context for the work it does in that repository.
date: 2025-08-02
---

Adding repository custom instructions for GitHub Copilot

[https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions)

## Description
Instructions to create a file in a repository that gives Copilot additional context for the work it does in that repository.

## Summary
Custom instructions are configured by adding files to a repository's root directory. These files use YAML format to provide Copilot with specific rules or information relevant to the project.
Follow these steps:
1. Create a .github/copilot-custom-instructions directory in your repository if it doesn't exist.
2. Create a new YAML file inside this directory, e.g., instructions.yml or include your custom filename.
3. Edit the YAML file to define rules following Copilot's documentation, using formats like `trigger: description`.
Once implemented, Copilot incorporates these instructions contextually, potentially improving code suggestions or safety features based on your specifications.
