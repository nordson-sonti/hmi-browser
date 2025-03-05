$(document).ready(function(){   
    function create_kiosk_control_bar(hmi_url, systeminfo_url){
        var container = $("<div  />", {
            class: "kiosk_control_container"
        });
        var kiosk_control_hmi_button = $("<button />", {
            text: "HMI",
            class: "kiosk_control",
            click: function() {window.location.href=hmi_url;}
        });
        var kiosk_control_systeminfo_button = $("<button />", {
            text: "SYSTEM",
            click: function() {window.location.href=systeminfo_url;},
            class: "kiosk_control"
        });
        container.append(kiosk_control_hmi_button);
		container.append(kiosk_control_systeminfo_button);
        $('body').append(container);
    }
	chrome.storage.sync.get({
		systeminfo_url: 'http://edge:9090/',
        hmi_url: 'http://edge/hmi'
		}, function(items) {
		create_kiosk_control_bar(items.hmi_url, items.systeminfo_url);
	});
});
