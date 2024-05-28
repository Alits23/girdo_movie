document.addEventListener('DOMContentLoaded', () => {
    fetchUserProfile();
});

function fetchUserProfile() {
    // فرض کنید اطلاعات کاربر از یک API بارگذاری می‌شود
    fetch('/api/user-profile')
        .then(response => response.json())
        .then(data => {
            updateProfile(data);
        })
        .catch(error => console.error('Error fetching user profile:', error));
}

function updateProfile(data) {
    document.querySelector('.profile .username').innerText = data.name;
    document.querySelector('.main-content .header h2').innerText = `پروفایل ${data.name}`;
    document.querySelector('.profile-details .detail:nth-child(1) span').innerText = data.name;
    document.querySelector('.profile-details .detail:nth-child(2) span').innerText = data.username;
    document.querySelector('.profile-details .detail:nth-child(3) span').innerText = data.email;
    document.querySelector('.profile-details .detail:nth-child(4) span').innerText = data.joinDate;
    document.querySelector('.profile-details .detail:nth-child(5) span').innerText = data.favoriteMovies.join(', ');
    document.querySelector('.profile-details .detail:nth-child(6) span').innerText = data.favoriteSeries.join(', ');
    document.querySelector('.profile-details .detail:nth-child(7) span').innerText = data.lastLogin;
}
