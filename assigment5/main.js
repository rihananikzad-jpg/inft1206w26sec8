// Student Name; Raihana Nikzad

const toggleBtn = document.querySelector('.toggle-comments');
const commentList = document.querySelector('#comment-list');

// function for comments 

toggleBtn.addEventListener('click', () => {
    const isHidden = commentList.classList.contains('hidden');
    
    if (isHidden) {
        commentList.classList.remove('hidden');
        toggleBtn.textContent = 'Hide comments';
        // ACCESSIBILITY: Tells screen readers the list is open
        toggleBtn.setAttribute('aria-expanded', 'true');
    } else {
        commentList.classList.add('hidden');
        toggleBtn.textContent = 'Show comments';
        // ACCESSIBILITY: Tells screen readers the list is closed
        toggleBtn.setAttribute('aria-expanded', 'false');
    }
});