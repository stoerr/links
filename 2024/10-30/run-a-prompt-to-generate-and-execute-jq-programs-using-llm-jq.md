---
filename: run-a-prompt-to-generate-and-execute-jq-programs-using-llm-jq
category: LLM, JSON, Programming
url: https://simonwillison.net/2024/Oct/27/llm-jq/
title: Run a prompt to generate and execute jq programs using llm-jq
description: llm-jq is a brand new plugin for LLM which lets you pipe JSON directly into the llm jq command along with a human-language description of how you’d like to manipulate the data.
date: 2024-10-30
---
# Run a prompt to generate and execute jq programs using llm-jq

[https://simonwillison.net/2024/Oct/27/llm-jq/](https://simonwillison.net/2024/Oct/27/llm-jq/)

## Description

llm-jq is a brand new plugin for LLM which lets you pipe JSON directly into the llm jq command along with a human-language description of how you’d like to manipulate the data.

## Summary

The article introduces llm-jq, a new plugin that enhances the functionality of LLM by allowing users to input JSON data alongside a human-readable query. This plugin generates and executes jq programs based on the user's request, simplifying the process of manipulating JSON data. An example installation and usage are provided, showcasing how to count user logins through a GitHub API call and return the top results.

The author explains the underlying mechanics of llm-jq, detailing how it utilizes the first 1024 bytes of the input JSON and the user query to generate jq commands. Additionally, the automatic execution of these commands, and the options for silent or verbose outputs, are discussed to give users flexibility in how they receive their results.

Finally, the article includes insights on the system prompts used by the LLM, emphasizing its ability to directly interpret user queries into jq programs. The combination of LLM capabilities with jq aims to streamline JSON data manipulation for users.
