---
filename: using-playwright-mcp-claude-code
category: Playwright, Claude Code, MCP
url: https://til.simonwillison.net/claude-code/playwright-mcp-claude-code
title: Using Playwright MCP with Claude Code
description: A guide to using the Microsoft Playwright MCP server with Claude Code.
date: 2025-07-11
---
# Using Playwright MCP with Claude Code

[https://til.simonwillison.net/claude-code/playwright-mcp-claude-code](https://til.simonwillison.net/claude-code/playwright-mcp-claude-code)

## Description

A guide to using the Microsoft Playwright MCP server with Claude Code.

## Summary

This article explains how to set up and use the official Microsoft Playwright MCP server with Claude Code, inspired by Armin's insights. The setup is straightforward; it involves running a simple command (`claude mcp add playwright npx '@playwright/mcp@latest'`) to make Playwright functionalities available within Claude Code.

Once set up, users can command Claude to use Playwright for various tasks like opening a browser to a specific website. The guide also notes that users must specify "playwright mcp" during initial commands to prevent issues with Bash. It discusses how authentication works seamlessly as Claude can use a visible browser window to log in, allowing cookie persistence throughout the session.

Additionally, the article lists available Playwright tools (like `browser_click` and `browser_navigate`) that users can access via the MCP. Claude is typically capable of selecting the appropriate tool for each task, enhancing user experience and workflow.
