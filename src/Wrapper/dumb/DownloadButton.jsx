import React from "react"

class DownloadButton extends React.Component {
	download (ev) {
		var html_ = document.createElement('html'),
			head = document.createElement('head'),
			body = document.createElement('body'),
			downloadElements = document.querySelectorAll("*[data-download='true']"),
			css = document.head.querySelector('#app-style').innerHTML,
			charset = document.createElement('meta');
		var style = document.createElement('style');

		charset.setAttribute("charset", "UTF-8")

		style.innerHTML = css;
		head.appendChild(charset)
		head.appendChild(style);

		downloadElements.forEach(item => head.appendChild(item))

		html_.appendChild(head);

		body.innerHTML = document.querySelector('#data').innerHTML;
		html_.appendChild(body);

		var a = document.createElement('a');
		document.body.appendChild(a)
		a.style.display = "none";
		var blob = new Blob([
		"<html>" + html_.innerHTML + "</html>"
		], {type: "octet/stream"}),
			url = window.URL.createObjectURL(blob);

		a.href = url;
		a.download = 'index.html';
		a.click()
		window.URL.revokeObjectURL(url)
	}
	render() {
		return (
			<button className="customize-button"
				style={{left: "100px"}} onClick={this.download} >
				<i className="fa fa-download" />
			</button>
		)
	}
}

export default DownloadButton