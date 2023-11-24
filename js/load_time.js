window.addEventListener("load", function() {
    let pageloadtime = performance.timing.loadEventStart - performance.timing.navigationStart;
    const pageEnd = performance.mark('pageEnd');
    const loadTime = pageEnd.startTime;

    var div_page_load_time = document.getElementsByClassName("page_load_time")[0];
    div_page_load_time.textContent = `Page load time is ${pageloadtime / 1000} (${loadTime / 1000}) seconds`;
});
