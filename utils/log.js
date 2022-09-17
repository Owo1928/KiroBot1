const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ 😼Lỗi rồi ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ 😼 Lỗi rồi ] » ') + data);
			break;
		default:
			console.log(chalk.magenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ Ryo ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ Rimuru ] » ') + data);
			break;
		default:
			console.log(chalk.green(`[ LOADER ] » `) + data);
			break;
	}
}