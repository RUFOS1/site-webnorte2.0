const originalTitle = 'Web Norte TELECOM';
        const awayTitle = 'Não se Vá!';
        const originalIcon = '/assets/src/LOGO-300x300.webp';
        const awayIcon = '/assets/src/sad.png';

        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                document.title = awayTitle;
                document.getElementById('favicon').href = awayIcon;
            } else {
                document.title = originalTitle;
                document.getElementById('favicon').href = originalIcon;
            }
        });