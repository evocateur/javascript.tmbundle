This document describes the commands of the TextMate Javascript bundle.

# Command Reference

* **Documentation for Word / Selection** (WebView Window)
	
	Searches your selection in a Javascript documentation website.
	
# Snippets

if
if ... else
for
for (in)

### JSDoc

($ = caret position)

* **doc**
	
		/**
		 * $0
		**/
* **docc**
	
		/**
		 * ${Class description}
		 * @author ${user}
		 * @version ${$Rev$}
		 * @requires ${OtherClassName}
		**/
		$0
* **docco**
	
		/**
		 * @constructor
		**/
		$0
* **docm**
	
		/**
		 * ${Method description}
		${* @private}
		 * @param {${String|Object|Array|Boolean|Number}} ${paramName} ${Describe this parameter}
		 * @returns ${Describe what it returns}
		 * @type ${String|Object|Array|Boolean|Number}
		**/
		$0
