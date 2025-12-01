---
title: Resumen Lenguaje de Marcas (Bilingue)
date: 2025-12-01
author: Santi Rivera
slug: resumen-html
categories:
	- Lenguaje de Marcas
---

## HTML Elements: Inline vs. Block

The core difference between **inline** and **block** elements in HTML lies in how they occupy space and interact with other elements on the page.

---

### The Difference Between Inline and Block

| Feature | **Block-level Elements** | **Inline Elements** |
| :--- | :--- | :--- |
| **Spacing** | Starts on a **new line** and takes up the **full available width**. | Does **not** start on a new line; only takes up **as much width as necessary** for its content. |
| **Height/Width** | **Can** set `height` and `width` explicitly via CSS. | **Cannot** set `height` or `width`; they are determined by content. |
| **Vertical Margin** | **Accepts** vertical margins (`margin-top`, `margin-bottom`). | **Ignores** vertical margins. |
| **Containment** | Can contain **both** inline and other block-level elements. | Can generally only contain **data and other inline elements**. |



---

### Default Inline and Block HTML Tags

While most elements can have their display type changed with CSS (e.g., `display: inline-block;`), here are some common elements and their **default** behavior:

#### Default Block-level Tags

These elements are often used to structure the main content or sections of a page:

* **Structural:** `<div>`, `<header>`, `<footer>`, `<section>`, `<article>`, `<nav>`, `<aside>`
* **Text/Groupings:** `<p>` (paragraph), `<h1>` through `<h6>` (headings), `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>`, `<dd>`
* **Forms:** `<form>`, `<fieldset>`, `<legend>`
* **Table:** `<table>`, `<tr>`, `<th>`, `<td>`

#### Default Inline Tags

These elements are typically used to mark up content **within** a block of text:

* **Text Formatting:** `<span>`, `<a>` (anchor/link), `<strong>`, `<em>` (emphasis), `<b>`, `<i>`, `<abbr>`, `<cite>`, `<code>`, `<small>`, `<sup>`, `<sub>`
* **Media/Interactive:** `<img>`, `<audio>`, `<video>`, `<map>`, `<canvas>`
* **Forms:** `<input>`, `<button>`, `<label>`, `<select>`, `<textarea>`

---

### How HTML Forms Work

HTML forms are used to **collect user input**. The data is then typically sent to a server for processing.

#### The `<form>` Tag

The `<form>` element acts as a container for all the form controls (inputs, buttons, etc.). Its key attributes are:

* `action`: Specifies the **URL** where the form data will be submitted (e.g., a server-side script).
* `method`: Specifies the **HTTP method** used to send the data. Common values are:
    * **`GET`**: Appends form data to the URL (visible in the address bar). Best for non-sensitive data or simple queries (e.g., searches).
    * **`POST`**: Sends form data in the body of the HTTP request (not visible in the address bar). Best for sensitive data or when modifying data on the server.
* `enctype`: How the form data should be encoded when submitted (mainly for `POST`). Use `multipart/form-data` when submitting files (e.g., a photo upload).

#### The `<input>` Element: Possible `type` Values

The `<input>` element is the most versatile form control, with its behavior defined by the **`type`** attribute.

| `type` Value | Description |
| :--- | :--- |
| **`text`** | Single-line text input (default). |
| **`password`** | Single-line text input where characters are masked. |
| **`submit`** | A button that submits the form data to the server. |
| **`reset`** | A button that resets all form values to their initial state. |
| **`button`** | A clickable push button (requires JavaScript to perform an action). |
| **`checkbox`** | A square box allowing a user to select **zero or more** options. |
| **`radio`** | A circular button allowing a user to select **one** option from a set (uses the same `name` attribute). |
| **`file`** | A control that lets the user select a file from their device. |
| **`hidden`** | An input that is not visible to the user but its value is submitted with the form. |
| **`email`** | A field for entering an email address (includes validation). |
| **`url`** | A field for entering a web address (includes validation). |
| **`number`** | A field for entering a number (often with spinner controls). |
| **`range`** | A slider control for inputting a number within a specific range. |
| **`date`** | A date picker control (year, month, day). |
| **`time`** | A time control (hour, minute, optional second). |
| **`datetime-local`** | A date and time control, with no timezone. |
| **`month`** | A month and year control. |
| **`week`** | A week and year control. |
| **`color`** | A color picker input. |
| **`search`** | A field designed for search terms. |
| **`tel`** | A field for entering a telephone number. |

#### Other Key Form Elements

* **`<label>`**: Provides a caption for a form control. It is best practice to associate a `label` with an input using the `for` attribute (matching the input's `id`). Clicking the label gives focus to the associated input, improving **accessibility**.
    * **Example:** `<label for="username">Username:</label><input type="text" id="username" name="user">`
* **`<textarea>`**: Creates a multi-line text input field (for comments or long messages).
* **`<select>`**: Creates a drop-down list of options. Options are defined using the nested **`<option>`** tags.
* **`<button>`**: A versatile clickable button. Default `type` is `submit`. Can also be `type="reset"` or `type="button"`.
* **`<fieldset>`**: Used to **group** related elements in a form. It draws a box around the grouping.
* **`<legend>`**: Provides a **caption** for the content of the parent `<fieldset>`.

---

### Lists and Tables

Lists and tables are block-level elements used to structure content visually.

#### Lists

HTML provides three main types of lists:

1.  **Unordered List (`<ul>`)**: Used for grouping items where the order doesn't matter. Items are typically rendered with bullet points.
    * **Child Tag:** `<li>` (List Item)
2.  **Ordered List (`<ol>`)**: Used for items that need to be in a specific sequence (e.g., steps, rankings). Items are typically rendered with numbers or letters.
    * **Child Tag:** `<li>` (List Item)
3.  **Description List (`<dl>`)**: Used for terms and their corresponding definitions (e.g., a glossary).
    * **Child Tags:** `<dt>` (Definition Term) and `<dd>` (Definition Description)

#### Tables

Tables (`<table>`) are used to display data in a grid format of rows and columns.

* **Structure:**
    * `<tr>` (Table Row): Defines a row of cells.
    * `<th>` (Table Header): Defines a cell used for column or row headings (often bold and centered).
    * `<td>` (Table Data): Defines a standard data cell.
* **Semantic Grouping:** Tables can be structured using:
    * `<thead>`: Groups the header content (e.g., column labels).
    * `<tbody>`: Groups the main body content (the data rows).
    * `<tfoot>`: Groups the footer content (e.g., totals or notes).

#### Spanning Rows and Columns

The following attributes allow cells to merge across multiple rows or columns:

* **`colspan`**: Merges a cell across multiple columns horizontally. The value specifies the **number of columns** the cell should span.
    * **Example:** `<td colspan="2">This cell spans two columns</td>`
* **`rowspan`**: Merges a cell across multiple rows vertically. The value specifies the **number of rows** the cell should span.
    * **Example:** `<td rowspan="3">This cell spans three rows</td>`