function showTab(courseId) {
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Hide all course contents
    const contents = document.querySelectorAll('.course-content');
    contents.forEach(content => content.classList.remove('active-content'));

    // Show the clicked course tab content
    document.getElementById(courseId).classList.add('active-content');

    // Add active class to the clicked tab
    const activeTab = Array.from(tabs).find(tab => tab.textContent.includes(courseId.split('-')[0]));
    if (activeTab) activeTab.classList.add('active');
}
