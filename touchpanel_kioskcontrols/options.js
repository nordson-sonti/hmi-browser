// Saves options to chrome.storage
function save_options() {
  var hmi_url_value = document.getElementById('hmi_url').value;
  var systeminfo_url_value = document.getElementById('systeminfo_url').value;
  chrome.storage.sync.set({
    hmi_url: hmi_url_value,
    systeminfo_url: systeminfo_url_value
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// restore url
function restore_options() {
  chrome.storage.sync.get({
    systeminfo_url: 'http://edge:9090/',
    hmi_url: 'http://edge/hmi'
  }, function(items) {
    document.getElementById('hmi_url').value = items.hmi_url;
    document.getElementById('systeminfo_url').value = items.systeminfo_url;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);