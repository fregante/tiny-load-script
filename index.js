'use strict';

/**
 * Load javascript file and forget about it
 * Perfect for autonomous libraries like YouTube's and Facebook's APIs
 * @param  {string} src  The Url to the file to load
 * @return {element}     The <script> element that is being loaded
 */
module.exports = function (src) {
	var s = document.createElement('script');
	s.src = src;
	s.async = true;
	document.head.appendChild(s);
	return s;
};