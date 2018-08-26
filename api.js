
class API {
	constructor(database) {
		this.database = database;
		this.constants = {};
	}

	load() {
		let xhttp = new XMLHttpRequest();
		xhttp.open("GET", "http://localhost:8000/" + this.database, false);
		xhttp.send(null);

		if (xhttp.status == 200) {
			this.constants = JSON.parse(xhttp.responseText);
		} else {
			console.log("Failed to load API");
		}
     }

	search_by_keyword(keyword) {
		let result = {};
		for (let key in this.constants) {
			if (key.includes(keyword)) {
				result[key] = this.constants[key];
			}
		}
		return result;
	}

	search_by_value(value) {
		let result = {};
		for (let key in this.constants) {
			if (this.constants[key].value == value) {
				result[key] = this.constants[key];
			}
		}
		return result;
	}

	search_by_reference(file) {
		let result = {};
		for (let ket in this.constants) {
			if (this.constants[key].reference.file.includes(file)) {
				result[key] = this.constants[key];
			}
		}
		return result;
	}

	get_all() {
		return this.constants;
	}
}
