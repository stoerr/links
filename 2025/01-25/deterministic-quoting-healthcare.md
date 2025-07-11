---
filename: deterministic-quoting-healthcare
category: Healthcare, AI, Safety
url: https://mattyyeung.github.io/deterministic-quoting
title: Deterministic Quoting - Making LLMs Safer for Healthcare
description: LLMs have the potential to revolutionise our field of healthcare, but the fear and reality of hallucinations prevent adoption in most applications.
date: 2025-01-25
---
# Deterministic Quoting - Making LLMs Safer for Healthcare

[https://mattyyeung.github.io/deterministic-quoting](https://mattyyeung.github.io/deterministic-quoting)

## Description

LLMs have the potential to revolutionise our field of healthcare, but the fear and reality of hallucinations prevent adoption in most applications.

## Summary

This article discusses the need for safer integration of Large Language Models (LLMs) into healthcare and introduces "Deterministic Quoting," a technique designed to ensure that quotations from source material are verbatim, reducing the risk of hallucinations. The overarching goal of this methodology is to bridge the trust gap that exists when deploying LLM systems, particularly in high-stakes environments such as healthcare, where incorrect information can lead to serious consequences.

Deterministic Quoting aims to guarantee that all quoted text displayed is accurate and sourced directly from reliable materials, rather than generated or altered by an LLM. While this technique promises improvements over current systems by providing clear distinctions between generated text and trusted quotations, it acknowledges that challenges related to the quality of LLM outputs remain significant. The article also highlights preliminary results showcasing improvements in hallucination rates and overall answer quality when utilizing this approach.

The implementation details are laid out step-by-step, demonstrating modifications to traditional LLM pipelines to incorporate deterministic lookups for quotes. It discusses the importance of chunking, metadata, and prompt engineering as key elements in effectively applying Deterministic Quoting, with the understanding that these methods are not solely limited to healthcare but can be adapted for other fields as well.
