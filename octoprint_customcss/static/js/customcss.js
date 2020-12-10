$(function () {
    function CustomcssViewModel(parameters) {
        var self = this;

        self.settings = parameters[0];
    }

    OCTOPRINT_VIEWMODELS.push({
        construct: CustomcssViewModel,
        dependencies: [
            "settingsViewModel",
        ],
        elements: ["#customcss"]
    });
});
