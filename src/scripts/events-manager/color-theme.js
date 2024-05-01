class ColorTheme {
    constructor() {
        this.addEventListeners();
        this.load();
    };
    
    addEventListeners() {
        const buttons = document.querySelectorAll('.color-theme-changer');
        buttons.forEach(button => button.addEventListener('click', function() {
            const body = document.documentElement;
            body.classList.toggle('dark');
            body.classList.toggle('light');

            if (body.classList.contains('dark')) {
                document.querySelector('#moon-header-icon').classList.remove('hidden');
                document.querySelector('#sun-header-icon').classList.add('hidden');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.querySelector('#moon-header-icon').classList.add('hidden');
                document.querySelector('#sun-header-icon').classList.remove('hidden');
                localStorage.setItem('color-theme', 'light');
            };
        }));
    };

    load() {
        const colorTheme = localStorage.getItem('color-theme');
        if (colorTheme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
            document.querySelector('#moon-header-icon').classList.remove('hidden');
            document.querySelector('#sun-header-icon').classList.add('hidden');
        } else if (colorTheme === 'light') {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
            document.querySelector('#moon-header-icon').classList.add('hidden');
            document.querySelector('#sun-header-icon').classList.remove('hidden');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
            document.querySelector('#moon-header-icon').classList.add('hidden');
            document.querySelector('#sun-header-icon').classList.remove('hidden');
        };
    };
};

export default ColorTheme;